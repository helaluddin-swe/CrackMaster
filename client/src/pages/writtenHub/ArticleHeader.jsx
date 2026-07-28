import React, { useMemo } from 'react';
import { Calendar, Eye, User } from 'lucide-react';
import ArticleView from './ArticleView';
import Breadcrumbs from '../../components/Breadcrumbs';
import PostAndUpdateDate from './PostAndUpdateDate';
import Profile from "../../assets/images/helal9.jpg";
import { useTheme } from '../../context/ThemeContext'; // ThemeContext ইমপোর্ট করা হলো

const ArticleHeader = ({ article }) => {
  const { darkMode } = useTheme(); // darkMode স্টেট নেওয়া হলো

  // ১০টি প্রিমিয়াম ডার্ক কালারের অ্যারে (Light Mode এর জন্য)
  const lightBgColors = [
    'bg-[#0F4A81]', // Deep Ocean Blue (Original)
    'bg-[#1e1b4b]', // Indigo Night
    'bg-[#312e81]', // Royal Blue
    'bg-[#111827]', // Rich Gray
    'bg-[#064e3b]', // Emerald Deep
    'bg-[#4c1d95]', // Deep Purple
    'bg-[#7c2d12]', // Burnt Orange/Brown
    'bg-[#831843]', // Crimson Maroon
    'bg-[#0f172a]', // Slate Black
    'bg-[#164e63]', // Cyan Dark
  ];

  // ডার্ক মোডের জন্য তুলনামূলক বেশি ডিপ এবং মিউটেড কালারের অ্যারে
  const darkBgColors = [
    'bg-slate-900',
    'bg-gray-900',
    'bg-zinc-900',
    'bg-neutral-900',
    'bg-slate-950',
    'bg-gray-950',
    'bg-indigo-950',
    'bg-blue-950',
    'bg-emerald-950',
    'bg-purple-950'
  ];

  // প্রতিবার রেন্ডারে এবং থিম চেঞ্জ হলে র‍্যান্ডমলি একটি কালার সিলেক্ট করার জন্য useMemo ব্যবহার
  const randomBg = useMemo(() => {
    const activeColors = darkMode ? darkBgColors : lightBgColors;
    return activeColors[Math.floor(Math.random() * activeColors.length)];
  }, [article?._id, darkMode]); // আর্টিকেলের আইডি বা ডার্কমোড পরিবর্তন হলে কালার চেঞ্জ হবে

  // ডাটা এক্সট্রাকশন
  const title = article?.seo_metadata?.title_tag?.split('|')[0] || "শিরোনামহীন আর্টিকেল";
  
  const authorImg = Profile; 

  return (
    <header className={`relative w-full ${randomBg} py-8 px-4 md:px-6 md:py-12 transition-colors duration-700 overflow-hidden`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-[80px] md:blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 md:w-64 md:h-64 bg-black/10 rounded-full blur-[60px] md:blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        
        {/* Main Title */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-white leading-snug md:leading-[1.2] tracking-tight mb-8 md:mb-10 drop-shadow-md">
          {title}
        </h1>

        {/* Author & Info Wrapper */}
        <div className="inline-flex flex-col items-center group">
          

          {/* Publish Date, Last Updated & View Count */}
          <div className=" flex flex-wrap justify-center items-center gap-2 md:gap-3 text-white/60 text-[10px] md:text-xs font-bold font-sans tracking-wide">
             <div className="flex items-center gap-1.5">
               <Calendar size={12} className="md:w-3.5 md:h-3.5" />
               <PostAndUpdateDate createdAt={article?.createdAt} updatedAt={article?.updatedAt}/>
             </div>
             
             <span className="hidden md:inline text-white/30">•</span>

             <div className="flex items-center">
               <ArticleView article={article}/>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;