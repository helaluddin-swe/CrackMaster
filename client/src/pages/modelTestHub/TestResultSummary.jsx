import { BarChart3 } from 'lucide-react';
import PerformanceAnalysis from '../article/ResultAnalysis';
import { useTheme } from '../../context/ThemeContext';

const TestResultSummary = ({ score, total }) => {
  const {darkMode}=useTheme()
  const percentage = (score / total) * 100;
  const rank = percentage >= 85 ? "Top 0.5%" : percentage >= 70 ? "Top 10%" : "Top 45%";

  return (
    <div className="mb-10 animate-in zoom-in duration-500">
      <div className="bg-linear-to-br from-indigo-700 to-purple-800 p-8 rounded-3xl shadow-2xl text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black">ফলাফল বিশ্লেষণ</h2>
          <BarChart3 size={24} />
        </div>
        <div className="flex items-center gap-8 mb-6">
          <div className="text-5xl font-black">{Math.round(percentage)}%</div>
          <div>
            <h3 className="text-2xl font-bold text-amber-300">{rank}</h3>
            <p className="opacity-80">স্ট্যাটাস: {percentage >= 70 ? "Competitive" : "Average"}</p>
          </div>
        </div>
        <PerformanceAnalysis score={score} total={total} />
      </div>
    </div>
  );
};

export default TestResultSummary