import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

import Filter from '../../components/Filter';
import QuestionCard from '../bcs/components/QuestionCard';
import QuestionModal from '../../components/QuestionModal';
import ExamYearFilter from './ExamYearFilter';
import { useAppContext } from '../../context/AppContext';


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
    const {backendUrl}=useAppContext()
    // --- Navigation Helper ---
    const handleNavigation = (newType, newId) => {
        // Scroll to top on navigation
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
                const response = await axios.get(`${backendUrl}/mcq`);
                const list = response.data;

                if (id && type) {
                    // Specific Route View: Get questions for that specific exam
                    const selectedSet = list.find(item => item._id === id);
                    if (selectedSet) {
                        setDataSource(selectedSet[type] || []);
                    }
                } else {
                    // General Route View: Flatten all questions from all categories (or just BCS)
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
    }, [id, type]); // Triggers whenever the URL parameters change

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
        <div className='flex flex-col md:flex-row gap-3 px-4 py-4 bg-gray-50 min-h-screen'>
            {/* Left Sidebar Filter */}
            <aside className='w-full md:w-1/4'>
                <Filter 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setSelectedCategory={setSelectedCategory} 
                    selectedCategory={selectedCategory}
                    totalQCount={dataSource.length}
                />
            </aside>
            
            <main className='w-full md:w-3/4 space-y-6'>
                {/* 1. Exam Selection Row (Always visible to allow switching years) */}
                <ExamYearFilter 
                    onSelectExam={(selectedType, selectedId) => handleNavigation(selectedType, selectedId)} 
                    currentId={id}
                />

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <>
                       
                       

                        <hr className="border-gray-200 my-8" />

                        {/* 3. Main Question List */}
                        <div className='space-y-6'>
                            <div className="flex justify-between items-center px-2">
                                <h2 className="text-xl font-bold text-gray-800">
                                    {id ? "প্রশ্নপত্র রিভিউ" : "সকল প্রশ্ন"}
                                </h2>
                                <span className="text-sm text-gray-500 font-medium">
                                    মোট: {toBanglaNumber(filteredQuestions.length)} টি
                                </span>
                            </div>

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
                                <div className="p-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100">
                                    <p className="text-gray-400 italic">কোন তথ্য খুঁজে পাওয়া যায়নি।</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </main>

            {/* 4. Global Modal for Detailed Explanation */}
            <QuestionModal 
                activeTopic={activeQuestionForModal} 
                setActiveTopic={setActiveQuestionForModal} 
                toBanglaNumber={toBanglaNumber} 
            />
        </div>
    );
};

export default PrevExamQuestion