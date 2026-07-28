import React, { useState, useMemo } from 'react';
import { BookOpen, Search, ChevronDown, ChevronRight, CheckCircle2, Circle, X, Sparkles, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { subjectCourses } from '../../components/navbar/LearnMenu';

export default function LeftSidebar({
  courseData,
  currentSubjectSlug,
  currentSubtopic,
  setCurrentSubtopic,
  mobileOpen,
  setMobileOpen
}) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState({ "ch-1": true, "ch-2": true });
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleChapter = (id) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTopic = (id) => {
    setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter chapters/topics/subtopics based on search query
  const filteredChapters = useMemo(() => {
    if (!courseData?.chapters) return [];
    if (!searchQuery.trim()) return courseData.chapters;

    const query = searchQuery.toLowerCase();
    return courseData.chapters.map(chapter => {
      const matchingTopics = chapter.topics.map(topic => {
        const matchingSubtopics = topic.subtopics.filter(sub =>
          sub.title.toLowerCase().includes(query) || sub.content?.toLowerCase().includes(query)
        );
        if (topic.title.toLowerCase().includes(query) || matchingSubtopics.length > 0) {
          return {
            ...topic,
            subtopics: matchingSubtopics.length > 0 ? matchingSubtopics : topic.subtopics
          };
        }
        return null;
      }).filter(Boolean);

      if (chapter.title.toLowerCase().includes(query) || matchingTopics.length > 0) {
        return {
          ...chapter,
          topics: matchingTopics.length > 0 ? matchingTopics : chapter.topics
        };
      }
      return null;
    }).filter(Boolean);
  }, [courseData, searchQuery]);

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 shadow-xl lg:shadow-none
      ${isCollapsed ? 'lg:w-20' : 'lg:w-70'} w-84
      ${darkMode ? 'bg-slate-950 border-r border-slate-800/80 text-slate-100' : 'bg-white border-r border-slate-200 text-slate-900'}
      lg:translate-x-0 lg:static
      ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      {/* Header & Brand Title */}
      <div className={`p-4 border-b flex mt-20 md:mt-4 items-center justify-between ${darkMode ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200 bg-slate-50/50'}`}>
        {!isCollapsed && (
          <div className="flex items-center space-x-2.5 truncate">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
              <BookOpen className="w-4 h-4 shrink-0" />
            </div>
            <div className="truncate">
              <h1 className={`font-bold text-xs tracking-wide uppercase truncate ${darkMode ? 'text-indigo-300' : 'text-indigo-900'}`}>
                {courseData?.title || "Learning Hub"}
              </h1>
              <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Interactive Curriculum</p>
            </div>
          </div>
        )}

        {isCollapsed && (
          <div className="mx-auto">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
              <BookOpen className="w-4 h-4 shrink-0" />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-1">
          {/* Desktop Minimize / Expand Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand Sidebar" : "Minimize Sidebar"}
            className={`hidden lg:flex p-1.5 rounded-lg transition-colors ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className={`lg:hidden p-1.5 rounded-lg transition-colors ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <>
          {/* Subject Swapper Selector */}
          <div className={`p-3.5 border-b ${darkMode ? 'border-slate-800/80 bg-slate-900/20' : 'border-slate-200 bg-slate-50/30'}`}>
            <label className={`text-[10px] font-semibold uppercase tracking-wider block mb-1.5 px-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Select Subject Domain
            </label>
            <div className="relative">
              <select
                value={currentSubjectSlug}
                onChange={(e) => navigate(`/courses/${e.target.value}`)}
                className={`w-full appearance-none rounded-xl px-3 py-2 text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${darkMode
                    ? 'bg-slate-900 text-indigo-300 border border-slate-800 hover:border-slate-700'
                    : 'bg-white text-indigo-900 border border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
              >
                {subjectCourses.map((subject) => (
                  <option key={subject.slug} value={subject.slug}>
                    {subject.name}
                  </option>
                ))}
              </select>
              <ChevronDown className={`w-3.5 h-3.5 absolute right-3 top-3 pointer-events-none ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
            </div>
          </div>

          {/* Live Search Input */}
          <div className={`p-3.5 border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-200'}`}>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lessons & topics..."
                className={`w-full rounded-xl pl-9 pr-4 py-2 text-xs transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${darkMode
                    ? 'bg-slate-900 text-slate-200 border border-slate-800 placeholder-slate-500'
                    : 'bg-slate-50 text-slate-800 border border-slate-200 placeholder-slate-400'
                  }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* Chapters & Curriculum Tree List */}
      <div className={`flex-1 overflow-y-auto p-3.5 space-y-3 custom-scrollbar ${isCollapsed ? 'items-center flex flex-col' : ''}`}>
        {isCollapsed ? (
          <div className="py-4 text-center">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block [writing-mode:vertical-lr] mx-auto rotate-180">
              Curriculum Minimized
            </span>
          </div>
        ) : filteredChapters.length === 0 ? (
          <div className="text-center py-8 px-4">
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>No curriculum modules found matching &quot;{searchQuery}&quot;</p>
          </div>
        ) : (
          filteredChapters.map((chapter) => {
            const isChExp = searchQuery ? true : expandedChapters[chapter.id];
            return (
              <div key={chapter.id} className="space-y-1">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className={`w-full flex items-center justify-between text-xs font-semibold py-2 px-2.5 rounded-xl transition-all ${darkMode
                      ? 'text-slate-200 hover:bg-slate-900/80'
                      : 'text-slate-800 hover:bg-slate-100/80'
                    }`}
                >
                  <span className="truncate text-left flex items-center space-x-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`}></span>
                    <span className="truncate">{chapter.title}</span>
                  </span>
                  {isChExp ? <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
                </button>

                {isChExp && (
                  <div className={`pl-2.5 space-y-1 border-l ml-3 my-1 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    {chapter.topics.map((topic) => {
                      const isTopExp = searchQuery ? true : expandedTopics[topic.id];
                      return (
                        <div key={topic.id} className="space-y-1">
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className={`w-full flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg transition-colors ${darkMode
                                ? 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                              }`}
                          >
                            <span className="truncate text-left font-medium">{topic.title}</span>
                            {isTopExp ? <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" /> : <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />}
                          </button>

                          {isTopExp && (
                            <div className={`pl-2.5 space-y-1 border-l ml-2 my-1 ${darkMode ? 'border-slate-800/80' : 'border-slate-200/80'}`}>
                              {topic.subtopics.map((sub) => {
                                const isSelected = currentSubtopic?.id === sub.id;
                                return (
                                  <button
                                    key={sub.id}
                                    onClick={() => {
                                      setCurrentSubtopic(sub);
                                      setMobileOpen(false);
                                    }}
                                    className={`w-full flex items-center space-x-2.5 text-xs py-2 px-2.5 rounded-xl transition-all text-left ${isSelected
                                        ? darkMode
                                          ? 'bg-indigo-600/20 text-indigo-400 font-semibold border border-indigo-500/30 shadow-sm'
                                          : 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200 shadow-sm'
                                        : darkMode
                                          ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                                      }`}
                                  >
                                    {sub.completed ? (
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    ) : (
                                      <Circle className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-indigo-400' : darkMode ? 'text-slate-600' : 'text-slate-300'}`} />
                                    )}
                                    <span className="truncate">{sub.title}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Branding or Progress Summary */}
      {!isCollapsed && (
        <div className={`p-3.5 border-t text-center ${darkMode ? 'border-slate-800/80 bg-slate-900/30' : 'border-slate-200 bg-slate-50/50'}`}>
          <div className="flex items-center justify-center space-x-1.5 text-[11px] font-medium text-indigo-400">
            <Sparkles className="w-3 h-3" />
            <span>Keep pushing your limits</span>
          </div>
        </div>
      )}
    </aside>
  );
}