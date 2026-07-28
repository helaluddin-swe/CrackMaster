import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import axios from "axios";
import QuestionModal from "../../components/QuestionModal";
import { useTheme } from "../../context/ThemeContext";

const ExamQCard = () => {
    // 1. Context and State
    const { toBanglaNumber, setSearchTerm, setSelectedCategory, setActiveTopic, activeTopic, backendUrl } = useAppContext();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [showHint, setShowHint] = useState({}); // Stores visibility per question ID
    const { darkMode } = useTheme();

    // Helper for Bengali option labels
    const optionLetters = ["ক", "খ", "গ", "ঘ"];

    // 2. Data Fetching
    useEffect(() => {
        axios.get(`${backendUrl}/mcq`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setError("Failed to load questions.");
            });
    }, [backendUrl]);

    // 3. Toggle Hint Handler
    const toggleHint = (id) => {
        setShowHint(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // 4. Loading & Error States
    if (error) return <div className={`p-10 text-center ${darkMode ? 'text-rose-400' : 'text-red-500'}`}>{error}</div>;
    if (data.length === 0) return <div className={`p-10 text-center ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>No questions found...</div>;

    // 5. Render List of Cards
    return (
        <div className="space-y-6 p-4 w-full max-w-7xl mx-auto">
            {data.map((question, index) => {
                // Use a unique key (mongoDB _id or index)
                const qKey = question._id || index;

                return (
                    <div 
                        key={qKey} 
                        className={`p-5 sm:p-6 rounded-3xl shadow-sm border transition-all duration-300 ${
                            darkMode 
                                ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10' 
                                : 'bg-white border-gray-100 hover:shadow-xl hover:shadow-blue-500/5'
                        }`}
                    >
                        {/* Question Header */}
                        <div className='flex flex-col sm:flex-row justify-between items-start gap-3 mb-5'>
                            <h3 className={`text-base sm:text-lg font-bold leading-relaxed sm:w-3/4 ${darkMode ? 'text-slate-100' : 'text-gray-800'}`}>
                                <span className={`mr-1 ${darkMode ? 'text-indigo-400' : 'text-blue-600'}`}>{toBanglaNumber(index + 1)}.</span> {question.question}
                            </h3>
                            <div className='flex flex-wrap gap-2 sm:justify-end w-full sm:w-auto'>
                                {question.prevExams?.map((ex, i) => (
                                    <span
                                        key={i}
                                        onClick={() => {
                                            setSearchTerm(ex);
                                            setSelectedCategory("All");
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`text-[10px] px-2.5 py-1 rounded-lg font-bold border transition-colors cursor-pointer ${
                                            darkMode 
                                                ? 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-600 hover:text-white' 
                                                : 'bg-red-50 text-red-600 border-red-100 hover:bg-red-600 hover:text-white'
                                        }`}
                                    >
                                        {ex}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Options Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-6'>
                            {question.options?.map((option, i) => {
                                const isCorrect = question.answer === option;
                                return (
                                    <div 
                                        key={i} 
                                        className={`flex items-center p-3 border rounded-2xl transition-all ${
                                            isCorrect 
                                                ? darkMode 
                                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                                                    : 'bg-green-50 border-green-200 text-green-900'
                                                : darkMode 
                                                    ? 'bg-slate-800/40 border-slate-800 text-slate-300' 
                                                    : 'bg-gray-50 border-gray-100 text-gray-700'
                                        }`}
                                    >
                                        <span className={`font-bold mr-3 ${
                                            isCorrect 
                                                ? darkMode ? 'text-emerald-400' : 'text-green-600'
                                                : darkMode ? 'text-indigo-400' : 'text-blue-500'
                                        }`}>
                                            {optionLetters[i]})
                                        </span>
                                        <span className={`font-medium ${
                                            isCorrect 
                                                ? darkMode ? 'text-emerald-200' : 'text-green-900'
                                                : darkMode ? 'text-slate-200' : 'text-gray-700'
                                        }`}>
                                            {option}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Hint & Topic Row */}
                        <div className='flex flex-wrap items-center justify-between gap-4 mb-4'>
                            {/* Left Side: Hint Button */}
                            {question.hints ? (
                                <button
                                    onClick={() => toggleHint(qKey)}
                                    className={`text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                                        darkMode 
                                            ? 'text-amber-400 hover:bg-amber-500/10' 
                                            : 'text-orange-600 hover:bg-orange-50'
                                    }`}
                                >
                                    💡 {showHint[qKey] ? "হিন্ট লুকান" : "হিন্ট দেখুন"}
                                </button>
                            ) : (
                                <div />
                            )}

                            {/* Right Side: Hashtag Topic */}
                            <div className='flex flex-wrap items-center'>
                                <span
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory(question.topic);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`px-3 py-1 text-[10px] font-black rounded-full border cursor-pointer uppercase transition-all shadow-sm ${
                                        darkMode 
                                            ? 'bg-slate-800/60 text-indigo-400 border-indigo-500/20 hover:bg-indigo-600 hover:text-white' 
                                            : 'bg-white text-blue-500 border-blue-100 hover:bg-blue-600 hover:text-white'
                                    }`}
                                >
                                    #{question.topic}
                                </span>
                            </div>
                        </div>

                        {/* Hint Content (Appears below the row if toggled) */}
                        {showHint[qKey] && question.hints && (
                            <div className={`mb-4 p-4 border rounded-2xl text-sm italic animate-in fade-in zoom-in duration-200 ${
                                darkMode 
                                    ? 'bg-amber-500/10 border-amber-500/20 text-amber-200' 
                                    : 'bg-orange-50/50 border-orange-100 text-orange-900'
                            }`}>
                                {question.hints}
                            </div>
                        )}

                        {/* Solution & Explanation */}
                        <div className={`rounded-2xl border overflow-hidden ${
                            darkMode ? 'bg-slate-800/30 border-slate-800' : 'bg-blue-50/50 border-blue-100'
                        }`}>
                            <div className={`p-4 flex flex-col sm:flex-row gap-4 justify-between items-center border-b ${
                                darkMode ? 'bg-slate-800/60 border-slate-800 text-slate-200' : 'bg-white/50 border-blue-50 text-blue-900'
                            }`}>
                                <div className='flex items-center font-bold'>
                                    <span className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 text-[10px] shadow-sm text-white ${
                                        darkMode ? 'bg-indigo-600' : 'bg-blue-600'
                                    }`}>✓</span>
                                    সঠিক উত্তর: <span className={`ml-2 font-semibold ${darkMode ? 'text-indigo-400' : 'text-blue-700'}`}>{question.answer}</span>
                                </div>

                                <button
                                    onClick={() => setActiveTopic?.(question)}
                                    className={`w-full sm:w-auto text-xs font-bold px-4 py-2.5 rounded-xl transition-all border shadow-sm active:scale-95 ${
                                        darkMode 
                                            ? 'text-indigo-400 bg-slate-900 border-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600' 
                                            : 'text-blue-600 bg-white border-blue-200 hover:bg-blue-600 hover:text-white'
                                    }`}
                                >
                                    📖 বিস্তারিত ব্যাখ্যা
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <QuestionModal
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
                toBanglaNumber={toBanglaNumber}
            />
        </div>
    );
}

export default ExamQCard;