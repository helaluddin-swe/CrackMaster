import { Award, Target, TrendingUp } from "lucide-react";

const LifetimeDashboard = ({ lifetimeStats }) => {
  const accuracy = lifetimeStats.totalAnswered > 0 
    ? Math.round((lifetimeStats.totalCorrect / lifetimeStats.totalAnswered) * 100) : 0;
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatBox icon={<Target />} value={lifetimeStats.totalAnswered} label="মোট উত্তর" color="indigo" />
      <StatBox icon={<Award />} value={lifetimeStats.totalCorrect} label="সঠিক উত্তর" color="green" />
      <StatBox icon={<TrendingUp />} value={`${accuracy}%`} label="সফলতার হার" color="indigo" dark />
    </div>
  );
};

const StatBox = ({ icon, value, label, color, dark }) => (
  <div className={`${dark ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800 border-slate-100'} p-6 rounded-4xl shadow-sm border flex items-center gap-5`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${dark ? 'bg-white/20' : `bg-${color}-50 text-${color}-600`}`}>{icon}</div>
    <div>
      <h4 className="text-2xl font-black">{value}</h4>
      <p className={`text-[10px] font-bold uppercase ${dark ? 'opacity-80' : 'text-slate-400'}`}>{label}</p>
    </div>
  </div>
);
export default LifetimeDashboard