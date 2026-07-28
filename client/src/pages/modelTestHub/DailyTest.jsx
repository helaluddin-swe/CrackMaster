import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, CheckCircle } from 'lucide-react';
import { toast } from "react-hot-toast";
import axios from 'axios';
import PerformanceAnalysis from '../article/ResultAnalysis';
import { useAppContext } from '../../context/AppContext';

import ExamCardHeader from './ExamCardHeader';
import StartExamCard from './StartExamCard';
import ExamQuestionCard from './ExamQuestionCard';

const DailyTest = ({ onClose }) => {
  const { 
    userData, 
    backendUrl, 
    saveHistoryLog, 
    updateExamResults 
  } = useAppContext();

  const [loading, setLoading] = useState(false);
  const isModal = !!onClose;

  const [quizActive, setQuizActive] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  // 20 Minutes (matching your StartExamCard UI)
  const TOTAL_TIME = 20 * 60; 

  // --- Start Exam Logic ---
  // categoryApiName now receives the Subject Name (e.g., "বাংলা সাহিত্য")
  const startDailyTest = async (subjectName) => {
    setLoading(true);
    try {
      // Logic: Fetch questions where the 'topic' matches today's scheduled subject
      const response = await axios.get(`${backendUrl}/items`, {
        params: {
          topic: subjectName, // Changing 'category' to 'topic' to match your DB structure
          limit: 100 // Fetch a larger pool to shuffle from
        }
      });

      if (!response.data || response.data.length === 0) {
        toast.error("এই বিষয়ের কোনো প্রশ্ন এখনো যোগ করা হয়নি!");
        return;
      }

      // Shuffle and take exactly 30 questions
      const shuffled = response.data.sort(() => 0.5 - Math.random());
      const processedData = shuffled.slice(0, 30);

      setQuestions(processedData);
      setTimeLeft(TOTAL_TIME);
      setQuizActive(true);
      toast.success(`${subjectName} পরীক্ষা শুরু হচ্ছে!`);
    } catch (error) {
      toast.error("সার্ভার সংযোগ বিচ্ছিন্ন!");
    } finally {
      setLoading(false);
    }
  };

  // --- Timer Logic ---
  useEffect(() => {
    if (quizActive && timeLeft > 0 && !isSubmitted) {
      timerRef.current = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (quizActive && timeLeft === 0 && !isSubmitted) {
      handleSubmit(); 
    }
    return () => clearInterval(timerRef.current);
  }, [quizActive, timeLeft, isSubmitted]);

  // --- Submit & Save Logic ---
  const handleSubmit = async () => {
    if (isSubmitted) return; 

    clearInterval(timerRef.current);
    setIsSubmitted(true);
    
    // Scroll to top to show result card
    const container = document.getElementById('quiz-container');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });

    const correctCount = questions.reduce((acc, q, idx) => acc + (userAnswers[idx] === q.answer ? 1 : 0), 0);
    const totalQuestions = questions.length;
    const answeredCount = Object.keys(userAnswers).length;
    const incorrectCount = answeredCount - correctCount;
    const unansweredCount = totalQuestions - answeredCount;
    const timeSpent = TOTAL_TIME - timeLeft;

    if (userData?._id) {
      try {
        // Save to Daily History (to prevent multiple exams per day)
        await saveHistoryLog({
          userId: userData._id,
          userName: userData.name || "Anonymous",
          topic: questions[0]?.topic || "Daily Test",
          correct: correctCount,
          incorrect: incorrectCount,
          unanswered: unansweredCount,
          total: totalQuestions,
          timeSpentSeconds: timeSpent,
          isDailyLive: true // Flag to identify this in history
        });

        await updateExamResults({
          userId: userData._id,
          correct: correctCount,
          wrong: incorrectCount,
          total: totalQuestions
        });

        toast.success("আপনার ফলাফল সেভ করা হয়েছে!");
      } catch (error) {
        toast.error("ফলাফল সেভ করা যায়নি।");
      }
    }
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  if (quizActive) {
    const score = questions.reduce((acc, q, idx) => acc + (userAnswers[idx] === q.answer ? 1 : 0), 0);

    return (
      <div id="quiz-container" className="fixed inset-0 z-10001 bg-slate-50 h-screen overflow-y-auto scroll-smooth">
        <ExamCardHeader
          setQuizActive={setQuizActive}
          userAnswers={userAnswers}
          formatTime={formatTime}
          timeLeft={timeLeft}
          totalQuestions={questions.length}
        />

        <div className="max-w-2xl mx-auto p-4 md:p-8 mt-24 pb-40">
          {isSubmitted && (
            <div className="mb-12 bg-indigo-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <BarChart3 size={100} />
              </div>
              <h2 className="text-xl font-bold mb-2">আপনার স্কোর</h2>
              <div className="text-6xl font-black mb-4">
                {score}<span className="text-2xl opacity-50">/{questions.length}</span>
              </div>
              <PerformanceAnalysis score={score} total={questions.length}timeSpent={timerRef}/>
            </div>
          )}

          <div className="space-y-6">
            {questions.map((q, idx) => (
              <ExamQuestionCard
                key={q._id || idx}
                index={idx}
                question={q} 
                isSubmitted={isSubmitted}
                selectedAnswer={userAnswers[idx]}
                onSelect={(answer) => !isSubmitted && setUserAnswers(prev => ({ ...prev, [idx]: answer }))}
              />
            ))}
          </div>
        </div>

        {/* Fixed Footer for Submit Button */}
        {!isSubmitted && (
          <div className=" bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t z-50">
            <div className="max-w-2xl mx-auto">
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <CheckCircle size={20} /> সাবমিট করুন
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <StartExamCard
      onClose={onClose}
      isModal={isModal}
      loading={loading}
      startDailyTest={startDailyTest}
    />
  );
};

export default DailyTest;