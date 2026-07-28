import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Loader2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';


const SpecificExamQuestions = () => {
  const { examName } = useParams(); 
  const { backendUrl } = useAppContext();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        // Calls the backend using the specificExam query parameter
        const response = await axios.get(`${backendUrl}/items?specificExam=${encodeURIComponent(examName)}`);
        setQuestions(response.data);
      } catch (err) {
        console.error("Error fetching exam questions:", err);
        setError("প্রশ্ন লোড করতে সমস্যা হয়েছে।");
      } finally {
        setLoading(false);
      }
    };

    if (examName) {
      fetchQuestions();
    }
  }, [examName, backendUrl]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 animate-spin text-indigo-500 mb-4" />
        <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>প্রশ্নপত্র লোড হচ্ছে...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-red-500">
        <p>{error}</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
          ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-8 px-4 md:px-8 ${darkMode ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className={`flex items-center gap-4 mb-8 p-6 rounded-2xl border shadow-sm ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <button 
            onClick={() => navigate(-1)}
            className={`p-2 rounded-xl transition-colors ${
              darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {examName}
            </h1>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              মোট প্রশ্ন: {questions.length} টি
            </p>
          </div>
        </div>

        {/* Questions List */}
        {questions.length === 0 ? (
          <div className={`text-center py-20 rounded-2xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-white border-gray-200 text-gray-500'}`}>
            এই পরীক্ষার জন্য এখনো কোনো প্রশ্ন আপলোড করা হয়নি।
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((q, index) => (
              <div 
                key={q._id} 
                className={`p-6 rounded-2xl border shadow-sm transition-all ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm">
                    {index + 1}
                  </span>
                  <h3 className={`text-lg font-medium leading-relaxed ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {q.question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-12">
                  {q.options.map((option, optIdx) => (
                    <div 
                      key={optIdx}
                      className={`p-3 rounded-xl border flex items-center gap-3 ${
                        option === q.answer 
                          ? (darkMode ? 'bg-green-900/30 border-green-700/50 text-green-400' : 'bg-green-50 border-green-200 text-green-700')
                          : (darkMode ? 'bg-gray-700/50 border-gray-600 text-gray-300' : 'bg-slate-50 border-gray-200 text-gray-600')
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        option === q.answer 
                          ? 'border-green-500 bg-green-500 text-white' 
                          : (darkMode ? 'border-gray-500' : 'border-gray-300')
                      }`}>
                        {option === q.answer && <CheckCircle2 size={14} />}
                      </div>
                      <span className="font-medium text-sm">{option}</span>
                    </div>
                  ))}
                </div>
                
                {/* Explanation (if exists) */}
                {q.explanation && (
                  <div className={`mt-5 pl-12 p-4 rounded-xl text-sm ${
                    darkMode ? 'bg-gray-700/50 text-gray-300 border border-gray-600' : 'bg-indigo-50/50 text-gray-700 border border-indigo-100'
                  }`}>
                    <span className="font-bold mb-1 block">ব্যাখ্যা:</span>
                    {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecificExamQuestions;