import React from 'react';
import { Check, X, Info } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ExamQuestionCard = ({ questions, userAnswers, setUserAnswers, isSubmitted }) => {
  const { darkMode, toggleTheme } = useTheme();

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Typography
    questionNumber: darkMode 
      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/50" 
      : "bg-indigo-600 text-white shadow-md shadow-indigo-200",
    questionText: darkMode ? "text-slate-100" : "text-slate-800",
    
    // Explanation Section
    explanationBox: darkMode 
      ? "bg-amber-950/30 border-amber-500/40 text-amber-200" 
      : "bg-amber-50 border-amber-200/80 text-amber-900",
    explanationLabel: darkMode ? "text-amber-400" : "text-amber-700",
    explanationIcon: darkMode ? "text-amber-400" : "text-amber-600",
  };

  // Helper to resolve individual option styles without Tailwind dark: conflicts
  const getOptionStyles = (isCorrect, isSelected) => {
    // 1. Submitted State
    if (isSubmitted) {
      if (isCorrect) {
        return {
          container: darkMode 
            ? "bg-emerald-950/40 border-emerald-500/80 text-emerald-200 ring-2 ring-emerald-500/20 font-bold" 
            : "bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20 font-bold",
          badge: darkMode ? "bg-emerald-500 text-white" : "bg-emerald-500 text-white",
          iconBg: darkMode ? "bg-emerald-900/80 text-emerald-300" : "bg-white text-emerald-600 shadow-xs"
        };
      }
      if (isSelected) {
        return {
          container: darkMode 
            ? "bg-rose-950/40 border-rose-500/80 text-rose-200 font-semibold" 
            : "bg-rose-50 border-rose-500 text-rose-800 font-semibold",
          badge: darkMode ? "bg-rose-500 text-white" : "bg-rose-500 text-white",
          iconBg: darkMode ? "bg-rose-900/80 text-rose-300" : "bg-white text-rose-600 shadow-xs"
        };
      }
      return {
        container: darkMode 
          ? "bg-slate-900/40 border-slate-800/80 text-slate-500 opacity-50" 
          : "bg-slate-50/80 border-slate-150 text-slate-400 opacity-60",
        badge: darkMode ? "bg-slate-800 text-slate-500" : "bg-slate-200 text-slate-500",
        iconBg: null
      };
    }

    // 2. Active Selection State (During Exam)
    if (isSelected) {
      return {
        container: darkMode 
          ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-950/50 scale-[1.01] font-bold" 
          : "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200 scale-[1.01] font-bold",
        badge: "bg-white/20 text-white font-black",
        iconBg: null
      };
    }

    // 3. Default Unselected State
    return {
      container: darkMode 
        ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800/80 font-medium" 
        : "bg-white border-slate-200/80 text-slate-700 hover:border-indigo-300 hover:bg-slate-50/80 font-medium",
      badge: darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500",
      iconBg: null
    };
  };

  if (!questions || questions.length === 0) return null;

  return (
    <div className="space-y-8 sm:space-y-12 mb-24 sm:mb-32">
      {questions.map((q, idx) => (
        <div 
          key={idx} 
          className="group animate-in fade-in slide-in-from-bottom-4 duration-500 transition-all"
        >
          {/* Question Header */}
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm transition-colors ${theme.questionNumber}`}>
              {idx + 1}
            </span>
            <h3 className={`text-base sm:text-lg md:text-xl font-bold leading-snug sm:leading-relaxed pt-0.5 sm:pt-1 transition-colors ${theme.questionText}`}>
              {q.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="grid gap-2.5 sm:gap-3 ml-0 md:ml-13">
            {q.options?.map((opt, i) => {
              const isCorrect = opt === q.answer;
              const isSelected = userAnswers[idx] === opt;
              const styles = getOptionStyles(isCorrect, isSelected);

              let icon = null;
              if (isSubmitted) {
                if (isCorrect) {
                  icon = <Check className="w-4 h-4 sm:w-5 sm:h-5" />;
                } else if (isSelected) {
                  icon = <X className="w-4 h-4 sm:w-5 sm:h-5" />;
                }
              }

              return (
                <button
                  key={i}
                  disabled={isSubmitted}
                  onClick={() => setUserAnswers(prev => ({ ...prev, [idx]: opt }))}
                  aria-pressed={isSelected}
                  className={`relative w-full min-h-[52px] sm:min-h-[56px] py-3.5 sm:py-4 px-4 sm:px-5 text-left border-2 rounded-2xl sm:rounded-3xl transition-all duration-200 flex justify-between items-center gap-3 active:scale-[0.99] ${styles.container}`}
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 flex-1 break-words">
                    {/* Option Letter Badge (A, B, C, D) */}
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${styles.badge}`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed flex-1">
                      {opt}
                    </span>
                  </div>

                  {/* Feedback Icon */}
                  {icon && (
                    <div className={`ml-2 p-1 sm:p-1.5 rounded-full shrink-0 animate-in zoom-in duration-200 ${styles.iconBg}`}>
                      {icon}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Section */}
          {isSubmitted && q.explanation && (
            <div className={`mt-4 sm:mt-5 ml-0 md:ml-13 p-4 sm:p-5 rounded-2xl sm:rounded-[1.8rem] border flex gap-2.5 sm:gap-3 items-start animate-in slide-in-from-left-2 duration-300 transition-colors ${theme.explanationBox}`}>
              <Info className={`w-5 h-5 shrink-0 mt-0.5 ${theme.explanationIcon}`} />
              <div className="text-xs sm:text-sm md:text-base leading-relaxed opacity-95 flex-1">
                <span className={`font-bold mr-1.5 ${theme.explanationLabel}`}>
                  ব্যাখ্যা:
                </span> 
                {q.explanation}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExamQuestionCard;