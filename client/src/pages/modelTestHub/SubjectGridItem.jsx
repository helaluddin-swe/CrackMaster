import React from 'react';
import { PlayCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/**
 * SubjectGridItem Component
 * Individual card for selecting a test subject.
 */
const SubjectGridItem = ({ subject, onClick }) => {
  const { darkMode, toggleTheme } = useTheme();

  if (!subject) return null;

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Button Base & States
    buttonBg: darkMode 
      ? "bg-slate-900 border-slate-800 shadow-slate-950/50 hover:border-indigo-500/80 hover:bg-slate-800/80" 
      : "bg-white border-slate-200/80 shadow-sm hover:border-indigo-400 hover:bg-slate-50/50",
    
    // Typography
    titleText: darkMode 
      ? "text-slate-100 group-hover:text-indigo-400" 
      : "text-slate-800 group-hover:text-indigo-700",
    
    // Tag Elements
    tagBg: darkMode 
      ? "bg-slate-800/80 border-slate-700/60 text-slate-400" 
      : "bg-slate-50 border-slate-150 text-slate-500",
    
    // Action Icon State
    actionIcon: darkMode 
      ? "text-slate-700 group-hover:text-indigo-400" 
      : "text-slate-300 group-hover:text-indigo-600"
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 group active:scale-[0.98] shadow-xs ${theme.buttonBg}`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 text-left flex-1 min-w-0">
        
        {/* Icon Container with Subject-Specific Background */}
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-inner shrink-0 ${subject.color || 'bg-indigo-500/10 text-indigo-500'}`}>
          {subject.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-base sm:text-lg truncate transition-colors ${theme.titleText}`}>
            {subject.name}
          </h3>
          
          {/* Tags / Sub-topics */}
          <div className="flex flex-wrap gap-1 mt-1.5">
            {subject.tags?.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className={`text-[10px] sm:text-xs border px-2 py-0.5 rounded-md font-medium tracking-wide transition-colors ${theme.tagBg}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Icon */}
      <div className="shrink-0 ml-3">
        <PlayCircle 
          className={`transition-colors duration-300 w-6 h-6 sm:w-7 sm:h-7 ${theme.actionIcon}`} 
        />
      </div>
    </button>
  );
};

export default SubjectGridItem;