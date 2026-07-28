import React, { useState, useMemo } from 'react';
import QuestionCard from '../bcs/components/QuestionCard';

const TopicSelectionMenu = ({ 
    dataSource, 
    toBanglaNumber, 
    toggleHint, 
    showHint, 
    setSearchTerm, 
    setSelectedCategory, 
    setActiveTopic: setGlobalActiveQuestion 
}) => {
    const [localActiveTopic, setLocalActiveTopic] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 1. Extract unique topics and their counts efficiently
    const topicData = useMemo(() => {
        if (!dataSource || dataSource.length === 0) return [];
        
        const counts = dataSource.reduce((acc, q) => {
            acc[q.topic] = (acc[q.topic] || 0) + 1;
            return acc;
        }, {});

        return Object.keys(counts).map(topic => ({
            name: topic,
            count: counts[topic]
        }));
    }, [dataSource]);

    // 2. Filter questions for the selected topic
    const topicQuestions = useMemo(() => {
        return dataSource?.filter(q => q.topic === localActiveTopic);
    }, [localActiveTopic, dataSource]);

    const handleTopicClick = (topicName) => {
        setLocalActiveTopic(topicName);
        setIsMenuOpen(true);
    };

    return (
        <div className="p-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                বিষয় ভিত্তিক প্রস্তুতি
            </h2>
            
            {/* 3. Grid of Topic Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {topicData.map((topic, index) => (
                    <button
                        key={index}
                        onClick={() => handleTopicClick(topic.name)}
                        className="flex items-center justify-between p-4 bg-gray-50 border border-transparent rounded-2xl hover:bg-white hover:border-blue-500 hover:shadow-md transition-all group text-left"
                    >
                        <span className="font-semibold text-gray-700 group-hover:text-blue-600">{topic.name}</span>
                        <span className="text-xs font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                            {toBanglaNumber(topic.count)} টি
                        </span>
                    </button>
                ))}
            </div>

            {/* 4. Slide-over "Article Menu" Panel */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Content Panel */}
                    <div className="relative w-full max-w-2xl bg-gray-100 h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
                        {/* Header */}
                        <div className="p-6 bg-white border-b flex justify-between items-center sticky top-0 z-10">
                            <div>
                                <h3 className="text-xl font-black text-gray-800">{localActiveTopic}</h3>
                                <p className="text-sm text-blue-600 font-bold">
                                    {toBanglaNumber(topicQuestions.length)} টি প্রশ্ন পাওয়া গেছে
                                </p>
                            </div>
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="p-3 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full text-gray-500 transition-colors"
                            >
                                <span className="text-lg">✕</span>
                            </button>
                        </div>

                        {/* Scrollable Questions List */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                            {topicQuestions.map((question, idx) => (
                                <QuestionCard 
                                    key={question._id || idx}
                                    question={question}
                                    index={idx}
                                    toBanglaNumber={toBanglaNumber}
                                    toggleHint={toggleHint}
                                    showHint={showHint}
                                    setSearchTerm={setSearchTerm}
                                    setSelectedCategory={setSelectedCategory}
                                    setActiveTopic={setGlobalActiveQuestion}
                                />
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white border-t">
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all active:scale-95"
                            >
                                ফিরে যান
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopicSelectionMenu;