import React from 'react'
import { useTheme } from '../context/ThemeContext';

function QuestionModal({ activeTopic, setActiveTopic, toBanglaNumber }) {
    // If activeTopic is null, don't render anything
    if (!activeTopic) return null;
    const { darkMode } = useTheme();

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all">
            <div className={`w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 transition-colors duration-300 ${
                darkMode ? 'bg-slate-900 border border-slate-800 text-slate-100' : 'bg-white text-gray-900'
            }`}>
                
                {/* Modal Header */}
                <div className="bg-indigo-600 p-5 sm:p-6 text-white flex justify-between items-center">
                    <div>
                        <p className="text-indigo-100 text-xs uppercase tracking-wider font-bold mb-1">বিষয়: {activeTopic.topic}</p>
                        <h2 className="text-lg sm:text-xl font-bold leading-tight">বিস্তারিত ব্যাখ্যা</h2>
                    </div>
                    <button 
                        onClick={() => setActiveTopic(null)} 
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors shrink-0"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-5 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                    {/* Question Context */}
                    <div className={`p-4 rounded-2xl border transition-colors duration-300 ${
                        darkMode ? 'bg-indigo-950/40 border-indigo-900/50 text-indigo-200' : 'bg-blue-50 border-blue-100 text-blue-950'
                    }`}>
                        <h3 className={`font-bold mb-2 ${darkMode ? 'text-indigo-300' : 'text-blue-900'}`}>প্রশ্ন:</h3>
                        <p className={`italic ${darkMode ? 'text-slate-300' : 'text-gray-800'}`}>{activeTopic.question}</p>
                    </div>

                    {/* Explanation 1 */}
                    <div>
                        <h4 className={`font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>
                            <span className="w-2 h-6 bg-green-500 rounded-full shrink-0"></span>
                            ব্যাখ্যা ১
                        </h4>
                        <p className={`leading-relaxed p-4 rounded-2xl border transition-colors duration-300 ${
                            darkMode ? 'bg-slate-800/60 border-slate-800 text-slate-300' : 'bg-gray-50 border-gray-100 text-gray-700'
                        }`}>
                            {activeTopic.explanation1}
                        </p>
                    </div>

                    {/* Explanation 2 */}
                    {activeTopic.explanation2 && (
                        <div>
                            <h4 className={`font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>
                                <span className="w-2 h-6 bg-orange-500 rounded-full shrink-0"></span>
                                ব্যাখ্যা ২
                            </h4>
                            <p className={`leading-relaxed p-4 rounded-2xl border transition-colors duration-300 ${
                                darkMode ? 'bg-slate-800/60 border-slate-800 text-slate-300' : 'bg-gray-50 border-gray-100 text-gray-700'
                            }`}>
                                {activeTopic.explanation2}
                            </p>
                        </div>
                    )}

                    {/* Hints (Optional in Modal) */}
                    {activeTopic.hints && (
                        <div className={`p-4 rounded-2xl border transition-colors duration-300 ${
                            darkMode ? 'bg-amber-950/40 border-amber-900/50 text-amber-200' : 'bg-yellow-50 border-yellow-100 text-yellow-800'
                        }`}>
                            <p className="text-sm">
                                <strong>💡 হিন্ট:</strong> {activeTopic.hints}
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className={`p-4 border-t flex justify-end transition-colors duration-300 ${
                    darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-gray-50 border-gray-100'
                }`}>
                    <button
                        onClick={() => setActiveTopic(null)}
                        className={`px-6 sm:px-8 py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
                            darkMode 
                                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' 
                                : 'bg-gray-800 text-white hover:bg-black'
                        }`}
                    >
                        বন্ধ করুন
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuestionModal