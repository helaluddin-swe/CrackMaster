import { ArrowLeft, Timer, Sun, Moon } from 'lucide-react';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ExamCardHeader = ({ setQuizActive, formatTime, userAnswers, timeLeft, totalQuestions }) => {
  const { darkMode, toggleTheme } = useTheme();

  // Logic to calculate progress percentage
  const answeredCount = Object.keys(userAnswers).length;
  const progress = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Header Surfaces
    headerBg: darkMode 
      ? "bg-slate-900/95 border-slate-800 shadow-slate-950/50" 
      : "bg-white/95 border-slate-200 shadow-sm",
    
    // Interactive Elements
    backBtn: darkMode 
      ? "text-slate-400 hover:text-slate-100 hover:bg-slate-800" 
      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100",
    themeToggle: darkMode 
      ? "bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-amber-300" 
      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
    
    // Progress & Stats Typography
    statTotal: darkMode ? "text-slate-500" : "text-slate-400",
    progressBadgeBg: darkMode ? "bg-indigo-950/50 border-indigo-500/30 text-indigo-300" : "bg-indigo-50 border-indigo-100 text-indigo-600",
    
    // Timer States
    timerNormal: darkMode 
      ? "bg-slate-800 border-slate-700 text-indigo-400" 
      : "bg-indigo-50 border-indigo-100 text-indigo-700",
    timerUrgent: darkMode 
      ? "bg-red-950/60 border-red-500/50 text-red-400 animate-pulse" 
      : "bg-red-50 border-red-200 text-red-600 animate-pulse"
  };

  return (
    /* z-[110] ensures it sits above the quiz container; backdrop-blur ensures readability when scrolling */
    <div className={`fixed top-0 left-0 right-0 z-[110] border-b backdrop-blur-md transition-colors duration-300 ${theme.headerBg}`}>
      
      {/* Animated Top Progress Bar */}
      <div className="w-full bg-slate-200/20 h-1 overflow-hidden">
        <div 
          className="h-full bg-indigo-600 transition-all duration-500 ease-out shadow-sm" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Left Section: Back Button */}
        <div className="flex-1 flex items-center justify-start">
          <button 
            onClick={() => {
              if (window.confirm("আপনি কি পরীক্ষা থেকে বের হতে চান? আপনার প্রগতি হারিয়ে যাবে।")) {
                setQuizActive(false);
              }
            }} 
            aria-label="Exit exam"
            className={`py-1.5 px-2.5 sm:px-3 rounded-xl font-bold flex items-center gap-1.5 transition-all duration-200 group active:scale-95 ${theme.backBtn}`}
          >
            <ArrowLeft className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline-block text-sm font-semibold">পিছনে</span>
          </button>
        </div>

        {/* Center Section: Countdown Timer */}
        <div className="shrink-0">
          <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl font-mono font-black text-sm sm:text-lg border transition-colors duration-300 shadow-xs ${
            timeLeft < 60 ? theme.timerUrgent : theme.timerNormal
          }`}>
            <Timer className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 animate-spin-slow" /> 
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Right Section: Counter Display & Theme Toggle */}
        <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3 font-black">
          
          {/* Question Counter */}
          <div className="text-right flex items-baseline">
            <span className="text-base sm:text-xl leading-none text-indigo-500 font-black">
              {answeredCount}
            </span>
            <span className={`text-[11px] sm:text-sm ml-0.5 sm:ml-1 font-bold transition-colors ${theme.statTotal}`}>
              / {totalQuestions}
            </span>
          </div>

          {/* Percentage Circle (Hidden on extra small screens to save space) */}
          <div className={`hidden md:flex w-8 h-8 rounded-full items-center justify-center text-[11px] font-bold border shrink-0 transition-colors ${theme.progressBadgeBg}`}>
            {Math.round(progress)}%
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 sm:p-2.5 rounded-xl transition-all duration-200 active:scale-90 shrink-0 ${theme.themeToggle}`}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:-rotate-12" />
            )}
          </button>

        </div>

      </div>
    </div>
  );
};

export default ExamCardHeader;