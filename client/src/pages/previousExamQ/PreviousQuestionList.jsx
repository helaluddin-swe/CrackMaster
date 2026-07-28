import { Bookmark, ChevronRight, Eye, FileText, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import LoadMore from "../../components/LoadMore";

const PreviousQuestionList = ({ activeCategory, displayLimit, setDisplayLimit, onArticleClick }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar ${
          darkMode ? 'bg-gray-900' : 'bg-slate-50/30'
        }`}>
          {activeCategory?.articles?.length > 0 ? (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {activeCategory.articles.slice(0, displayLimit).map((article) => {
                  const displayTitle = article.title || "শিরোনামহীন প্রশ্নপত্র";

                  return (
                    <div
                      key={article._id}
                      onClick={() => onArticleClick(article)}
                      className={`cursor-pointer group p-6 rounded-[2rem] border shadow-sm hover:-translate-y-1.5 transition-all duration-300 flex flex-col min-h-[220px] relative overflow-hidden ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-indigo-900/20 hover:border-indigo-500/50'
                          : 'bg-white border-gray-100 hover:shadow-xl hover:border-indigo-200'
                      }`}
                    >
                      {/* Background Decor */}
                      <div className={`absolute top-0 right-0 p-8 -mr-6 -mt-6 rounded-bl-full opacity-10 transition-transform group-hover:scale-150 ${
                        darkMode ? 'bg-indigo-500' : 'bg-indigo-400'
                      }`}>
                          <FileText size={40} className={darkMode ? 'text-white' : 'text-indigo-900'} />
                      </div>

                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className={`p-3 rounded-2xl transition-colors ${
                          darkMode
                            ? 'bg-gray-700/80 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white'
                            : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                        }`}>
                          <Bookmark size={20} />
                        </div>

                        {(article.views || 0) > 1000 && (
                          <span className={`flex items-center gap-1 text-[10px] font-black px-3 py-1 rounded-full shadow-sm ${
                            darkMode ? 'bg-amber-500/20 text-amber-400 border border-amber-500/20' : 'bg-amber-100 text-amber-700 border border-amber-200'
                          }`}>
                            <Sparkles size={12} /> HOT
                          </span>
                        )}
                      </div>

                      <h3 className={`font-bold text-lg leading-snug mb-3 line-clamp-3 relative z-10 transition-colors ${
                        darkMode ? 'text-gray-100 group-hover:text-indigo-300' : 'text-gray-900 group-hover:text-indigo-700'
                      }`}>
                        {displayTitle}
                      </h3>

                      <div className={`mt-auto pt-4 border-t flex items-center justify-between text-xs font-sans font-bold relative z-10 ${
                        darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-100 text-gray-500'
                      }`}>
                        <div className="flex items-center gap-3">
                          <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-slate-100'
                          }`}>
                            {article.examYear || 'বিগত সাল'}
                          </span>
                         
                        </div>
                        <div className={`p-1.5 rounded-full transition-colors ${
                          darkMode ? 'bg-gray-700 group-hover:bg-indigo-500 text-gray-400 group-hover:text-white' : 'bg-slate-100 group-hover:bg-indigo-600 text-gray-400 group-hover:text-white'
                        }`}>
                          <ChevronRight size={16} />
                        </div>
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
            <div className="flex flex-col items-center justify-center h-full py-20 text-gray-400 font-sans">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}>
                <FileText size={48} className="opacity-20" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>কোনো প্রশ্নপত্র নেই</h3>
              <p className="text-sm">এই ক্যাটেগরিতে এখনো কোনো বিগত সালের প্রশ্ন আপলোড করা হয়নি।</p>
            </div>
          )}
        </div>
  )
}
export default PreviousQuestionList;