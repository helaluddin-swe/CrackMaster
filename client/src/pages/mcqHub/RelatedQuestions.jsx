import React from 'react';
import { Network } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const RelatedQuestions = ({ relatedQuestions = [] }) => {
  const { darkMode } = useTheme();

  // If there are no related questions in the data, don't render anything
  if (!relatedQuestions || relatedQuestions.length === 0) return null;

  return (
    <div className={`mt-4 pt-4 border-t-2 border-dashed ${
      darkMode ? 'border-slate-800' : 'border-indigo-100'
    }`}>
      <h4 className={`text-xs font-black uppercase mb-3 flex items-center gap-1.5 ${
        darkMode ? 'text-slate-400' : 'text-slate-500'
      }`}>
        <Network size={14} /> সম্পর্কিত প্রশ্ন (Related Questions)
      </h4>
      
      <div className="space-y-2">
        {relatedQuestions.map((rq, idx) => (
          <div 
            key={idx} 
            className={`text-sm p-3 rounded-xl transition-colors cursor-pointer ${
              darkMode 
                ? 'bg-slate-800/40 hover:bg-slate-800 text-slate-300' 
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span className="font-bold mr-2 text-indigo-500">Q.</span> 
            {rq.question || rq}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedQuestions;