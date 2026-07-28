import React from 'react';
import { Zap, Clock, Calendar, ChevronRight } from 'lucide-react';
import { analyzeExamData } from '../../utils/analyzeEngine';
import PerformanceCard from './PerformanceCard';

const PredictiveInsight = ({ detailedAnalysis }) => {
    // Safety check: Don't render if data is missing or invalid
    if (!detailedAnalysis || !Array.isArray(detailedAnalysis) || detailedAnalysis.length === 0) {
        return null;
    }

    const { stats, timeWasters } = analyzeExamData(detailedAnalysis);

    // Calculate Tomorrow's Date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    // Extract Top 2 Weakest Categories for the CTA
    const weakTopics = Object.entries(stats)
        .filter(([_, data]) => data.wrong > 0)
        .sort((a, b) => b[1].wrong - a[1].wrong)
        .slice(0, 2)
        .map(([name]) => name);

    return (
        <div className="mt-10 text-left animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-200">
                    <Zap size={22} fill="currentColor" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">Tomorrow's Study Plan</h3>
                    <p className="text-sm text-slate-500 font-medium tracking-tight">AI-driven prioritization for BCS 2026</p>
                </div>
            </div>

            {/* Time Management Logic */}
            {timeWasters.length > 0 && (
                <div className="mb-6 flex items-start gap-3 bg-rose-50 border border-rose-100 p-5 rounded-2xl shadow-sm">
                    <div className="mt-1 bg-rose-100 p-1.5 rounded-lg shrink-0">
                        <Clock className="text-rose-600" size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-rose-900">Time-Waster Alert</p>
                        <p className="text-xs text-rose-700 leading-relaxed font-medium">
                            You lost marks on {timeWasters.length} questions where you spent over 45s. 
                            <strong> Skill Build:</strong> Practice the "10-second skip rule" for these topics.
                        </p>
                    </div>
                </div>
            )}

            {/* Performance Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(stats).map(([category, data]) => (
                    data.wrong > 0 && <PerformanceCard key={category} category={category} data={data} />
                ))}
            </div>

            {/* Retention & Revenue Card */}
            <div className="mt-8 bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        <p className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">Personalized Routine</p>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-6 leading-tight max-w-[250px]">
                        Review {weakTopics.join(" & ") || "all topics"} on {dateString}
                    </h4>
                    
                    <button className="group flex items-center justify-center gap-3 bg-yellow-400 text-slate-950 px-8 py-4 rounded-2xl font-black text-sm hover:bg-yellow-300 transition-all active:scale-95 shadow-lg shadow-yellow-900/20 w-full sm:w-auto">
                        <Calendar size={18} /> 
                        Add to Study Routine 
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Aesthetic Background Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12 pointer-events-none">
                    <Zap size={180} />
                </div>
            </div>
        </div>
    );
};

export default PredictiveInsight