import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

import QuestionCard from '../bcs/components/QuestionCard';
import QuestionModal from '../../components/QuestionModal';
import ExamYearFilter from './ExamYearFilter';
import TopicSelectionMenu from './PrevExamQList';


const PrevExamQuestion = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();

    // --- Local States ---
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeQuestionForModal, setActiveQuestionForModal] = useState(null);
    const [showHint, setShowHint] = useState({});

    // --- Navigation Helper ---
    const handleNavigation = (newType, newId) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/question-list/${newType}/${newId}`);
    };

    // --- Utility Functions ---
    const toBanglaNumber = (n) => {
        const numbers = { 0: '০', 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯' };
        return n?.toString().split('').map(x => numbers[x] || x).join('') || '০';
    };

    const toggleHint = (qId) => {
        setShowHint(prev => ({ ...prev, [qId]: !prev[qId] }));
    };

    // --- Data Fetching Logic ---
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/mcq');
                const list = response.data;

                if (id && type) {
                    const selectedSet = list.find(item => item._id === id);
                    if (selectedSet) {
                        setDataSource(selectedSet[type] || []);
                    }
                } else {
                    const allQuestions = list.flatMap(item => item.BCS || []);
                    setDataSource(allQuestions);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, type]);

    // --- Filter Logic ---
    const filteredQuestions = useMemo(() => {
        return dataSource?.filter(q => {
            const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 q.topic.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || q.topic === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [dataSource, searchTerm, selectedCategory]);

    return (
        <div className='max-w-7xl mx-auto px-4 py-6 bg-gray-50 min-h-screen'>
            
            <main className='w-full space-y-8'>
                {/* 1. Header & Quick Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-2xl font-black text-gray-800">
                            {id ? "প্রশ্নপত্র রিভিউ" : "সকল প্রশ্ন ব্যাংক"}
                        </h1>
                        <p className="text-gray-500 text-sm font-medium">আপনার কাঙ্ক্ষিত সাল ও বিষয় অনুযায়ী প্রস্তুতি নিন</p>
                    </div>
                    
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="প্রশ্ন খুঁজুন..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-80 pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        />
                        <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
                    </div>
                </div>

                {/* 2. Exam Selection Filter */}
                <ExamYearFilter 
                    onSelectExam={(selectedType, selectedId) => handleNavigation(selectedType, selectedId)} 
                    currentId={id}
                />

                {loading ? (
                    <div className="flex justify-center items-center py-32">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <>
                        {/* 3. Topic Dashboard */}
                        <TopicSelectionMenu
                            dataSource={dataSource} 
                            toBanglaNumber={toBanglaNumber}
                            toggleHint={toggleHint}
                            showHint={showHint}
                            setSearchTerm={setSearchTerm}
                            setSelectedCategory={setSelectedCategory}
                            setActiveTopic={setActiveQuestionForModal} 
                        />

                        {/* 4. Question List Header */}
                        <div className="flex items-center justify-between px-2 pt-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-bold text-gray-800">প্রশ্নপত্র</h2>
                                {selectedCategory !== "All" && (
                                    <button 
                                        onClick={() => setSelectedCategory("All")}
                                        className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold hover:bg-red-200 transition-all"
                                    >
                                        ফিল্টার মুছুন ✕
                                    </button>
                                )}
                            </div>
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full shadow-sm">
                                {toBanglaNumber(filteredQuestions.length)} টি প্রশ্ন
                            </span>
                        </div>

                        {/* 5. Main Question List */}
                        <div className='grid grid-cols-1 gap-6'>
                            {filteredQuestions.length > 0 ? (
                                filteredQuestions.map((q, i) => (
                                    <QuestionCard 
                                        key={q._id || i} 
                                        question={q} 
                                        index={i} 
                                        toBanglaNumber={toBanglaNumber}
                                        toggleHint={toggleHint}
                                        showHint={showHint}
                                        setActiveTopic={setActiveQuestionForModal}
                                        setSearchTerm={setSearchTerm}
                                        setSelectedCategory={setSelectedCategory}
                                    />
                                ))
                            ) : (
                                <div className="p-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
                                    <p className="text-gray-400 italic">আপনার খোঁজা অনুযায়ী কোন তথ্য পাওয়া যায়নি।</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </main>

            {/* Global Modal */}
            <QuestionModal 
                activeTopic={activeQuestionForModal} 
                setActiveTopic={setActiveQuestionForModal} 
                toBanglaNumber={toBanglaNumber} 
            />
        </div>
    );
};


export default PrevExamQuestion;