import { X, PlayCircle, Timer, BarChart3, Star, Zap, Target } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from "react-hot-toast";
import axios from 'axios';
import PerformanceAnalysis from '../article/ResultAnalysis';
import { useAppContext } from '../../context/AppContext';
import ExamCardHeader from './ExamCardHeader';
import Breadcrumbs from '../../components/Breadcrumbs';

const WeeklyTest = ({ onClose, type = 'weekly' }) => {
  const [loading, setLoading] = useState(false);
  
  // Destructuring all necessary context methods
  const { 
    backendUrl, 
    userData, 
    updateExamResults, 
    saveHistoryLog, 
    syncClick 
  } = useAppContext();

  // Settings
  const secondsPerQuestion = 36;
  const isModal = !!onClose;

  const bcsSyllabus = [
  { category: 'বাংলা সাহিত্য', limit: 35 },
  { category: 'ইংরেজি ভাষা ও সাহিত্য', limit: 35 },
  { category: 'বাংলাদেশ বিষয়াবলি', limit: 30 },
  { category: 'আন্তর্জাতিক বিষয়াবলি', limit: 20 },
  { category: 'সাধারণ বিজ্ঞান', limit: 15 },
  { category: 'গাণিতিক যুক্তি', limit: 15 },
  { category: 'মানসিক দক্ষতা', limit: 15 },
  { category: 'ভুগোল ও পরিবেশ', limit: 10 },
  { category: 'সুশাসন ও নৈতিকতা', limit: 10 },
  { category: 'কম্পিউটার ও তথ্যপ্রযুক্তি', limit: 15 },
];

  const [quizActive, setQuizActive] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  const startExam = async () => {
    setLoading(true);
    try {
      const responses = await Promise.all(
        bcsSyllabus.map(topic =>
          axios.get(`${backendUrl}/items`, {
            params: { category: topic.category, limit: topic.limit }
          }).then(res => {
            // Internal shuffle for each category to ensure variety
            const data = res.data || [];
            return data.sort(() => 0.5 - Math.random()).slice(0, topic.limit);
          }).catch(err => {
            console.error(`Failed to fetch ${topic.category}`, err);
            return [];
          })
        )
      );

      // Flatten the array of arrays into one single array of 200 questions
      const finalSelection = responses.flat();

      // Check if we actually got 200 questions
      if (finalSelection.length === 200) { 
        setQuestions(finalSelection);
        setTimeLeft(finalSelection.length * secondsPerQuestion);
        setQuizActive(true);
        setIsSubmitted(false);
        setUserAnswers({});
        toast.success("সাপ্তাহিক মেগা টেস্ট শুরু হচ্ছে!");
      } else {
        toast.error(`পর্যাপ্ত প্রশ্ন নেই! (প্রয়োজন ২০০, পাওয়া গেছে ${finalSelection.length}টি)`);
      }
    } catch (error) {
      toast.error("সার্ভার সংযোগ বিচ্ছিন্ন! আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitted) return;
    
    clearInterval(timerRef.current);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Calculate final stats
    let correct = 0;
    let wrong = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] !== undefined) {
        if (userAnswers[idx] === q.answer) correct++;
        else wrong++;
      }
    });

    // 1. Sync with Leaderboard & History
    if (userData?._id) {
      try {
        // Update stats (using 'weekly' points weight if necessary)
        await updateExamResults({
          userId: userData._id,
          correct,
          wrong,
          total: questions.length,
          points: correct // Standardizing 1 point per correct answer
        });

        // Record in personal history log
        await saveHistoryLog({
          testName: "Weekly Mega Model Test",
          score: correct,
          totalQuestions: questions.length,
          accuracy: ((correct / questions.length) * 100).toFixed(1),
          date: new Date().toISOString()
        });

        // Trigger global sync event
        await syncClick();
        
        toast.success("আপনার ফলাফল মেগা লিডারবোর্ডে আপডেট হয়েছে!");
      } catch (err) {
        console.error("Failed to sync weekly results:", err);
      }
    }
  };

  useEffect(() => {
    if (quizActive && timeLeft > 0 && !isSubmitted) {
      timerRef.current = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (quizActive && timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
    return () => clearInterval(timerRef.current);
  }, [quizActive, timeLeft, isSubmitted]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0
      ? `${h}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
      : `${m}:${sec.toString().padStart(2, '0')}`;
  };

  if (quizActive) {
    const score = questions.reduce((acc, q, idx) => acc + (userAnswers[idx] === q.answer ? 1 : 0), 0);
    const totalQ = questions.length;

    return (
      <div className="fixed inset-0 z-100 bg-white overflow-y-auto font-sans">
        <ExamCardHeader 
          timeLeft={timeLeft} 
          setQuizActive={setQuizActive} 
          formatTime={formatTime} 
          userAnswers={userAnswers} 
          totalQuestions={totalQ} 
        />
        <div className="max-w-3xl mx-auto p-4 md:p-8 mt-20">
          {isSubmitted && (
            <div className="mb-12 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10"><BarChart3 size={120} /></div>
              <h2 className="text-2xl font-black mb-6">পরীক্ষার ফলাফল</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl font-black mb-2">{Math.round((score / totalQ) * 100)}%</div>
                  <p className="text-indigo-300 font-bold italic">Weekly Syllabus Performance</p>
                </div>
                <PerformanceAnalysis score={score} total={totalQ} />
              </div>
            </div>
          )}

          <div className="space-y-12 mb-32">
            {questions.map((q, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-4 mb-5">
                  <span className="shrink-0 w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-black text-sm">{idx + 1}</span>
                  <div>
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter mb-1 block">{q.category}</span>
                    <h3 className="text-xl font-bold text-slate-800 leading-snug">{q.question}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 ml-0 md:ml-12">
                  {q.options.map((opt, i) => {
                    const isCorrect = opt === q.answer;
                    const isSelected = userAnswers[idx] === opt;
                    let style = "border-slate-100 bg-white text-slate-600 hover:border-indigo-200";
                    if (isSubmitted) {
                      if (isCorrect) style = "bg-emerald-50 border-emerald-500 text-emerald-700";
                      else if (isSelected) style = "bg-red-50 border-red-500 text-red-700";
                      else style = "bg-slate-50 border-slate-100 opacity-50";
                    } else if (isSelected) {
                      style = "bg-indigo-600 border-indigo-600 text-white shadow-lg scale-[1.01]";
                    }
                    return (
                      <button key={i} disabled={isSubmitted} onClick={() => setUserAnswers({ ...userAnswers, [idx]: opt })}
                        className={`w-full p-4 text-left border-2 rounded-2xl transition-all font-medium ${style}`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!isSubmitted && (
             <button 
              onClick={handleSubmit} 
              className=" bottom-4 left-1/2 relative -translate-x-1/2 w-[90%] max-w-md py-5 bg-indigo-600 text-white rounded-3xl font-black text-xl shadow-2xl hover:bg-indigo-700 active:scale-95 transition-all z-50"
             >
               পরীক্ষা সম্পন্ন করুন
             </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${isModal ? 'fixed inset-0 z-9999 flex items-center justify-center p-4' : 'min-h-screen pt-6 flex items-center justify-center p-4 bg-slate-50'}`}>
      {isModal && <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />}

      <div className={`relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300`}>
        <div className="p-8 flex justify-between items-center">
          <div className="px-4 py-1 rounded-full text-xs font-black flex items-center gap-2 uppercase tracking-widest bg-emerald-100 text-emerald-700">
            <Star size={14} fill="currentColor" /> Weekly Mega
          </div>
          {isModal ? (
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
              <X size={24} />
            </button>
          ) : <Breadcrumbs category="" customTitle="" />}
        </div>

        <div className="flex-1 flex flex-col items-center text-center px-10 pb-12">
          <div className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl mb-8 shadow-2xl bg-emerald-50 shadow-emerald-100">🏆</div>
          <h2 className="text-3xl font-black text-slate-900 mb-3">বিসিএস পূর্ণাঙ্গ মডেল টেস্ট</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-10">
            সম্পূর্ণ বিসিএস সিলেবাস (১০টি বিষয়) অনুযায়ী ২০০টি প্রশ্নের মেগা টেস্ট। প্রতিটি প্রশ্নের জন্য ৩৬ সেকেন্ড সময়।
          </p>

          <button disabled={loading} onClick={startExam}
            className="w-full py-5 text-white rounded-3xl font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 bg-emerald-600 hover:bg-emerald-700">
            {loading ? "সিলেবাস তৈরি হচ্ছে..." : <><PlayCircle size={24} /> শুরু করুন</>}
          </button>
        </div>

        <div className="bg-slate-50 p-6 grid grid-cols-3 gap-2 border-t border-slate-100">
          <StatItem icon={<Target size={16} />} label="সিলেবাস" value="Full BCS" />
          <StatItem icon={<Timer size={16} />} label="সময়" value={`${(200 * secondsPerQuestion) / 60} মিনিট`} />
          <StatItem icon={<BarChart3 size={16} />} label="মোট প্রশ্ন" value="২০০ MCQ" />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center border-r last:border-0 border-slate-200">
    <span className="text-slate-400 mb-1">{icon}</span>
    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{label}</span>
    <span className="text-xs font-bold text-slate-700">{value}</span>
  </div>
);

export default WeeklyTest;