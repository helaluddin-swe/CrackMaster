import React from 'react';
import { AlertTriangle, TrendingDown } from 'lucide-react';

const PerformanceCard = ({ category, data }) => {
    // Safety check for data
    if (!data) return null;

    const errorRate = Math.round((data.wrong / data.total) * 100);
    
    // Determine color scheme based on error severity
    const isCritical = errorRate > 50;
    const themeColor = isCritical ? 'text-rose-600 bg-rose-100' : 'text-amber-600 bg-amber-100';
    const barColor = isCritical ? 'bg-rose-500' : 'bg-amber-500';

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    {isCritical ? (
                        <AlertTriangle size={16} className="text-rose-500" />
                    ) : (
                        <TrendingDown size={16} className="text-amber-500" />
                    )}
                    <h4 className="font-bold text-slate-800 tracking-tight">{category}</h4>
                </div>
                <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider ${themeColor}`}>
                    {errorRate}% Error
                </span>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-1.5 mb-4 min-h-[20px]">
                {data.tags && Array.from(data.tags).length > 0 ? (
                    Array.from(data.tags).slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-md font-medium">
                            #{tag}
                        </span>
                    ))
                ) : (
                    <span className="text-[9px] text-slate-300 italic">No specific sub-topics identified</span>
                )}
            </div>

            {/* Progress Bar Container */}
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-[9px] font-semibold inline-block text-slate-400 uppercase">
                            Accuracy Gap
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-slate-100">
                    <div 
                        style={{ width: `${errorRate}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-1000 ease-out ${barColor}`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceCard;