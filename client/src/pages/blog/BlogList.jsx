import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blog_details_data } from "../../assets/assest";
import LastUpdate from "../../components/LastUpdate";
import Searching from "../../components/Searching";

const BlogList = () => {
  const navigate = useNavigate();
  const [displayData, setDisplayData] = useState(blog_details_data);
  const [isNavigating, setIsNavigating] = useState(null);

  const reversedList = [...displayData].reverse();

  const handleItemClick = (id) => {
    setIsNavigating(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      navigate(`/blog/${id}`);
      setIsNavigating(null);
    }, 500);
  };

  return (
    <>
      <Searching data={blog_details_data} setDisplayData={setDisplayData} />

      <div className='grid grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
        {reversedList.map((list, index) => (
          <div 
            key={list._id} 
            onClick={() => handleItemClick(list._id)}
            className={`relative overflow-hidden group p-5 transition-all duration-300 rounded-xl flex items-center justify-between shadow-md cursor-pointer border ${
              isNavigating === list._id 
                ? 'opacity-70 scale-95' 
                : 'bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-slate-900 dark:to-indigo-950 text-white hover:translate-x-2 border-white/10 dark:border-slate-800'
            }`}
          >
            {/* Subtle Background Index */}
            <span className='absolute right-20 text-white/10 dark:text-slate-800/50 text-8xl font-black italic select-none'>
              {index + 1}
            </span>

            <div className='relative z-10 flex flex-col gap-1 text-white'> 
              {/* Content Tags */}
              <div className='flex items-center gap-3'>
                <div className='bg-white/20 dark:bg-slate-800/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest text-white'>
                  Preliminary
                </div>
                {isNavigating === list._id && (
                   <span className='text-[10px] bg-white text-indigo-600 px-2 py-0.5 rounded animate-bounce font-bold'>
                     Loading...
                   </span>
                )}
              </div>

              <h2 className='text-xl font-bold tracking-tight text-white'>
                {list.title}
              </h2>
              
              <div className='text-sm text-indigo-100/80 dark:text-slate-300 flex justify-between items-center gap-4'>
                <span className='font-bold'>Total questions: {list.preliminary_exam_prep?.mcqs?.length || 0}</span>
                <span className="text-md text-cyan-600 dark:text-cyan-400 font-bold px-2 py-1 rounded-md bg-white dark:bg-slate-800 shadow-sm"> 
                  <LastUpdate />
                </span>
              </div>
            </div>

            <div className='relative z-10 h-12 w-12 rounded-full bg-white/10 dark:bg-slate-800 text-white flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 dark:group-hover:bg-indigo-600 dark:group-hover:text-white transition-all'>
               <span className='text-2xl'>→</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;