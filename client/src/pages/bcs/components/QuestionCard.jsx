import React from 'react';

const QuestionCard = ({ 
    question, 
    index, 
    toBanglaNumber, 
    setSearchTerm, 
    setSelectedCategory, 
    toggleHint, 
    showHint, 
    setActiveTopic 
}) => {
    
    const optionLetters = ["ক", "খ", "গ", "ঘ"];
    
    // Fallback for unique ID to track hint state
    const questionKey = question._id || `q-${index}`;

    if (!question) return null;

    return (
        <div className='bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300'>
            
            {/* Question Header */}
            <div className='flex flex-col sm:flex-row justify-between items-start gap-3 mb-5'>
                <h3 className='text-lg font-bold text-gray-800 leading-relaxed sm:w-3/4'>
                    <span className='text-blue-600 mr-1'>{toBanglaNumber(index + 1)}.</span> {question.question}
                </h3>
                <div className='flex flex-wrap gap-2 sm:justify-end'>
                    {question.prevExams?.map((ex, i) => (
                        <span 
                            key={i} 
                            onClick={() => {
                                setSearchTerm(ex);
                                setSelectedCategory("All");
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }} 
                            className='text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded-lg font-bold border border-red-100 hover:bg-red-600 hover:text-white transition-colors cursor-pointer'
                        >
                            {ex}
                        </span>
                    ))}
                </div>
            </div>

            {/* Options Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-6'>
                {question.options.map((option, i) => {
                    // Check if this specific option is the correct answer string
                    const isCorrect = question.answer === option;
                    return (
                        <div key={i} className={`flex items-center p-3 border rounded-2xl transition-all ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100'}`}>
                            <span className={`font-bold mr-3 ${isCorrect ? 'text-green-600' : 'text-blue-500'}`}>
                                {optionLetters[i]})
                            </span>
                            <span className={isCorrect ? 'text-green-900 font-medium' : 'text-gray-700'}>
                                {option}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Hint Section */}
            {question.hints && (
                <div className="mb-4">
                    <button
                        onClick={() => toggleHint(questionKey)}
                        className='text-xs text-orange-600 font-bold mb-2 flex items-center gap-1 hover:bg-orange-50 px-2 py-1 rounded-lg transition-colors'
                    >
                        💡 {showHint[questionKey] ? "হিন্ট লুকান" : "হিন্ট দেখুন"}
                    </button>
                    {showHint[questionKey] && (
                        <div className='p-4 bg-orange-50/50 border border-orange-100 rounded-2xl text-sm text-orange-900 italic animate-in fade-in zoom-in duration-200'>
                            {question.hints}
                        </div>
                    )}
                </div>
            )}

            {/* Solution & Detailed Explanation Section */}
            <div className='bg-blue-50/50 rounded-2xl border border-blue-100 overflow-hidden'>
                <div className='p-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/50 border-b border-blue-50'>
                    <div className='flex items-center text-blue-900 font-bold'>
                        <span className='bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-[10px] shadow-sm'>✓</span>
                        সঠিক উত্তর: <span className="ml-2 text-blue-700">{question.answer}</span>
                    </div>
                    
                    <button
                        onClick={() => setActiveTopic?.(question)}
                        className='w-full sm:w-auto text-blue-600 text-xs font-bold hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl transition-all border border-blue-200 bg-white shadow-sm active:scale-95'
                    >
                        📖 বিস্তারিত ব্যাখ্যা
                    </button>
                </div>

                {/* Quick Explanations */}
                <div className='p-5 text-gray-700 text-sm leading-relaxed'>
                    <div className='space-y-3'>
                        <p><span className="font-bold text-gray-400 mr-2">ব্যাখ্যা ১:</span> {question.explanation1}</p>
                        {question.explanation2 && (
                            <p><span className="font-bold text-gray-400 mr-2">ব্যাখ্যা ২:</span> {question.explanation2}</p>
                        )}
                    </div>
                    
                    {/* Hashtag Topic */}
                    <div className='mt-4 pt-4 border-t border-blue-50'>
                        <span 
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory(question.topic);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className='px-3 py-1 bg-white text-blue-500 text-[10px] font-black rounded-full border border-blue-100 cursor-pointer uppercase hover:bg-blue-600 hover:text-white transition-all shadow-sm'
                        >
                            #{question.topic}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;