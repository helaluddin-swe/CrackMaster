import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const McqCard = ({ mcqData, blogId = "default" }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { darkMode, toggleTheme } = useTheme();

  const handleMcqClick = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
  };

  if (!mcqData) return null;

  const isCorrect = selectedOption?.trim().split(' ')[0] === mcqData.answer.trim().split(' ')[0];

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Card Container Surfaces
    cardBg: darkMode 
      ? "bg-slate-900 border-slate-800 text-slate-100 shadow-xl shadow-slate-950/50 hover:border-indigo-500/50" 
      : "bg-white border-slate-200/80 text-slate-800 shadow-lg shadow-slate-200/50 hover:border-indigo-300",
    
    // Question Badge & Text
    badgeBg: darkMode ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" : "bg-indigo-50 text-indigo-600 border-indigo-100",
    questionText: darkMode ? "text-slate-100" : "text-slate-900",
    
    // Explanation Box Surfaces
    explanationBox: darkMode 
      ? "bg-slate-800/90 text-slate-200 border-indigo-500 shadow-xl" 
      : "bg-slate-50 text-slate-900 border-indigo-500 shadow-md",
    explanationAnswerBadge: darkMode ? "bg-indigo-950/80 text-indigo-300" : "bg-indigo-100 text-indigo-900",
    explanationBody: darkMode ? "text-slate-300 border-slate-700" : "text-slate-600 border-slate-200",
    explanationTitle: darkMode ? "text-slate-200" : "text-slate-800"
  };

  // Helper for dynamic option styles
  const getOptionStyles = (isThisSelected, isThisCorrect) => {
    if (!selectedOption) {
      return darkMode 
        ? "bg-slate-800/80 border-slate-700/80 text-slate-300 hover:border-indigo-500 hover:bg-slate-800" 
        : "bg-slate-50/80 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-slate-100/60";
    }

    if (isThisSelected && isThisCorrect) {
      return darkMode 
        ? "bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold" 
        : "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.1)] font-bold";
    }

    if (isThisSelected && !isThisCorrect) {
      return darkMode 
        ? "bg-rose-950/40 border-rose-500 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.15)] font-semibold" 
        : "bg-rose-50 border-rose-500 text-rose-900 shadow-[0_0_15px_rgba(244,63,94,0.1)] font-semibold";
    }

    if (isThisCorrect) {
      return darkMode 
        ? "border-emerald-500/40 bg-slate-800/40 text-slate-400 font-medium" 
        : "border-emerald-500/40 bg-slate-50/40 text-slate-500 font-medium";
    }

    return darkMode 
      ? "bg-slate-900/40 border-slate-800/50 text-slate-600 opacity-40" 
      : "bg-white border-slate-100 text-slate-400 opacity-50";
  };

  return (
    <div className={`p-5 sm:p-6 md:p-8 rounded-3xl border relative overflow-hidden group transition-all duration-300 ${theme.cardBg}`}>
      <div className="relative z-10">
        
        {/* Question Header */}
        <div className="flex items-start gap-3.5 sm:gap-4 mb-5 sm:mb-6">
          <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-xl font-black text-xs sm:text-sm border transition-colors ${theme.badgeBg}`}>
            {mcqData.id}
          </span>
          <p className={`text-base sm:text-lg md:text-xl font-medium leading-snug sm:leading-relaxed italic pt-0.5 ${theme.questionText}`}>
            {mcqData.question}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 ml-0 md:ml-12">
          {mcqData.options?.map((opt, i) => {
            const isThisSelected = selectedOption === opt;
            const isThisCorrect = opt.trim().split(' ')[0] === mcqData.answer.trim().split(' ')[0];
            const optionStyle = getOptionStyles(isThisSelected, isThisCorrect);

            return (
              <button
                key={i}
                disabled={!!selectedOption}
                onClick={() => handleMcqClick(opt)}
                aria-pressed={isThisSelected}
                className={`text-left min-h-[52px] sm:min-h-[56px] p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border-2 font-medium flex justify-between items-center gap-3 active:scale-[0.99] ${optionStyle}`}
              >
                <span className="text-sm sm:text-base leading-relaxed flex-1">{opt}</span>
                {isThisSelected && (
                  <span className="text-lg sm:text-xl shrink-0 animate-in zoom-in duration-200">
                    {isThisCorrect ? '✨' : '❌'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Section */}
        <AnimatePresence>
          {selectedOption && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-0 md:ml-12 overflow-hidden"
            >
              <div className={`mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl border-l-8 transition-colors ${theme.explanationBox}`}>
                <div className="flex flex-wrap items-center gap-2 mb-2 text-indigo-600 font-bold text-xs sm:text-sm">
                  <span className="flex items-center gap-1">🎯 সঠিক উত্তর:</span>
                  <span className={`px-2 py-0.5 rounded font-mono font-semibold ${theme.explanationAnswerBadge}`}>
                    {mcqData.answer}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed border-t pt-2.5 mt-2 transition-colors ${theme.explanationBody}`}>
                  <span className={`font-bold uppercase tracking-wider text-[10px] block mb-1 ${theme.explanationTitle}`}>
                    ব্যাখ্যা:
                  </span>
                  {mcqData.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default McqCard;