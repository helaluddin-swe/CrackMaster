import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, X, ArrowLeft, Eye, BookOpen, Clock, Sparkles, Loader2, Bookmark, Sun, Moon, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';
import Breadcrumbs from '../../components/Breadcrumbs';
import { fetchMenuData } from './data'; 
import PreviousQuestionList from './PreviousQuestionList';

const DashboardPreviousQuestions = ({ onClose }) => {
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    window.history.back();
  };

  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(6);
  const [showMobileArticles, setShowMobileArticles] = useState(false);
  const [loading, setLoading] = useState(true);

  // UPDATED: Navigates using the specific exam name (e.g. /exams/45th%20BCS)
  const handleArticleClick = (article) => {
    // You should define this route in your React Router setup where you will 
    // fetch questions via the API: `/api/questions?specificExam=${article.specificExam}`
    navigate(`/exams/${encodeURIComponent(article.specificExam)}`);
  };

  const loadInitialData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchMenuData();
      if (data && data.length > 0) {
        setMenuItems(data);
        setActiveCategory(data[0]);
      }
    } catch (error) {
      console.error("Data loading failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, [loadInitialData]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setDisplayLimit(6);
    setShowMobileArticles(true);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[9999] flex items-center justify-center">
        <div className="text-center text-white">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-indigo-500" />
          <p className="text-lg font-medium animate-pulse font-sans">প্রস্তুতি চলছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[9999] flex items-center justify-center p-0 md:p-8">
      {/* Main Container */}
      <div className={`flex flex-col md:flex-row w-full h-full max-w-7xl md:h-[90vh] md:rounded-[2.5rem] shadow-2xl overflow-hidden border ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
      }`}>

        {/* --- Sidebar --- */}
        <aside className={`${showMobileArticles ? 'hidden' : 'flex'} md:flex w-full md:w-80 border-r flex-col h-full ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50/50 border-gray-100'
        }`}>
          <div className="p-8 flex justify-between items-center">
            <div>
              <h1 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>Question Bank</h1>
              <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest mt-1 font-sans">Previous Exams</p>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-600'
              }`}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={handleGoBack} className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-400 hover:bg-gray-200'
              }`}>
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-2 custom-scrollbar">
            {menuItems.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group ${
                  activeCategory?.id === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-indigo-400'
                      : 'text-gray-500 hover:bg-white hover:text-indigo-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl drop-shadow-sm">{cat.icon}</span>
                  <div className="text-left">
                    <p className="text-sm font-bold leading-tight">{cat.label}</p>
                    {cat.note && (
                      <p className={`text-[10px] mt-0.5 font-medium ${
                        activeCategory?.id === cat.id ? 'text-indigo-100' : (darkMode ? 'text-gray-400' : 'text-gray-400')
                      }`}>
                        {cat.note}
                      </p>
                    )}
                  </div>
                </div>
                <div className={`text-xs font-bold px-2 py-1 rounded-md ${
                  activeCategory?.id === cat.id 
                    ? 'bg-indigo-500/50 text-white' 
                    : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                }`}>
                  {cat.articles?.length || 0}
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* --- Content Area --- */}
        <main className={`${!showMobileArticles ? 'hidden' : 'flex'} md:flex flex-1 flex-col h-full relative ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <header className={`flex items-center justify-between p-5 md:p-6 md:px-10 border-b sticky top-0 backdrop-blur-md z-20 ${
            darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-50'
          }`}>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowMobileArticles(false)} className={`md:hidden p-2 rounded-xl transition-colors ${
                darkMode ? 'bg-gray-800 text-indigo-400 hover:bg-gray-700' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
              }`}>
                <ArrowLeft size={20} />
              </button>
              <h2 className={`text-xl md:text-2xl font-black flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span>{activeCategory?.icon}</span> {activeCategory?.label} 
                <span className="text-indigo-500 text-sm font-bold bg-indigo-500/10 px-2 py-1 rounded-lg ml-2">Questions</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:block"><Breadcrumbs category="question-bank" /></div>

              {/* Theme Toggle Button */}
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-yellow-400 hover:bg-gray-800 bg-gray-800 md:bg-transparent' : 'text-gray-500 hover:bg-gray-100 bg-gray-100 md:bg-transparent'
              }`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={handleGoBack}
                title="Close"
                className={`hidden md:block transition-colors text-gray-400 ${
                  darkMode ? 'hover:text-rose-400' : 'hover:text-rose-500'
                }`}
              >
                <X size={24} />
              </button>
            </div>
          </header>

          <PreviousQuestionList 
            activeCategory={activeCategory} 
            displayLimit={displayLimit} 
            setDisplayLimit={setDisplayLimit}
            onArticleClick={handleArticleClick}
          />
        </main>
      </div>
    </div>
  );
};

export default DashboardPreviousQuestions;