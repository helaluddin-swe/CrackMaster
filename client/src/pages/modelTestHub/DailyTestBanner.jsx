import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Users, Trophy, Star, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const DailyTestBanner = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [status, setStatus] = useState({ daily: 'waiting', weekly: 'waiting' });
  const [countdowns, setCountdowns] = useState({ daily: '', weekly: '' });

  useEffect(() => {
    const updateAllStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0: Sun, 4: Thu, 5: Fri
      const hours = now.getHours();

      // --- Daily Logic (7 PM - 11 PM) ---
      let dStatus = 'waiting';
      if (hours >= 19 && hours < 23) dStatus = 'live';
      else if (hours >= 23) dStatus = 'ended';

      // --- Weekly Logic (Thu 7 PM to Fri 9 PM) ---
      let wStatus = 'waiting';
      const isThursdayAfter7 = (day === 4 && hours >= 19);
      
      if (isThursdayAfter7 || (day === 5 && hours < 21)) wStatus = 'live';
      else if ((day === 5 && hours >= 21) || day > 5 || day < 4) wStatus = 'waiting';

      setStatus({ daily: dStatus, weekly: wStatus });

      const getCountdown = (targetDay, targetHour) => {
        let target = new Date();
        let daysUntil = (targetDay - now.getDay() + 7) % 7;
        
        // If it's the target day but the hour has passed, move to next week
        if (daysUntil === 0 && now.getHours() >= targetHour) {
          daysUntil = 7;
        }
        
        target.setDate(now.getDate() + daysUntil);
        target.setHours(targetHour, 0, 0, 0);
        
        const diff = target - now;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        return `${h}h ${m}m ${s}s`;
      };

      setCountdowns({
        daily: dStatus === 'live' ? 'Ending 11:00 PM' : getCountdown(now.getDay(), 19),
        weekly: wStatus === 'live' ? 'Ends Friday 9:00 PM' : getCountdown(4, 19)
      });
    };

    updateAllStatus();
    const interval = setInterval(updateAllStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartExam = (type) => {
    if (type === 'daily' && status.daily === 'live') navigate('/daily-test');
    if (type === 'weekly' && status.weekly === 'live') navigate('/weekly-test');
  };

  return (
    <div className="lg:col-span-5 h-full relative">
      <div className={`border rounded-[2.5rem] p-1 relative overflow-hidden h-full flex flex-col min-h-130 transition-all duration-300 ${
        darkMode 
          ? "bg-slate-900/90 border-slate-800 shadow-2xl shadow-indigo-950/20" 
          : "bg-white border-slate-100 shadow-[0_20px_50px_rgba(79,70,229,0.12)]"
      }`}>
        
        {/* Header */}
        <div className={`h-20 w-full relative overflow-hidden rounded-t-[2.2rem] flex items-center px-8 transition-colors ${
          darkMode ? "bg-slate-950 border-b border-slate-800/80" : "bg-slate-900"
        }`}>
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-indigo-500 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <Trophy size={18} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">Exam Portal</h3>
              <p className="text-slate-400 text-[10px] font-medium tracking-wider uppercase">Real-Time Assessment</p>
            </div>
          </div>
          <div className="absolute -right-5 -top-5 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="p-4 flex-1 flex flex-col gap-4">
          
          {/* DAILY CARD */}
          <button 
            disabled={status.daily !== 'live'}
            onClick={() => handleStartExam('daily')}
            className={`relative p-5 rounded-4xl border-2 transition-all duration-300 flex flex-col justify-between h-1/2 w-full text-left group/card ${
              status.daily === 'live' 
                ? darkMode
                  ? 'border-indigo-500/30 bg-indigo-950/30 cursor-pointer hover:shadow-xl hover:scale-[1.01] hover:border-indigo-500/60'
                  : 'border-indigo-100 bg-indigo-50/40 cursor-pointer hover:shadow-xl hover:scale-[1.01]'
                : darkMode
                  ? 'border-slate-800/60 bg-slate-800/20 opacity-80 cursor-not-allowed'
                  : 'border-slate-50 bg-slate-50/50 opacity-90 cursor-not-allowed'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover/card:scale-110 ${
                status.daily === 'live' 
                  ? 'bg-indigo-600 text-white animate-pulse' 
                  : darkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-400'
              }`}>
                <Zap size={22} fill={status.daily === 'live' ? 'currentColor' : 'none'} />
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full ${
                  status.daily === 'live' 
                    ? 'bg-red-500 text-white animate-bounce' 
                    : darkMode 
                      ? 'bg-slate-800 text-slate-400 border border-slate-700' 
                      : 'bg-white text-slate-400 border border-slate-100'
                }`}>
                  {status.daily === 'live' ? '● LIVE' : 'DAILY @ 7PM'}
                </span>
                {status.daily === 'ended' && <span className="text-[9px] font-bold text-red-400">ENDED FOR TODAY</span>}
              </div>
            </div>

            <div>
              <h4 className={`font-bold text-xl ${darkMode ? "text-white" : "text-slate-800"}`}>
                Daily Challenge
              </h4>
              <p className={`text-[12px] font-medium ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                ৩০টি প্রশ্ন • ২০ মিনিট • বিষয়ভিত্তিক
              </p>
            </div>

            <div className={`flex justify-between items-center pt-3 border-t ${darkMode ? "border-slate-800/80" : "border-slate-200/50"}`}>
              <div className="flex items-center gap-1.5">
                {status.daily === 'live' ? (
                   <span className="text-indigo-500 font-bold text-xs uppercase tracking-tight">Enter Arena</span>
                ) : (
                  <div className={`flex items-center gap-1 font-bold text-[11px] ${darkMode ? "text-slate-400" : "text-slate-400"}`}>
                    <Clock size={12} />
                    <span>{countdowns.daily}</span>
                  </div>
                )}
              </div>
              <ArrowRight size={18} className={`transition-transform group-hover/card:translate-x-1 ${
                status.daily === 'live' ? 'text-indigo-500' : darkMode ? 'text-slate-600' : 'text-slate-300'
              }`} />
            </div>
          </button>

          {/* WEEKLY CARD */}
          <button 
            disabled={status.weekly !== 'live'}
            onClick={() => handleStartExam('weekly')}
            className={`relative p-5 rounded-4xl border-2 transition-all duration-300 flex flex-col justify-between h-1/2 w-full text-left group/card ${
              status.weekly === 'live' 
                ? darkMode
                  ? 'border-emerald-500/30 bg-emerald-950/30 cursor-pointer hover:shadow-xl hover:scale-[1.01] hover:border-emerald-500/60'
                  : 'border-emerald-100 bg-emerald-50/40 cursor-pointer hover:shadow-xl hover:scale-[1.01]'
                : darkMode
                  ? 'border-slate-800/60 bg-slate-800/20 opacity-80 cursor-not-allowed'
                  : 'border-slate-50 bg-slate-50/50 opacity-90 cursor-not-allowed'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover/card:scale-110 ${
                status.weekly === 'live' 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30' 
                  : darkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-400'
              }`}>
                <Star size={22} fill={status.weekly === 'live' ? 'currentColor' : 'none'} />
              </div>
              <span className={`text-[10px] font-black px-3 py-1 rounded-full ${
                status.weekly === 'live' 
                  ? 'bg-emerald-600 text-white' 
                  : darkMode 
                    ? 'bg-slate-800 text-slate-400 border border-slate-700' 
                    : 'bg-white text-slate-400 border border-slate-100'
              }`}>
                {status.weekly === 'live' ? 'WEEKLY MEGA' : 'THU 7PM - FRI 9PM'}
              </span>
            </div>

            <div>
              <h4 className={`font-bold text-xl ${darkMode ? "text-white" : "text-slate-800"}`}>
                Weekly Mega Test
              </h4>
              <p className={`text-[12px] font-medium ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                ২০০টি প্রশ্ন • বিসিএস পূর্ণাঙ্গ সিলেবাস
              </p>
            </div>

            <div className={`flex justify-between items-center pt-3 border-t ${darkMode ? "border-slate-800/80" : "border-slate-200/50"}`}>
               <div className="flex items-center gap-1.5">
                {status.weekly === 'live' ? (
                   <span className="text-emerald-500 font-bold text-xs uppercase tracking-tight">Start Mega Test</span>
                ) : (
                  <div className={`flex items-center gap-1 font-bold text-[11px] ${darkMode ? "text-slate-400" : "text-slate-400"}`}>
                    <Clock size={12} />
                    <span>{countdowns.weekly}</span>
                  </div>
                )}
              </div>
              <ArrowRight size={18} className={`transition-transform group-hover/card:translate-x-1 ${
                status.weekly === 'live' ? 'text-emerald-500' : darkMode ? 'text-slate-600' : 'text-slate-300'
              }`} />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className={`p-5 border-t flex items-center justify-between rounded-b-[2.5rem] ${
          darkMode 
            ? "bg-slate-950/80 border-slate-800/80" 
            : "bg-slate-50/80 border-slate-100"
        }`}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-7 h-7 rounded-full border-2 flex items-center justify-center overflow-hidden ${
                    darkMode ? "border-slate-900 bg-slate-800" : "border-white bg-slate-200"
                  }`}>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className={`text-[11px] font-black leading-none ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                  ২১,০০০+
                </span>
                <span className={`text-[9px] font-medium uppercase tracking-tighter ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Active Participants
                </span>
              </div>
            </div>
            <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${
              darkMode 
                ? "bg-indigo-950/60 text-indigo-400 border border-indigo-800/50" 
                : "bg-indigo-100/50 text-indigo-600"
            }`}>
               <Users size={12} />
               <span className="text-[10px] font-bold">Join Now</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTestBanner;