// built in pakages or third party api
import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Search, X, Trophy, ArrowRight, RotateCcw, Moon, Sun } from 'lucide-react';
import { toast } from "react-hot-toast";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// context imports
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

// Sub-components
import TestHeader from './TestHeader';
import TestResultSummary from './TestResultSummary';
import ExamQuestionCard from './ExamQuestionCard';
import StartTestModal from './StartTestModal';
import LoadingOverlay from '../mcqHub/LoadingOverlay';
import SubjectGridItem from './SubjectGridItem';

// reuse components
import Breadcrumbs from '../../components/Breadcrumbs';
import { subjects_Model_Test } from '../article/data';

const BcsModelTest= ({ onClose }) => {
  const { darkMode,toggleTheme } = useTheme();
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.back();
  };
  
  // Destructuring updated methods from context
  const { 
    backendUrl, 
    userData, 
    updateExamResults, 
    saveHistoryLog 
  } = useAppContext();

  // Selection States
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [questionCount, setQuestionCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  // Exam States
  const [quizActive, setQuizActive] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Layout Surfaces
    pageBg: darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800",
    modalBg: darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-800 border-transparent",
    headerBg: darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
    contentBg: darkMode ? "bg-slate-950/50" : "bg-slate-50/50",
    
    // Interactive Elements
    closeBtn: darkMode 
      ? "bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400" 
      : "bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600",
    iconContainer: darkMode ? "bg-indigo-500/15 text-indigo-400" : "bg-indigo-50 text-indigo-600",
    
    // Typography
    headingText: darkMode ? "text-white" : "text-slate-900",
    subText: darkMode ? "text-slate-400" : "text-slate-500",
    
    // Action Buttons
    secondaryBtn: darkMode 
      ? "bg-slate-800 text-slate-200 hover:bg-slate-700 active:scale-95" 
      : "bg-slate-800 text-white hover:bg-slate-900 active:scale-95",
    primarySubmitBtn: darkMode
      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-950/50"
      : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20"
  };

  // 1. Fetch Questions Logic
  const fetchQuestions = async (subject) => {
    setLoading(true);
    setNoData(false);
    try {
      const params = subject.isSpecial ? { limit: 100 } : { topic: subject.name, limit: questionCount };
      const response = await axios.get(`${backendUrl}/api/v1/questions`, { params });

      if (!response.data || response.data.length === 0) {
        setQuestions([]);
        setNoData(true);
        toast.error("দুঃখিত, কোনো প্রশ্ন পাওয়া যায়নি!");
        return;
      }

      const processedData = response.data
        .sort(() => 0.5 - Math.random())
        .slice(0, subject.isSpecial ? 100 : questionCount);

      setQuestions(processedData);
      setTimeLeft(processedData.length * 36); // 36 seconds per question
      setQuizActive(true);
      setIsSubmitted(false);
      setUserAnswers({});
    } catch (error) {
      toast.error("সার্ভার ত্রুটি!");
    } finally {
      setLoading(false);
    }
  };

  // 2. Submit Logic (Uses AppContext Methods)
  const handleSubmit = async () => {
    if (isSubmitted) return;
    clearInterval(timerRef.current);
    
    let correct = 0;
    let wrong = 0;

    questions.forEach((q, idx) => {
      if (userAnswers[idx] !== undefined) {
        if (userAnswers[idx] === q.answer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleGoBack=()=>{
      window.history.back()
    }

    // Sync with Leaderboard and Save to History
    if (userData?._id) {
      try {
        await updateExamResults({
          userId: userData._id,
          correct,
          wrong,
          total: questions.length,
          points: correct
        });

        await saveHistoryLog({
          testName: selectedTopic?.name || "Model Test",
          score: correct,
          totalQuestions: questions.length,
          accuracy: ((correct / questions.length) * 100).toFixed(1),
          date: new Date().toISOString()
        });

        toast.success("ফলাফল সংরক্ষিত ও আপডেট করা হয়েছে!");
      } catch (error) {
        console.error("Result sync failed", error);
        toast.error("লিডারবোর্ড আপডেট করতে সমস্যা হয়েছে।");
      }
    }
  };

  // 3. Timer Effect
  useEffect(() => {
    if (quizActive && timeLeft > 0 && !isSubmitted) {
      timerRef.current = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (quizActive && timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
    return () => clearInterval(timerRef.current);
  }, [quizActive, timeLeft, isSubmitted]);

  // ==========================================
  // VIEW 1: ACTIVE QUIZ / EXAM MODE
  // ==========================================
  if (quizActive) {
    const correctCount = questions.reduce((acc, q, idx) => 
      acc + (userAnswers[idx] === q.answer ? 1 : 0), 0
    );

    return (
      <div className={`fixed inset-0 z-10001 h-screen overflow-y-auto overflow-x-hidden transition-colors duration-300 animate-in fade-in ${theme.pageBg}`}>
        <TestHeader
          timeLeft={timeLeft}
          isSubmitted={isSubmitted}
          topicName={selectedTopic?.name}
          answeredCount={Object.keys(userAnswers).length}
          totalCount={questions.length}
          onClose={() => { setQuizActive(false); setSelectedTopic(null); }}
        />

        <div className="max-w-3xl mx-auto p-4 sm:p-6 pb-32 pt-6 sm:pt-10">
          {isSubmitted && (
            <div className="space-y-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <TestResultSummary score={correctCount} total={questions.length} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to='/leaderboard'
                  className="py-4 px-6 bg-amber-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-amber-600 transition-all active:scale-95"
                >
                  <Trophy size={20} /> লিডারবোর্ড দেখুন
                </Link>
                <button 
                  onClick={() => { setQuizActive(false); setSelectedTopic(null); }}
                  className={`py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${theme.secondaryBtn}`}
                >
                  <RotateCcw size={20} /> নতুন পরীক্ষা
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4 sm:space-y-6">
            {questions.map((q, idx) => (
              <ExamQuestionCard
                key={idx}
                question={q}
                index={idx}
                isSubmitted={isSubmitted}
                selectedAnswer={userAnswers[idx]}
                onSelect={(opt) => !isSubmitted && setUserAnswers(prev => ({ ...prev, [idx]: opt }))}
              />
            ))}
          </div>

          {!isSubmitted && (
            <button 
              onClick={handleSubmit} 
              className={`w-full mt-10 py-5 rounded-3xl font-black text-lg sm:text-xl shadow-xl transition-all active:scale-95 ${theme.primarySubmitBtn}`}
            >
              পরীক্ষা সম্পন্ন করুন
            </button>
          )}
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: SUBJECT SELECTION HUB
  // ==========================================
  return (
    <div className="fixed inset-0 z-9999 flex items-end md:items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Main Modal Window */}
      <div className={`relative w-full h-[92dvh] md:h-[94dvh] md:max-w-[96vw] xl:max-w-350 rounded-t-4xl md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300 border ${theme.modalBg}`}>
        
        {/* Hub Header (Sticky) */}
        <div className={`px-4 sm:px-6 py-3.5 md:px-10 md:py-5 border-b flex justify-between items-center shrink-0 z-10 transition-colors ${theme.headerBg}`}>
          <div className="flex items-center gap-3 md:gap-4">
            <div className={`p-2.5 sm:p-3 rounded-2xl flex items-center justify-center transition-transform duration-300 ${theme.iconContainer}`}>
              <BookOpen size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div>
              <h2 className={`text-base sm:text-xl md:text-2xl font-black tracking-tight leading-none mb-1 ${theme.headingText}`}>
                 TESTMASTER
              </h2>
              <div className="hidden sm:block">
                <Breadcrumbs category="test-hub" />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block sm:hidden ${theme.subText}`}>
                বিসিএস ও প্রস্তুতিমূলক পরীক্ষা
              </span>
            </div>
          </div>

          
           

            <div className="flex items-center gap-4">
              <div className="hidden lg:block"><Breadcrumbs category="test-hub" /></div>

              {/* Theme Toggle Button (Desktop & Mobile Content View) */}
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400 hover:bg-gray-800 bg-gray-800 md:bg-transparent' : 'text-gray-500 hover:bg-gray-100 bg-gray-100 md:bg-transparent'
                }`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={onClose || handleGoBack}
                title="Close"
                aria-label="Close"
                className={`hidden md:block transition-colors text-gray-400 ${darkMode ? 'hover:text-rose-400' : 'hover:text-rose-500'
                  }`}
              >
                <X size={24} />
              </button>
            </div>
          
        </div>

        {/* Scrollable Content Area */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar overscroll-contain transition-colors ${theme.contentBg}`}>
          <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 pb-24">
              {subjects_Model_Test.map((subject, idx) => (
                <SubjectGridItem
                  key={idx}
                  subject={subject}
                  onClick={() => {
                    setSelectedTopic(subject);
                    setQuestionCount(subject.mark || 10);
                    setNoData(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Start Modal & Loading Overlay */}
      {selectedTopic && !quizActive && (
        <StartTestModal
          selectedTopic={selectedTopic}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          loading={loading}
          noData={noData}
          onStart={() => fetchQuestions(selectedTopic)}
          onClose={() => setSelectedTopic(null)}
        />
      )}
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default BcsModelTest;