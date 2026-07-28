import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Eye, Calendar } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const ArticleView = ({ article }) => {
  const { backendUrl } = useAppContext();
  const [dbViews, setDbViews] = useState(article?.views || 0);

  useEffect(() => {
    const incrementView = async () => {
      if (!article?._id) return;

      // সেশন চেক: একই ইউজার বারবার রিফ্রেশ করলে কাউন্ট হবে না
      const sessionKey = `viewed_${article._id}`;
      if (!sessionStorage.getItem(sessionKey)) {
        try {
          const response = await axios.patch(`${backendUrl}/api/articles/${article._id}/view`);
          if (response.data) {
            setDbViews(response.data.views);
            sessionStorage.setItem(sessionKey, "true");
          }
        } catch (error) {
          console.error("View update failed", error);
        }
      }
    };

    incrementView();
  }, [article?._id, backendUrl]);

  return (
    <>
      {/* Real-time DB View Badge */}
      <span className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-indigo-900/40 font-sans text-sm font-black border border-indigo-400/30">
        <Eye size={16} className="text-indigo-200 animate-pulse" />
        {dbViews} বার পঠিত
      </span>

    </>
  );
};
export default ArticleView