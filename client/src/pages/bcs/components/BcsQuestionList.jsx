import React, { useState } from 'react';
import { BCS_Question_List } from '../../../assets/assest';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import Searching from '../../../components/Searching';
import LoadMore from '../../../components/LoadMore';
import { useTheme } from '../../../context/ThemeContext';

const BCSQuestionList = () => {
  const { setDataSource, setSelectedCategory, setSearchTerm } = useAppContext();
  const { darkMode } = useTheme();
  
  // State for how many items to show
  const [displayLimit, setDisplayLimit] = useState(3);
  const [displayData, setDisplayData] = useState(BCS_Question_List);

  const handleDataInitialization = (data) => {
    setDataSource(data);
    setSelectedCategory("All");
    setSearchTerm("");
  };

  const reversedList = [...displayData].reverse();
  const visibleList = reversedList.slice(0, displayLimit);

  return ( 
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Searching Header */}
        <div className="mb-6">
          <Searching data={BCS_Question_List} setDisplayData={setDisplayData} title='Search Question' />
        </div>

        {/* Master-Detail / Split Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Examination Names / Navigation Panel */}
          <div className={`lg:col-span-4 xl:col-span-3 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border shadow-sm transition-colors duration-300 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'
          }`}>
            <h2 className={`text-base font-bold mb-4 px-2 uppercase tracking-wider ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              বিসিএস পরীক্ষাসমূহ
            </h2>
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {BCS_Question_List.slice().reverse().map((item) => (
                <Link
                  key={item._id}
                  to={`/question-list/${item._id}/${item.title}`}
                  onClick={() => handleDataInitialization(item.BCS)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    darkMode 
                      ? 'bg-slate-800/60 hover:bg-indigo-600/20 text-slate-200 border border-slate-800' 
                      : 'bg-gray-50 hover:bg-indigo-50 text-gray-700 border border-gray-100'
                  }`}
                >
                  <span className="truncate">{item.title.replace(/-/g, ' ')}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.BCS.length}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Main Content Grid (Exam Cards) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {visibleList.map((list, index) => (
                <Link 
                  key={list._id} 
                  onClick={() => { window.scrollTo(0, 0); handleDataInitialization(list.BCS) }}
                  className='relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-violet-700 p-5 hover:translate-x-1 transition-all duration-300 rounded-2xl sm:rounded-3xl text-white flex items-center justify-between shadow-lg shadow-indigo-500/10 border border-white/10' 
                  to={`/question-list/${list._id}/${list.title}`}
                >
                  <span className='absolute right-10 text-white/10 text-7xl font-black italic select-none pointer-events-none'>
                    {BCS_Question_List.length - index}
                  </span>

                  <div className='relative z-10 flex flex-col gap-1.5'> 
                    <div className='flex items-center gap-2'>
                      <span className='bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest'>
                        Preliminary
                      </span>
                      <span className='bg-rose-500 text-[10px] px-2 py-0.5 rounded-full animate-pulse shadow-sm'>
                        {list.update || "New"}
                      </span>
                    </div>

                    <h3 className='text-lg sm:text-xl font-bold tracking-tight'>
                      {list.title.replace(/-/g, ' ')}
                    </h3>
                    
                    <span className='text-xs sm:text-sm text-indigo-100/80'>
                      Total questions: <span className='font-bold'>{list.BCS.length}</span>
                    </span>
                  </div>

                  <div className='relative z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all shrink-0 shadow-inner'>
                     <span className='text-xl group-hover:translate-x-1 transition-transform'>→</span>
                  </div>
                </Link>
              ))}
            </div>

            <LoadMore displayLimit={displayLimit} setDisplayLimit={setDisplayLimit} totalItems={displayData} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BCSQuestionList;