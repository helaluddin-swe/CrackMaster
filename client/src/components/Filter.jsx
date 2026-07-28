import React from 'react';
import { useAppContext } from '../context/AppContext';
import { BCS_Question_List } from '../assets/assest';
import { useParams } from 'react-router-dom';
import QuestionFilter from './QuestionFilter';
import { useTheme } from '../context/ThemeContext';

const Filter = () => {
    const { setSearchTerm, setSelectedCategory, selectedCategory, searchTerm } = useAppContext();
    const { darkMode } = useTheme();

    // Defined the categories to keep the JSX clean
    const categories = [
        { id: 'Recent Affairs', name: 'Recent Affairs' },
        { id: 'International Affairs', name: 'আন্তর্জাতিক বিষয়াবলি' },
        { id: 'Bangladesh Affairs', name: 'বাংলাদেশ বিষয়াবলি' },
        { id: 'Bangla', name: 'বাংলা ভাষা ও সাহিত্য' },
        { id: 'English', name: 'ইংরেজি ভাষা ও সাহিত্য' },
        { id: 'General Science', name: 'সাধারণ বিজ্ঞান' },
        { id: 'Geography', name: 'ভূগোল, পরিবেশ ও দুর্যোগ ব্যবস্থাপনা' },
        { id: 'Math', name: 'গাণিতিক যুক্তি' },
        { id: 'ICT', name: 'কম্পিউটার ও তথ্যপ্রযুক্তি' },
        { id: 'Mental Ability', name: 'মানসিক দক্ষতা' },
        { id: 'Ethics', name: 'নৈতিকতা, মূল্যবোধ ও সুশাসন' },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSearchTerm(""); // Reset search when switching categories
    };

    const { id } = useParams();
    const selectedYearData = BCS_Question_List.find((item) => item._id === id);
    const totalQCount = selectedYearData ? selectedYearData.BCS.length : 0;

    return (
        <div className={`w-full p-3 sm:p-4 h-fit rounded-2xl sm:rounded-3xl border shadow-sm transition-colors duration-300 md:sticky top-4 ${
            darkMode 
                ? 'bg-slate-900 border-slate-800 text-slate-200' 
                : 'bg-white border-gray-100 text-gray-700'
        }`}>
            {/* Search Box Wrapper */}
            <div className="mb-4">
                <QuestionFilter />
            </div>

            <div className='space-y-1.5 text-sm'>
                {/* All Questions Button */}
                <div
                    onClick={() => handleCategoryClick("All")}
                    className={`cursor-pointer px-3.5 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === "All" && searchTerm === "" 
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                            : darkMode 
                                ? 'hover:bg-slate-800/80 text-slate-300' 
                                : 'hover:bg-indigo-50/60 text-gray-600'
                    }`}
                >
                    <span>সব প্রশ্ন</span> 
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                        selectedCategory === "All" && searchTerm === ""
                            ? 'bg-white/20 text-white'
                            : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'
                    }`}>
                        {totalQCount}
                    </span>
                </div>

                {/* Dynamic Category List */}
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                        <div
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className={`cursor-pointer px-3.5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                                isSelected 
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                                    : darkMode 
                                        ? 'hover:bg-slate-800/80 text-slate-300' 
                                        : 'hover:bg-indigo-50/60 text-gray-600'
                            }`}
                        >
                            {cat.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter;