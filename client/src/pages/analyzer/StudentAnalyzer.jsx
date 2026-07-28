import React from 'react';
import { TrendingUp, Clock, Target, AlertTriangle, ArrowRight } from 'lucide-react';

const PredictiveEngine = ({ detailedAnalysis }) => {
    // 1. Logic to group data
    const stats = detailedAnalysis.reduce((acc, q) => {
        if (!acc[q.category]) {
            acc[q.category] = { total: 0, wrong: 0, time: 0, tags: new Set() };
        }
        acc[q.category].total++;
        acc[q.category].time += q.timeSpent;
        if (q.status === 'wrong') {
            acc[q.category].wrong++;
            q.tags.forEach(tag => acc[q.category].tags.add(tag));
        }
        return acc;
    }, {});

    const timeWasters = detailedAnalysis.filter(q => q.timeSpent > 45 && q.status === 'wrong');

    return (
        <div className="mt-8 text-left space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-2 border-b pb-2 border-slate-100">
                <TrendingUp size={20} className="text-indigo-600" />
                <h3 className="font-bold text-slate-800 text-lg">AI Prediction & Next Steps</h3>
            </div>

            {/* Time Management Alert */}
            {timeWasters.length > 0 && (
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                    <div className="flex items-center gap-2 text-amber-800 font-bold mb-1">
                        <Clock size={18} />
                        <span>Time Management Warning</span>
                    </div>
                    <p className="text-xs text-amber-700">
                        You lost <strong>{timeWasters.length} marks</strong> on questions where you spent too much time (45s+). 
                        In BCS, you must skip these faster to save time.
                    </p>
                </div>
            )}

            {/* Topic Recommendations */}
            <div className="grid grid-cols-1 gap-4">
                {Object.entries(stats).map(([category, data]) => {
                    if (data.wrong === 0) return null;
                    return (
                        <div key={category} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-indigo-200 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="font-bold text-slate-800">{category}</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Priority: High</p>
                                </div>
                                <span className="bg-red-50 text-red-600 text-[10px] px-2 py-1 rounded-lg font-bold">
                                    {Math.round((data.wrong / data.total) * 100)}% Error Rate
                                </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {Array.from(data.tags).slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <button className="w-full flex items-center justify-between bg-slate-50 hover:bg-indigo-600 hover:text-white group p-3 rounded-xl transition-all">
                                <span className="text-sm font-bold italic">Start Tomorrow's {category} Drill</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PredictiveEngine;