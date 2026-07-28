import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BookOpen, HelpCircle, FileText, CheckCircle2,
  Calendar, Tag, Loader2, AlertCircle, Eye, Info
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';
import axios from 'axios';

import ArticleHeader from './ArticleHeader';
import Breadcrumbs from '../../components/Breadcrumbs';
import MetaSeo from '../../components/MetaSeo';

const DetailsArticle = () => {
  const { backendUrl } = useAppContext();
  const { darkMode } = useTheme();
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const { id } = useParams();

  // 1. Time Tracking Logic
  useEffect(() => {
    if (!id) return;
    const startTime = Date.now();

    // Cleanup function: runs when the user leaves the page
    return () => {
      const endTime = Date.now();
      const secondsSpent = Math.floor((endTime - startTime) / 1000);

      // Only track if the user spent more than 5 seconds to avoid "noise"
      if (secondsSpent > 5) {
        const trackingUrl = `${backendUrl}/api/articles/${id}/track-time`;
        const payload = JSON.stringify({ secondsSpent });

        // sendBeacon is preferred for unmount tracking as it's non-blocking
        if (navigator.sendBeacon) {
          const blob = new Blob([payload], { type: 'application/json' });
          navigator.sendBeacon(trackingUrl, blob);
        } else {
          // Fallback for older browsers
          axios.post(trackingUrl, { secondsSpent }).catch(() => {});
        }
      }
    };
  }, [id, backendUrl]);

  // 2. Fetch Article Data & View Count Logic
  useEffect(() => {
    const fetchArticleData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await axios.get(`${backendUrl}/api/articles/${id}`);

        if (response.data) {
          const articleData = response.data;
          setArticle(articleData);

          // Update View Count (once per session)
          const sessionKey = `viewed_${id}`;
          if (!sessionStorage.getItem(sessionKey)) {
            try {
              await axios.patch(`${backendUrl}/api/articles/${id}/view`);
              sessionStorage.setItem(sessionKey, "true");
              // Update local state for immediate feedback
              setArticle(prev => ({ ...prev, views: (prev.views || 0) + 1 }));
            } catch (vErr) {
              console.error("View count update failed:", vErr);
            }
          }
        }
      } catch (err) {
        console.error("MongoDB Fetch Error:", err);
        setError("আর্টিকেলটি খুঁজে পাওয়া যায়নি।");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
    window.scrollTo(0, 0);
  }, [id, backendUrl]);

  if (loading) return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <Loader2 className="animate-spin text-indigo-600 mb-2" size={48} />
      <p className={`font-sans italic animate-pulse ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>প্রস্তুতি চলছে...</p>
    </div>
  );

  if (error || !article) return (
    <div className={`flex flex-col items-center justify-center min-h-screen text-rose-500 ${darkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <AlertCircle size={48} />
      <p className="mt-4 font-bold text-lg text-center px-4">{error || "কিছু ভুল হয়েছে!"}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold shadow-lg hover:bg-indigo-700 transition-colors"
      >
        আবার চেষ্টা করুন
      </button>
    </div>
  );

  const { content_header, article_body, interactive_elements, seo_metadata } = article;

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-slate-50 text-gray-900'}`}>
      <MetaSeo 
        seoData={seo_metadata} 
        articleBody={article} 
        contentHeader={content_header} 
      />

      <ArticleHeader article={article} />

      <main className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Article Sections */}
        {article_body?.sections?.map((section) => (
          <section 
            key={section.id} 
            className={`mb-6 p-6 md:p-10 rounded-[2.5rem] border shadow-sm hover:shadow-md transition-all ${
              darkMode ? 'bg-gray-800 border-gray-700 shadow-gray-900/50' : 'bg-white border-gray-50'
            }`}
          >
            <h2 className={`text-xl md:text-2xl font-black mb-6 md:mb-8 flex items-center gap-4 ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}>
              <span className="w-3 h-10 bg-indigo-600 rounded-full shadow-sm shrink-0"></span>
              {section.h2}
            </h2>

            <p className={`text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium opacity-90 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
              {section.content}
            </p>

            {/* Bullet Points */}
            {section.bullet_points && (
              <div className="space-y-3 md:space-y-4 mb-5">
                {section.bullet_points.map((point, i) => (
                  <div 
                    key={i} 
                    className={`flex gap-4 p-4 md:p-5 rounded-2xl border transition-all group ${
                      darkMode 
                        ? 'bg-gray-700/50 border-gray-600/50 hover:bg-gray-700 hover:border-indigo-500' 
                        : 'bg-slate-50/50 border-slate-100/50 hover:bg-white hover:border-indigo-200'
                    }`}
                  >
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5 md:mt-1 group-hover:scale-110 transition-transform" size={20} />
                    <span className={`text-sm md:text-md font-semibold ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}>
                      {typeof point === 'object' ? point.text : point}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-sections */}
            {section.sub_sections && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-5">
                {section.sub_sections.map((sub, i) => (
                  <div 
                    key={i} 
                    className={`p-5 md:p-6 rounded-3xl md:rounded-4xl border transition-all group ${
                      darkMode 
                        ? 'bg-indigo-900/20 border-indigo-500/20 hover:bg-gray-750 hover:shadow-xl' 
                        : 'bg-indigo-50/30 border-indigo-100/50 hover:bg-white hover:shadow-xl'
                    }`}
                  >
                    <h4 className={`font-black mb-3 text-sm md:text-base tracking-tight uppercase transition-colors ${
                      darkMode ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-900 group-hover:text-indigo-600'
                    }`}>
                      {sub.title}
                    </h4>
                    <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Analysis Table */}
            {section?.analysis_table && section.analysis_table.length > 0 && (
              <div className={`overflow-x-auto rounded-3xl md:rounded-4xl border mb-5 shadow-sm ${
                darkMode ? 'border-gray-700 bg-gray-800' : 'border-slate-200 bg-white'
              }`}>
                <table className="w-full text-left min-w-[600px]">
                  <thead className={`border-b ${darkMode ? 'bg-gray-950 border-gray-700' : 'bg-slate-900 border-slate-800'}`}>
                    <tr>
                      <th className="p-4 md:p-5 font-bold text-white text-xs md:text-sm uppercase tracking-widest w-1/3">বিবেচ্য বিষয়</th>
                      <th className="p-4 md:p-5 font-bold text-white text-xs md:text-sm uppercase tracking-widest">বিশ্লেষণ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.analysis_table.map((row, i) => (
                      <tr 
                        key={i} 
                        className={`border-b last:border-0 transition-colors group ${
                          darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <td className={`p-4 md:p-5 font-black text-sm transition-colors ${
                          darkMode ? 'text-indigo-400 bg-indigo-900/10 group-hover:bg-indigo-900/30' : 'text-indigo-700 bg-indigo-50/30 group-hover:bg-indigo-50'
                        }`}>
                          {row.aspect}
                        </td>
                        <td className={`p-4 md:p-5 text-sm font-medium leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-slate-600'
                        }`}>
                          {row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {/* Interactive Quiz Section */}
        {interactive_elements?.quiz && (
          <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-14 text-white shadow-2xl mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-indigo-600/20 blur-[80px] md:blur-[100px]"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="p-2.5 md:p-3 bg-amber-400 rounded-xl md:rounded-2xl rotate-3 shadow-lg shrink-0">
                  <HelpCircle className="text-slate-900" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tight">{interactive_elements.quiz.title}</h3>
              </div>

              {interactive_elements.quiz.questions?.map((q) => (
                <div key={q.id}>
                  <p className="text-lg md:text-2xl mb-6 md:mb-10 leading-relaxed font-bold border-l-4 border-amber-400 pl-4 md:pl-6">
                    {q.question}
                  </p>
                  <div className="grid gap-3 md:gap-4">
                    {q.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setSelectedAnswer(option); setShowExplanation(true); }}
                        className={`p-4 md:p-6 rounded-2xl md:rounded-3xl text-left font-bold transition-all border-2 flex justify-between items-center group text-sm md:text-base ${
                          selectedAnswer === option
                            ? (option === q.answer ? 'bg-emerald-600 border-emerald-400' : 'bg-rose-600 border-rose-400')
                            : 'bg-slate-900 border-slate-800 hover:border-indigo-500 hover:bg-slate-800'
                        }`}
                      >
                        <span>{option}</span>
                        {selectedAnswer === option && <CheckCircle2 size={20} className="shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                  {showExplanation && (
                    <div className="mt-4 p-5 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center gap-2 mb-3 md:mb-4 text-amber-400">
                        <Info size={18} />
                        <p className="font-black text-xs md:text-sm uppercase tracking-widest italic">ব্যাখ্যা ও বিশ্লেষণ</p>
                      </div>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{q.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Written Prompts Corner */}
        {interactive_elements?.written_corner && (
          <div className={`rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 border shadow-xl mb-6 transition-colors ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-100'
          }`}>
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
              <div className={`p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-sm shrink-0 ${
                darkMode ? 'bg-indigo-900/40 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
              }`}>
                <FileText size={24} />
              </div>
              <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight italic ${
                darkMode ? 'text-gray-100' : 'text-slate-900'
              }`}>
                {interactive_elements.written_corner.title}
              </h3>
            </div>
            <div className="space-y-4 md:space-y-6 mb-8">
              {interactive_elements.written_corner.prompts?.map((prompt, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-indigo-600 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  <div className={`relative p-5 md:p-7 rounded-2xl md:rounded-4xl border transition-all ${
                    darkMode 
                      ? 'bg-gray-700/50 border-gray-600 group-hover:border-indigo-500' 
                      : 'bg-slate-50 border-slate-100 group-hover:border-indigo-200'
                  }`}>
                    <p className={`font-bold text-base md:text-lg leading-relaxed italic ${
                      darkMode ? 'text-gray-200' : 'text-slate-800'
                    }`}>
                      " {typeof prompt === 'object' ? prompt.text : prompt} "
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto pb-2">
              <Breadcrumbs category="written-hub" customTitle={article.seo_metadata?.title_tag?.slice(0, 40) || 'Article'} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DetailsArticle;