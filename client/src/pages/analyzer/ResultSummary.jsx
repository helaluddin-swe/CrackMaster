import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { RotateCcw, Eye, ChevronRight, Award, Target } from "lucide-react";
import PredictiveInsight from "../analyzer/PredictiveInsight";

const ResultSummary = ({ results, onRetry }) => {
    // Scroll to top when results are shown
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Safety Check: If results hasn't arrived yet, show spinner
    if (!results || !results.detailedAnalysis) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full mb-4"></div>
                <p className="font-bold text-slate-600">Generating AI Performance Report...</p>
            </div>
        );
    }

    const { totalScore, correct, wrong, unanswered, isPass, parentInfo, detailedAnalysis } = results;

    return (
        <div className="max-w-2xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">

                {/* Score Section */}
                <div className="p-8 md:p-12 text-center bg-gradient-to-b from-slate-50/50 to-white">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm ${
                        isPass ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                        {isPass ? <Award size={14} /> : <Target size={14} />}
                        {isPass ? 'Goal Achieved' : 'Practice Required'}
                    </div>

                    <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Exam Performance</h2>

                    <div className="relative inline-block my-6">
                        <p className={`text-8xl font-black leading-none drop-shadow-sm ${
                            isPass ? 'text-emerald-500' : 'text-rose-500'
                        }`}>
                            {totalScore !== undefined ? totalScore.toFixed(2) : "0.00"}
                        </p>
                        <p className="text-slate-400 font-bold mt-3 uppercase tracking-[0.2em] text-[10px]">Total BCS Score</p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mt-10">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-100 transition-colors">
                            <p className="text-emerald-500 text-2xl font-black">{correct || 0}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Correct</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-rose-100 transition-colors">
                            <p className="text-rose-500 text-2xl font-black">{wrong || 0}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Wrong</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                            <p className="text-slate-400 text-2xl font-black">{unanswered || 0}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Skipped</p>
                        </div>
                    </div>
                </div>

                {/* AI Analysis Section */}
                <div className="px-8 pb-10">
                    <hr className="border-slate-100 mb-10" />

                    {detailedAnalysis && detailedAnalysis.length > 0 ? (
                        <PredictiveInsight detailedAnalysis={detailedAnalysis} />
                    ) : (
                        <div className="p-4 bg-slate-50 rounded-xl text-center text-slate-400">
                            No detailed data found to analyze.
                        </div>
                    )} {/* <--- Fixed closing logic here */}

                    {/* Action Buttons */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            onClick={onRetry}
                            className="flex items-center justify-center gap-2 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95 shadow-sm"
                        >
                            <RotateCcw size={18} /> Retry Exam
                        </button>

                        {parentInfo && (
                            <Link
                                to={`/question-list/${parentInfo._id}/${parentInfo.title}`}
                                className="flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
                            >
                                <Eye size={18} /> Review Answers <ChevronRight size={18} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <p className="text-center mt-8 text-slate-400 text-xs font-medium px-6">
                AI analysis is based on the 2026 BCS curriculum patterns.
                Keep practicing to improve your predictive score.
            </p>
        </div>
    );
};

export default ResultSummary;