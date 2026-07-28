import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const StartTestModal = ({ selectedTopic, questionCount, setQuestionCount, loading, noData, onStart, onClose }) => {
  const { darkMode, toggleTheme } = useTheme();

  if (!selectedTopic) return null;

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Backdrop Surface
    backdrop: darkMode ? "bg-slate-950/70 backdrop-blur-md" : "bg-slate-900/40 backdrop-blur-md",
    
    // Modal Box Card
    card: darkMode 
      ? "bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl shadow-slate-950/80" 
      : "bg-white border border-slate-100 text-slate-800 shadow-2xl shadow-indigo-950/25",
    
    // No Data State
    noDataText: darkMode ? "text-slate-100" : "text-slate-900",
    noDataButton: darkMode 
      ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700" 
      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200",
    
    // Question Selection Label
    labelColor: darkMode ? "text-slate-400" : "text-slate-500",
    
    // Question Count Buttons
    countBtnActive: darkMode 
      ? "border-indigo-500 bg-indigo-950/60 text-indigo-300 font-black shadow-md shadow-indigo-950/50" 
      : "border-indigo-600 bg-indigo-50 text-indigo-600 font-black shadow-sm",
    countBtnInactive: darkMode 
      ? "border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700 hover:text-slate-200" 
      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-slate-50",
    
    // Start Button
    startButton: darkMode 
      ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-950/50" 
      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200"
  };

  return (
    <div className="fixed inset-0 z-10002 flex items-center justify-center p-4 sm:p-6 transition-colors duration-300">
      
      {/* Backdrop */}
      <div className={`absolute inset-0 transition-opacity ${theme.backdrop}`} onClick={onClose} />
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-sm sm:max-w-md rounded-3xl sm:rounded-[2.5rem] overflow-hidden animate-in zoom-in duration-200 ${theme.card}`}>
        
        {/* Topic Banner Header */}
        <div className={`p-6 sm:p-8 text-center transition-colors ${selectedTopic.color || 'bg-indigo-600 text-white'}`}>
          <span className="text-5xl sm:text-6xl mb-3 sm:mb-4 block drop-shadow-sm">{selectedTopic.icon}</span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">{selectedTopic.name}</h3>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {noData ? (
            <div className="text-center py-2">
              <AlertCircle className="w-12 h-12 sm:w-14 sm:h-14 mx-auto text-rose-500 mb-3 sm:mb-4 animate-bounce" />
              <p className={`text-base sm:text-lg font-bold ${theme.noDataText}`}>প্রশ্ন পাওয়া যায়নি!</p>
              <button 
                onClick={onClose} 
                className={`w-full mt-5 sm:mt-6 py-3.5 rounded-2xl font-bold transition-all active:scale-95 ${theme.noDataButton}`}
              >
                অন্য বিষয় দেখুন
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {!selectedTopic.isSpecial && (
                <div>
                  <p className={`text-xs sm:text-sm font-bold mb-3 text-center tracking-wide ${theme.labelColor}`}>
                    প্রশ্নের সংখ্যা নির্বাচন করুন:
                  </p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[20, 50, 100].map(num => (
                      <button 
                        key={num} 
                        onClick={() => setQuestionCount(num)}
                        aria-pressed={questionCount === num}
                        className={`min-h-[46px] py-2.5 rounded-2xl border-2 text-sm sm:text-base transition-all active:scale-95 ${
                          questionCount === num ? theme.countBtnActive : theme.countBtnInactive
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button 
                disabled={loading} 
                onClick={onStart} 
                className={`w-full min-h-[52px] py-4 rounded-2xl font-black text-base sm:text-lg tracking-wide transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed ${theme.startButton}`}
              >
                {loading ? "লোড হচ্ছে..." : "🚀 পরীক্ষা শুরু করুন"}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default StartTestModal;