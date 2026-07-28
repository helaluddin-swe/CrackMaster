import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, X, ArrowLeft, Eye, BookOpen, Clock, Sparkles, Loader2, Bookmark, Sun, Moon } from 'lucide-react';
import axios from 'axios';
import LoadMore from '../../components/LoadMore';
import { useAppContext } from '../../context/AppContext.jsx';
import { fetchMenuData } from "./data.js";
import Breadcrumbs from '../../components/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';

const WrittenHub = ({ onClose, isBothCadre = false }) => {
  // AppContext থেকে darkMode এবং toggleDarkMode ইমপোর্ট করা হলো
  const { backendUrl } = useAppContext();
  const { darkMode, toggleTheme } = useTheme()
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.back();
  };

  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(6);
  const [showMobileArticles, setShowMobileArticles] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleArticleClick = async (article) => {
    try {
      await axios.patch(`${backendUrl}/api/articles/${article._id}/view`);
      const identifier = article.seo_metadata?.title_tag || article._id;
      navigate(`/written/${identifier}`);
    } catch (error) {
      console.error("View update failed:", error);
      navigate(`/written/${article._id}`);
    }
  };

  const loadInitialData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchMenuData(backendUrl, isBothCadre);
      if (data && data.length > 0) {
        setMenuItems(data);
        setActiveCategory(data[0]);
      }
    } catch (error) {
      console.error("Data loading failed:", error);
    } finally {
      setLoading(false);
    }
  }, [backendUrl, isBothCadre]);

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
      <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-9999 flex items-center justify-center">
        <div className="text-center text-white">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-indigo-500" />
          <p className="text-lg font-medium animate-pulse font-sans">প্রস্তুতি চলছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-9999 flex items-center justify-center p-0 md:p-8">
      {/* Main Container - Conditional Dark Mode */}
      <div className={`flex flex-col md:flex-row w-full h-full max-w-7xl md:h-[90vh] md:rounded-[2.5rem] shadow-2xl overflow-hidden border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
        }`}>

        {/* --- Sidebar --- */}
        <aside className={`${showMobileArticles ? 'hidden' : 'flex'} md:flex w-full md:w-80 border-r flex-col h-full ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50/50 border-gray-100'
          }`}>
          <div className="p-8 flex justify-between items-center">
            <div>
              <h1 className={`text-2xl font-black tracking-tight italic ${darkMode ? 'text-white' : 'text-gray-900'}`}>Academy</h1>
              <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest mt-1 font-sans">WrittenMaster</p>
            </div>

            {/* Mobile Header Actions (Sidebar) */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-600'
                }`}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={onClose} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-400 hover:bg-gray-200'
                }`}>
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1.5 custom-scrollbar">
            {menuItems.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group ${activeCategory?.id === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-indigo-400'
                      : 'text-gray-500 hover:bg-white hover:text-indigo-600'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">{cat.icon}</span>
                  <div className="text-left">
                    <p className="text-sm font-bold leading-tight">{cat.label}</p>
                    {cat.mark !== "N/A" && (
                      <p className={`text-[9px] mt-0.5 ${activeCategory?.id === cat.id
                          ? 'text-indigo-100'
                          : darkMode ? 'text-gray-400' : 'text-gray-400'
                        }`}>
                        {cat.mark} নম্বর
                      </p>
                    )}
                  </div>
                </div>
                <ChevronRight size={16} className={activeCategory?.id === cat.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
              </button>
            ))}
          </nav>
        </aside>

        {/* --- Content Area --- */}
        <main className={`${!showMobileArticles ? 'hidden' : 'flex'} md:flex flex-1 flex-col h-full relative ${darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
          <header className={`flex items-center justify-between p-5 md:p-6 md:px-10 border-b sticky top-0 backdrop-blur-sm z-20 ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-50'
            }`}>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowMobileArticles(false)} className={`md:hidden p-2 rounded-xl transition-colors ${darkMode ? 'bg-gray-800 text-indigo-400 hover:bg-gray-700' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                }`}>
                <ArrowLeft size={20} />
              </button>
              <h2 className={`text-xl md:text-2xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {activeCategory?.label} <span className="text-indigo-500 text-sm font-normal">Section</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:block"><Breadcrumbs category="written-hub" /></div>

              {/* Theme Toggle Button (Desktop & Mobile Content View) */}
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400 hover:bg-gray-800 bg-gray-800 md:bg-transparent' : 'text-gray-500 hover:bg-gray-100 bg-gray-100 md:bg-transparent'
                }`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={onClose || handleGoBack}
                title="Close"
                aria-label="Close"
                className={`hidden md:block transition-colors text-gray-400 ${darkMode ? 'hover:text-rose-400' : 'hover:text-rose-500'
                  }`}
              >
                <X size={24} />
              </button>
            </div>
          </header>

          <div className={`flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar ${darkMode ? 'bg-gray-900' : 'bg-slate-50/20'
            }`}>
            {activeCategory?.articles?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {activeCategory.articles.slice(0, displayLimit).map((article) => {
                    const displayTitle = article.seo_metadata?.title_tag?.split('|')[0] || article.title || "শিরোনামহীন আর্টিকেল";

                    return (
                      <div
                        key={article._id}
                        onClick={() => handleArticleClick(article)}
                        className={`cursor-pointer group p-6 rounded-[2.2rem] border shadow-sm hover:-translate-y-1.5 transition-all duration-300 flex flex-col min-h-[260px] ${darkMode
                            ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-gray-950'
                            : 'bg-white border-gray-100 hover:shadow-xl'
                          }`}
                      >
                        <div className="flex justify-between items-start mb-5">
                          <div className={`p-3 rounded-2xl transition-colors ${darkMode
                              ? 'bg-gray-700 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white'
                              : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                            }`}>
                            <Bookmark size={20} />
                          </div>

                          {(article.views || 0) > 500 && (
                            <span className={`flex items-center gap-1 text-[9px] font-black px-2.5 py-1 rounded-full ${darkMode ? 'bg-amber-900/40 text-amber-400' : 'bg-amber-100 text-amber-700'
                              }`}>
                              <Sparkles size={10} /> TRENDING
                            </span>
                          )}
                        </div>

                        <h3 className={`font-bold text-lg leading-snug mb-4 line-clamp-3 transition-colors ${darkMode ? 'text-gray-100 group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'
                          }`}>
                          {displayTitle}
                        </h3>

                        <div className={`mt-auto pt-5 border-t flex items-center justify-between text-[10px] font-sans font-bold ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-50 text-gray-400'
                          }`}>
                          <div className="flex items-center gap-3">
                            <span className={`flex items-center gap-1 px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-slate-50'
                              }`}>
                              {article.content_header?.subject?.split('(')[0] || 'বিসিএস'}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> {article.readTime || '৫ মিনিট'}
                            </span>
                            <span className={`flex items-center gap-1 px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-slate-100 text-indigo-600'
                              }`}>
                              <Eye size={12} /> {article.views || 0}
                            </span>
                          </div>
                          <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'
                            }`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 flex justify-center pb-10">
                  <LoadMore
                    totalItems={activeCategory.articles.length}
                    displayLimit={displayLimit}
                    setDisplayLimit={setDisplayLimit}
                  />
                </div>
              </>
            ) : (
              <div className="text-center py-20 text-gray-400 font-sans">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                  <BookOpen size={40} className="opacity-20" />
                </div>
                <p>এই মুহূর্তে কোনো আর্টিকেল পাওয়া যায়নি।</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WrittenHub;