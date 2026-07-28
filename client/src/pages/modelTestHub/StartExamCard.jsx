import React, { useMemo } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { 
  BarChart3, PlayCircle, Target, Timer, X, CheckCircle,
  BookOpen, Calculator, Globe, FlaskConical, 
  Monitor, Brain, Scale, Map 
} from 'lucide-react';
import { Subjects_Based_MCQ } from '../article/data';
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

const StatItem = ({ icon, label, value, theme }) => (
  <div className={`flex flex-col items-center border-r last:border-0 py-1 sm:py-0 transition-colors ${theme.statBorder}`}>
    <span className="text-indigo-500 mb-1 sm:mb-1.5">{icon}</span>
    <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-0.5 ${theme.statLabel}`}>
      {label}
    </span>
    <span className={`text-xs sm:text-sm font-bold truncate px-1 w-full text-center ${theme.statValue}`}>
      {value}
    </span>
  </div>
);

const StartExamCard = ({ isModal, onClose, startDailyTest, loading }) => {
  const { userData } = useAppContext();
  const { darkMode } = useTheme();

  // --- Centralized Dynamic Theme Engine ---
  const theme = {
    // Layout Surfaces
    pageBg: darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800",
    modalBackdrop: darkMode ? "bg-slate-950/80 backdrop-blur-md" : "bg-slate-900/40 backdrop-blur-sm",
    cardBg: darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-800 border-slate-100",
    footerBg: darkMode ? "bg-slate-950/50 border-slate-800/80" : "bg-slate-50 border-slate-100",
    
    // Icon & Visual Elements
    iconBoxBg: darkMode ? "bg-slate-800 border-slate-700 text-slate-100 shadow-slate-950/50" : "bg-white border-indigo-50 text-slate-800 shadow-xl",
    
    // Typography
    titleText: darkMode ? "text-white" : "text-slate-900",
    descText: darkMode ? "text-slate-300" : "text-slate-500",
    subText: darkMode ? "text-slate-400" : "text-slate-400",
    statLabel: darkMode ? "text-slate-400" : "text-slate-400",
    statValue: darkMode ? "text-slate-200" : "text-slate-700",
    statBorder: darkMode ? "border-slate-800" : "border-slate-200",
    
    // Interactive Elements
    closeBtn: darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-400 hover:text-slate-700",
    startBtnActive: darkMode ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-950/50" : "bg-slate-900 hover:bg-indigo-600 text-white shadow-xl shadow-indigo-100",
    startBtnDisabled: darkMode ? "bg-slate-800/80 text-slate-500 cursor-not-allowed shadow-none" : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
  };

  // 1. Fixed Schedule Logic (Day 0-6)
  const today = useMemo(() => {
    const day = new Date().getDay(); // 0 (Sun) to 6 (Sat)
    
    const schedule = {
      0: "বাংলাদেশ বিষয়াবলি",       // Sunday
      1: "বাংলা সাহিত্য",           // Monday
      2: "ইংরেজি ভাষা ও সাহিত্য",     // Tuesday
      3: "গাণিতিক যুক্তি",          // Wednesday
      4: "আন্তর্জাতিক বিষয়াবলি",     // Thursday
      5: "কম্পিউটার ও তথ্যপ্রযুক্তি",     // Friday
      6: "সাধারণ বিজ্ঞান",          // Saturday
    };

    const subjectName = schedule[day];
    const subjectData = Subjects_Based_MCQ.find(s => s.name === subjectName);

    // Helper for responsive icons
    const getIcon = (name) => {
      const iconProps = { className: "w-6 h-6 sm:w-7 sm:h-7" };
      const icons = {
        "গাণিতিক যুক্তি": <Calculator {...iconProps} />,
        "মানসিক দক্ষতা": <Brain {...iconProps} />,
        "সুশাসন ও নৈতিকতা": <Scale {...iconProps} />,
        "ভুগোল ও পরিবেশ": <Map {...iconProps} />,
        "সাধারণ বিজ্ঞান": <FlaskConical {...iconProps} />,
        "কম্পিউটার ও তথ্যপ্রযুক্তি": <Monitor {...iconProps} />,
        "আন্তর্জাতিক বিষয়াবলি": <Globe {...iconProps} />
      };
      return icons[name] || <BookOpen {...iconProps} />;
    };

    return {
      ...subjectData,
      iconElement: getIcon(subjectName)
    };
  }, []);

  // 2. "Only One Time" Check
  const hasTakenToday = useMemo(() => {
    if (!userData?.dailyHistory) return false;
    const todayStr = new Date().toDateString();
    return userData.dailyHistory.some(log => new Date(log.date).toDateString() === todayStr);
  }, [userData]);

  // Determine button styles based on state
  const buttonStyle = hasTakenToday ? theme.startBtnDisabled : theme.startBtnActive;

  return (
    <div className={
      isModal 
        ? 'fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto' 
        : `min-h-[calc(100vh-4rem)] pt-6 pb-12 flex items-center justify-center p-4 sm:p-6 transition-colors ${theme.pageBg}`
    }>
      {/* Modal Backdrop */}
      {isModal && (
        <div 
          className={`fixed inset-0 transition-opacity animate-in fade-in duration-300 ${theme.modalBackdrop}`} 
          onClick={onClose} 
        />
      )}

      {/* Main Card */}
      <div className={`relative w-full max-w-[95vw] sm:max-w-lg md:max-w-xl rounded-3xl sm:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300 border z-10 transition-colors ${theme.cardBg}`}>
        
        {/* Header Section */}
        <div className="p-5 sm:p-7 md:p-8 flex justify-between items-center gap-4">
          <div className="bg-indigo-600 text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-black flex items-center gap-2 uppercase tracking-[0.15em] shrink-0 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Daily Live
          </div>

          {isModal ? (
            <button 
              onClick={onClose} 
              aria-label="Close modal"
              className={`p-2 sm:p-2.5 rounded-full transition-all duration-200 active:scale-90 shrink-0 ${theme.closeBtn}`}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          ) : (
            <div className="overflow-hidden">
              <Breadcrumbs customTitle="" category="daily-test" />
            </div>
          )}
        </div>

        {/* Hero Content Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 pb-8 sm:pb-12 pt-2 sm:pt-4 text-center">
          
          {/* Responsive Hero Icon Badge */}
          <div className="relative mb-6 sm:mb-8">
            <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-[2.8rem] flex items-center justify-center text-4xl sm:text-5xl border relative z-10 transition-colors ${theme.iconBoxBg}`}>
              {today.icon}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg z-20 flex items-center justify-center">
               {today.iconElement}
            </div>
          </div>

          {/* Subject Title */}
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 tracking-tight transition-colors ${theme.titleText}`}>
            {today.name}
          </h3>
          
          {/* Description & Status */}
          <p className={`font-medium leading-relaxed mb-8 sm:mb-10 text-xs sm:text-sm md:text-base px-2 sm:px-6 transition-colors ${theme.descText}`}>
            আজকের নির্ধারিত বিষয়: <span className="text-indigo-500 font-bold">{today.name}</span>
            <br />
            {hasTakenToday ? (
               <span className="text-emerald-500 font-bold mt-2.5 flex items-center justify-center gap-1.5 bg-emerald-500/10 py-1.5 px-3 rounded-xl inline-flex">
                 <CheckCircle className="w-4 h-4 shrink-0" /> 
                 <span>আপনি আজকের পরীক্ষায় অংশগ্রহণ করেছেন</span>
               </span>
            ) : (
               <span className={`text-[11px] sm:text-xs block mt-1.5 transition-colors ${theme.subText}`}>
                 ৩০টি বাছাইকৃত প্রশ্ন • ২০ মিনিট সময় • ১ বার সুযোগ
               </span>
            )}
          </p>

          {/* Action Button */}
          <button 
            disabled={loading || hasTakenToday} 
            onClick={() => startDailyTest(today.name)}
            aria-label="Start test"
            className={`group w-full py-4 sm:py-5 px-6 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 active:scale-[0.98] ${buttonStyle}`}
          >
            {loading ? (
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                <span className="text-base sm:text-lg">প্রস্তুত হচ্ছে...</span>
              </div>
            ) : hasTakenToday ? (
              "সম্পন্ন হয়েছে"
            ) : (
              <>
                <PlayCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform shrink-0" /> 
                <span>শুরু করুন</span>
              </>
            )}
          </button>
        </div>

        {/* Footer Stats Section */}
        <div className={`p-5 sm:p-7 border-t grid grid-cols-3 gap-2 text-center transition-colors ${theme.footerBg}`}>
          <StatItem icon={<Target className="w-4 h-4 sm:w-5 sm:h-5" />} label="Full Marks" value={today.mark || "30"} theme={theme} />
          <StatItem icon={<Timer className="w-4 h-4 sm:w-5 sm:h-5" />} label="Time" value="20 Min" theme={theme} />
          <StatItem icon={<BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />} label="Negative" value="0.50" theme={theme} />
        </div>

      </div>
    </div>
  );
};

export default StartExamCard;