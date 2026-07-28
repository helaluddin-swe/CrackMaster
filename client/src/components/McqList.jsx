import React, { useMemo, useState } from 'react';
import McqCard from './McqCard';
import { BookMinusIcon, BookOpen, LayoutList, ClipboardCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const McqList = ({ data = [], mainTitle = "প্রিলিমিনারি কুইজ" }) => {
  // 1. Filter only items that actually contain MCQs to avoid empty sections
  const validData = useMemo(() => {
    return data.filter(item => item.preliminary_exam_prep?.mcqs?.length > 0);
  }, [data]);
  
  const { darkMode } = useTheme();

  // 2. Calculate total MCQ count for the header stat card
  const totalMcqsCount = useMemo(() => {
    return validData.reduce((acc, item) => {
      const mcqs = item.preliminary_exam_prep?.mcqs;
      return acc + (Array.isArray(mcqs) ? mcqs.length : 0);
    }, 0);
  }, [validData]);

  /** 3. ACCORDION LOGIC
   * We use a single string/null state instead of an array.
   * This ensures opening one section automatically closes the previous one.
   */
  const [openSectionId, setOpenSectionId] = useState(null);
  
  const toggleSection = (id) => {
    setOpenSectionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 transition-colors duration-300">
      
      {/* Header Stat Card */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 mb-8 sm:mb-10 shadow-xl transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900 border border-slate-800 text-slate-100 shadow-slate-950/50' 
          : 'bg-slate-900 text-white shadow-slate-200'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
              {mainTitle}
            </h1>
            <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-300'}`}>
              আপনার দক্ষতা যাচাই করতে নিচের বিষয়গুলো থেকে প্রশ্ন নির্বাচন করুন।
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/11 self-start md:self-auto">
            <ClipboardCheck className="text-indigo-400 shrink-0" size={24} />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Total Questions</p>
              <p className="text-xl font-black leading-none">{totalMcqsCount} টি</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Blur */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {validData.length > 0 ? (
          validData.map((item, bIndex) => {
            const sectionId = item._id || bIndex;
            // Check if this specific section is the one currently open
            const isSectionOpen = openSectionId === sectionId;
            const qCount = item.preliminary_exam_prep?.mcqs?.length || 0;

            return (
              <section key={sectionId} className="group">
                {/* Section Header Card */}
                <div 
                  onClick={() => toggleSection(sectionId)}
                  className={`
                    flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 
                    rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer
                    ${isSectionOpen 
                      ? darkMode 
                        ? 'bg-slate-800/90 border-indigo-500/40 shadow-xl shadow-indigo-950/30' 
                        : 'bg-white border-indigo-200 shadow-xl shadow-indigo-500/10'
                      : darkMode 
                        ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700' 
                        : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:border-indigo-100'}
                  `}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className={`
                      p-3 rounded-2xl transition-colors duration-300 shrink-0
                      ${isSectionOpen 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' 
                        : darkMode 
                          ? 'bg-slate-800 text-slate-400 border border-slate-700' 
                          : 'bg-white text-gray-400 border border-gray-100 shadow-sm'}
                    `}>
                      <LayoutList size={20} />
                    </div>
                    <div>
                      <h2 className={`text-base sm:text-lg font-bold leading-tight ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>
                        {item.preliminary_exam_prep?.focus || item.title || "সাধারণ জ্ঞান সেকশন"}
                      </h2>
                      <p className={`text-xs font-bold mt-1 uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                        {qCount} Questions • MCQ Practice
                      </p>
                    </div>
                  </div>

                  <button
                    className={`
                      flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-sm transition-all duration-300 w-full sm:w-auto
                      ${isSectionOpen 
                        ? darkMode ? 'bg-rose-950/50 text-rose-400 border border-rose-900/50' : 'bg-rose-50 text-rose-600' 
                        : darkMode ? 'bg-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'}
                    `}
                  >
                    {isSectionOpen ? (
                      <><BookMinusIcon size={18} /> Hide Questions</>
                    ) : (
                      <><BookOpen size={18} /> Open Questions</>
                    )}
                  </button>
                </div>

                {/* Questions Grid/List - Only renders if this section is the active one */}
                {isSectionOpen && (
                  <div className={`
                    mt-4 ml-0 sm:ml-4 md:ml-10 pl-2 sm:pl-4 md:pl-8 
                    border-l-0 sm:border-l-2 
                    ${darkMode ? 'border-indigo-500/30' : 'border-indigo-100'} 
                    space-y-6 py-4 animate-in fade-in slide-in-from-top-2 duration-500
                  `}>
                    {item.preliminary_exam_prep.mcqs.map((mcq, mIndex) => (
                      <McqCard 
                        key={mcq.id || `mcq-${mIndex}`} 
                        mcqData={mcq} 
                        blogId={item._id} 
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })
        ) : (
          /* Empty State */
          <div className={`text-center py-16 sm:py-20 rounded-3xl border border-dashed transition-colors duration-300 ${
            darkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-gray-50 border-gray-200 text-gray-500'
          }`}>
             <BookOpen size={48} className={`mx-auto mb-4 ${darkMode ? 'text-slate-600' : 'text-gray-300'}`} />
             <p className="font-medium font-serif">কোনো MCQ পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default McqList;