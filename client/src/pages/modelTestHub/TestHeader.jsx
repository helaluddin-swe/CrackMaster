import { ArrowLeft, Timer, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const TestHeader = ({ timeLeft, isSubmitted, topicName, answeredCount, totalCount, onClose }) => {
  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  const { darkMode, toggleTheme } = useTheme();

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    headerBg: darkMode 
      ? "bg-slate-900/95 border-slate-800 text-slate-100 shadow-slate-950/50" 
      : "bg-white/95 border-slate-200/80 text-slate-800 shadow-sm",
    
    backButton: darkMode 
      ? "text-slate-400 hover:text-red-400 hover:bg-slate-800" 
      : "text-slate-500 hover:text-red-500 hover:bg-slate-100",
    
    themeToggle: darkMode 
      ? "bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-amber-300" 
      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
    
    timerNormal: darkMode 
      ? "bg-indigo-950/50 border-indigo-500/30 text-indigo-300" 
      : "bg-indigo-50 border-indigo-100 text-indigo-700",
    
    timerUrgent: darkMode 
      ? "bg-red-950/60 border-red-500/50 text-red-400 animate-pulse" 
      : "bg-red-100 border-red-200 text-red-600 animate-pulse",
    
    counterText: darkMode ? "text-slate-400" : "text-slate-400",
    topicText: darkMode ? "text-slate-300" : "text-slate-700"
  };

  return (
    <div className={`sticky top-0 z-50 border-b backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-3.5 transition-colors duration-300 ${theme.headerBg}`}>
      <div className="max-w-4xl mx-auto flex justify-around items-center gap-2">
        
        {/* Left Section: Back / Close Button */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
          <button 
            onClick={onClose} 
            aria-label="Close test"
            className={`py-1.5 px-2.5 sm:px-3 rounded-xl font-bold flex items-center gap-1.5 transition-all duration-200 active:scale-95 ${theme.backButton}`}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> 
            <span className="text-xs sm:text-sm">বন্ধ করুন</span>
          </button>

          {/* Optional Topic Name for Tablet/Desktop */}
          {topicName && (
            <span className={`hidden md:inline-block text-xs sm:text-sm font-semibold truncate max-w-[200px] ${theme.topicText}`}>
              {topicName}
            </span>
          )}
        </div>
       
        {/* Center Section: Timer */}
        {!isSubmitted && (
          <div className="shrink-0">
            <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-mono font-bold text-xs sm:text-sm border transition-colors shadow-xs ${
              timeLeft < 60 ? theme.timerUrgent : theme.timerNormal
            }`}>
              <Timer className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" /> 
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        )}

        {/* Right Section: Counter Display & Theme Toggle */}
        <div className="flex-1 flex justify-end items-center gap-3 sm:gap-4">
          <div className="text-right">
            <span className="text-sm sm:text-base font-black text-indigo-500">{answeredCount}</span>
            <span className={`text-xs sm:text-sm font-bold ml-1 ${theme.counterText}`}>/ {totalCount}</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl transition-all duration-200 active:scale-90 shrink-0 ${theme.themeToggle}`}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default TestHeader;