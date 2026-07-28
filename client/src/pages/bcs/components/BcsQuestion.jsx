import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuestionCard from './QuestionCard'
import Filter from '../../../components/Filter'
import QuestionModal from '../../../components/QuestionModal'

import { useAppContext } from '../../../context/AppContext'
import axios from "axios"
import { useTheme } from '../../../context/ThemeContext'

const BcsQuestion = () => {
    // 1. Get the 'id' and 'title' from the URL (e.g., /question-list/65bc.../BCS-50th)
    const { id, title } = useParams()
    const { darkMode } = useTheme()
    
    const { setDataSource, filteredQuestions, setSelectedCategory, setSearchTerm } = useAppContext()

    useEffect(() => {
        const fetchAndFilterData = async () => {
            try {
                // 1. Await the response from the database
                const response = await axios.get('/api/mcq');
                const list = response.data; // Axios wraps the response in a .data object

                // 2. Find the correct data set based on the ID
                const selectedYear = list.find(item => item._id === id);

                if (selectedYear && selectedYear.BCS) {
                    // 3. Update states
                    setDataSource(selectedYear.BCS);
                    
                    // Reset filters
                    setSelectedCategory("All");
                    setSearchTerm("");
                }
            } catch (error) {
                console.error("Error fetching MCQ data:", error);
            }
        };

        if (id) {
            fetchAndFilterData();
        }
    }, [id, setDataSource, setSelectedCategory, setSearchTerm]);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-950'}`}>
            {/* Optional Banner showing URL title context if needed */}
            {title && (
                <div className={`max-w-7xl mx-auto px-4 pt-6`}>
                    <div className={`p-4 rounded-2xl border shadow-sm flex items-center justify-between ${
                        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'
                    }`}>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">BCS Question Set</span>
                            <h1 className="text-xl font-black capitalize tracking-tight mt-0.5">
                                {title.replace(/-/g, ' ')}
                            </h1>
                        </div>
                    </div>
                </div>
            )}

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 py-6'>
                {/* Sidebar Filter */}
                <aside className='w-full md:w-1/4 shrink-0'>
                    <div className="sticky top-6">
                        <Filter />
                    </div>
                </aside>
                
                {/* Main Content Area */}
                <main className='w-full md:w-3/4 space-y-4'>
                    {filteredQuestions && filteredQuestions.length > 0 ? (
                        filteredQuestions.map((question, index) => (
                            <QuestionCard 
                                question={question} 
                                key={question._id || index} 
                                index={index} 
                            />
                        ))
                    ) : (
                        <div className={`p-12 text-center rounded-3xl border border-dashed transition-colors duration-300 ${
                            darkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-white border-gray-200 text-gray-500'
                        }`}>
                            <p className='font-medium font-serif'>কোন প্রশ্ন পাওয়া যায়নি।</p>
                        </div>
                    )}
                </main>

                {/* Modal for detail view */}
                <QuestionModal />
            </div>
        </div>
    )
}

export default BcsQuestion