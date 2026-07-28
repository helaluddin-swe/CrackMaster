import React from 'react';
import { Info, CheckCircle2, XCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ExamQuestionCard = ({ 
  question, 
  index, 
  isSubmitted, 
  selectedAnswer, 
  onSelect 
}) => {
  const { darkMode, toggleTheme } = useTheme();

  if (!question) return null;

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Card Containers
    cardBase: darkMode 
      ? "bg-slate-900 border-slate-800 text-slate-100 shadow-slate-950/50" 
      : "bg-white border-slate-200/80 text-slate-800 shadow-sm",
    cardCorrect: darkMode 
      ? "bg-emerald-950/20 border-emerald-500/50" 
      : "bg-emerald-50/30 border-emerald-500",
    cardDefaultSubmitted: darkMode 
      ? "bg-slate-900 border-slate-800" 
      : "bg-white border-slate-200/80",
    
    // Typography
    questionText: darkMode ? "text-slate-100" : "text-slate-900",
    questionNumber: darkMode ? "text-indigo-400" : "text-indigo-600",
    
    // Explanation Section
    explanationBox: darkMode 
      ? "bg-indigo-950/30 border-indigo-500/80 text-slate-300" 
      : "bg-indigo-50/60 border-indigo-500 text-slate-700",
    explanationTitle: darkMode ? "text-indigo-400" : "text-indigo-900",
    explanationIcon: darkMode ? "text-indigo-400" : "text-indigo-600",
  };

  // Determine outer card theme
  const getCardStyle = () => {
    if (!isSubmitted) return theme.cardBase;
    return selectedAnswer === question.answer ? theme.cardCorrect : theme.cardDefaultSubmitted;
  };

  // Helper to resolve individual option styles
  const getOptionStyles = (opt, isCorrect, isSelected) => {
    // 1. Submitted State
    if (isSubmitted) {
      if (isCorrect) {
        return {
          container: darkMode 
            ? "border-emerald-500/80 bg-emerald-950/40 text-emerald-200 font-bold" 
            : "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold",
          circle: darkMode ? "bg-emerald-600 text-white" : "bg-emerald-500 text-white"
        };
      }
      if (isSelected) {
        return {
          container: darkMode 
            ? "border-rose-500/80 bg-rose-950/40 text-rose-200 font-semibold" 
            : "border-rose-500 bg-rose-50 text-rose-900 font-semibold",
          circle: darkMode ? "bg-rose-600 text-white" : "bg-rose-500 text-white"
        };
      }
      return {
        container: darkMode 
          ? "border-slate-800/60 bg-slate-900/40 text-slate-600 opacity-50" 
          : "border-slate-100 bg-slate-50/50 text-slate-400 opacity-60",
        circle: darkMode ? "bg-slate-800/50 text-slate-600" : "bg-slate-100 text-slate-400"
      };
    }

    // 2. Active Selection State
    if (isSelected) {
      return {
        container: darkMode 
          ? "border-indigo-500 bg-indigo-950/40 text-indigo-200 ring-2 ring-indigo-500/20 font-semibold" 
          : "border-indigo-600 bg-indigo-50/80 text-indigo-950 ring-2 ring-indigo-600/10 font-semibold",
        circle: "bg-indigo-600 text-white"
      };
    }

    // 3. Default Unselected State
    return {
      container: darkMode 
        ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800/80" 
        : "border-slate-200/80 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50",
      circle: darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
    };
  };

  return (
    <div 
      className={`p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 mb-5 sm:mb-6 ${getCardStyle()}`}
    >
      {/* Question Text */}
      <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-5 sm:mb-6 flex items-start gap-2.5 sm:gap-3 leading-snug sm:leading-relaxed transition-colors ${theme.questionText}`}>
        <span className={`font-black shrink-0 ${theme.questionNumber}`}>
          {index + 1}.
        </span> 
        <span className="flex-1">{question.question}</span>
      </h3>

      {/* Options Grid */}
      <div className="grid gap-2.5 sm:gap-3">
        {question.options?.map((opt, i) => {
          const isCorrect = opt === question.answer;
          const isSelected = selectedAnswer === opt;
          const styles = getOptionStyles(opt, isCorrect, isSelected);

          return (
            <button
              key={`${question._id || index}-opt-${i}`}
              disabled={isSubmitted}
              onClick={() => onSelect(opt)}
              aria-pressed={isSelected}
              className={`w-full min-h-[52px] sm:min-h-[56px] py-3.5 sm:py-4 px-4 sm:px-5 text-left rounded-xl sm:rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-3 group active:scale-[0.99] ${styles.container}`}
            >
              <div className="flex items-center gap-3 sm:gap-3.5 flex-1">
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors ${styles.circle}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm sm:text-base leading-relaxed break-words font-medium">
                  {opt}
                </span>
              </div>
              
              {/* Feedback Icons */}
              {isSubmitted && (
                <div className="shrink-0 ml-2">
                  {isCorrect && (
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 animate-in zoom-in duration-200" />
                  )}
                  {isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 animate-in zoom-in duration-200" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Section */}
      {isSubmitted && (
        <div className={`mt-6 p-4 sm:p-5 border-l-4 rounded-r-xl sm:rounded-r-2xl animate-in fade-in slide-in-from-top-2 duration-300 transition-colors ${theme.explanationBox}`}>
          <div className={`flex items-center gap-2 font-bold mb-2 ${theme.explanationTitle}`}>
            <Info className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${theme.explanationIcon}`} />
            <span className="text-xs sm:text-sm uppercase tracking-wider">ব্যাখ্যা</span>
          </div>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal opacity-95">
            {question.explanation || "এই প্রশ্নের জন্য কোনো ব্যাখ্যা পাওয়া যায়নি।"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionCard;