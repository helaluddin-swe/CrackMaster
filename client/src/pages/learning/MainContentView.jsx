import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Bookmark, MessageSquare, Highlighter as HighlighterIcon, Eraser
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import NextPagination from './NextPagination';
import Mcq from './Mcq';
import Highlighter from 'web-highlighter';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';
import ContentHeader from './ContentHeader';
import { useLanguage } from '../../context/LanguageContext';

function MainContentView({
  currentSubtopic,
  currentSubjectSlug,
  isFocusMode,
  setIsFocusMode,
  isPlayingAudio,
  setIsPlayingAudio,
  isLiked,
  setIsLiked,
  isBookmarked,
  setIsBookmarked,
  setMobileLeftOpen,
  setMobileRightOpen,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext
}) {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const { darkMode } = useTheme();
  const { backendUrl } = useAppContext();
  const { activeLanguage, resolve } = useLanguage();

  // Localized fields
  const title = resolve(currentSubtopic?.title);
  const content = resolve(currentSubtopic?.content);
  const duration = currentSubtopic?.duration || '5 min read';

  // Unified Safe ID resolution for MongoDB
  const subtopicId = currentSubtopic?._id || currentSubtopic?.id;

  // Highlighting State
  const contentRef = useRef(null);
  const highlighterRef = useRef(null);
  const [highlightMenu, setHighlightMenu] = useState(null);
  const [hasActiveHighlights, setHasActiveHighlights] = useState(false);

  const [comments, setComments] = useState([
    { id: 1, user: 'DevUser', text: 'Great detailed explanation!' }
  ]);
  const [newComment, setNewComment] = useState('');

  // ==========================================
  // HIGHLIGHTER INITIALIZATION & DATA FETCHING
  // ==========================================
  useEffect(() => {
    setShareOpen(false);
    setNewComment('');
    setHighlightMenu(null);
    setHasActiveHighlights(false);

    if (!contentRef.current || !subtopicId) return;

    if (highlighterRef.current) {
      highlighterRef.current.dispose();
    }

    highlighterRef.current = new Highlighter({
      $root: contentRef.current,
      style: {
        className: 'custom-lesson-highlight'
      }
    });

    highlighterRef.current.on(Highlighter.event.CREATE, ({ sources }) => {
      setTimeout(() => {
        sources.forEach((source) => {
          if (source.extra?.color) {
            const spans = document.querySelectorAll(
              `[data-highlight-id="${source.id}"]`
            );
            spans.forEach((span) => {
              span.style.backgroundColor = source.extra.color;
              span.style.color = '#1e293b';
            });
          }
        });
      }, 0);
    });

    const fetchSavedHighlights = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/v1/highlights/${subtopicId}`
        );
        const result = res.data;

        if (result.success && result.data && result.data.length > 0) {
          setHasActiveHighlights(true);

          result.data.forEach((hs) => {
            if (
              !hs.text ||
              hs.text.trim() === '' ||
              hs.startMeta.textOffset === hs.endMeta.textOffset
            ) {
              return;
            }
            try {
              highlighterRef.current.fromStore(
                hs.startMeta,
                hs.endMeta,
                hs.text,
                hs.id,
                hs.extra
              );
            } catch (err) {
              console.warn('Could not apply saved highlight to DOM:', err);
            }
          });
        }
      } catch (err) {
        console.error('Failed to load highlights from DB:', err);
      }
    };

    // Delay ensures React finishes painting dangerouslySetInnerHTML
    const timer = setTimeout(() => {
      fetchSavedHighlights();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (highlighterRef.current) {
        highlighterRef.current.dispose();
      }
    };
  }, [currentSubtopic, subtopicId, backendUrl, activeLanguage]); // re-init when language changes

  // Click outside to close highlight menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (highlightMenu && !e.target.closest('#highlight-menu')) {
        setHighlightMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [highlightMenu]);

  // ==========================================
  // EVENT HANDLERS
  // ==========================================
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${title}\n\n${contentRef.current?.innerText || content}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: `Check out this lesson on ${currentSubjectSlug}`,
          url: window.location.href
        })
        .catch(console.warn);
    } else {
      setShareOpen(!shareOpen);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), user: 'You', text: newComment }
    ]);
    setNewComment('');
  };

  // --- Highlighting Logic ---
  const handleTextSelection = () => {
    setTimeout(() => {
      const selection = window.getSelection();

      if (
        selection &&
        selection.rangeCount > 0 &&
        selection.toString().trim().length > 0 &&
        !selection.isCollapsed
      ) {
        const range = selection.getRangeAt(0).cloneRange();

        if (
          contentRef.current &&
          contentRef.current.contains(range.commonAncestorContainer)
        ) {
          const rect = range.getBoundingClientRect();

          setHighlightMenu({
            top: rect.top - 45,
            left: rect.left + rect.width / 2,
            range
          });
        }
      } else {
        if (!document.activeElement?.closest('#highlight-menu')) {
          setHighlightMenu(null);
        }
      }
    }, 50);
  };

  const applyHighlight = async (color) => {
    if (!highlighterRef.current || !subtopicId || !highlightMenu?.range) return;

    try {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(highlightMenu.range);

      if (selection.isCollapsed) {
        console.warn(
          'Could not restore text selection. DOM might have changed.'
        );
        setHighlightMenu(null);
        return;
      }

      const activeRange = selection.getRangeAt(0);
      let sourceData = highlighterRef.current.fromRange(activeRange);

      if (Array.isArray(sourceData)) {
        sourceData = sourceData[0];
      }

      if (!sourceData || !sourceData.text || sourceData.text.trim() === '') {
        console.warn('Ignored empty highlight selection.');
        window.getSelection().removeAllRanges();
        setHighlightMenu(null);
        return;
      }

      sourceData.extra = { color };
      const spans = document.querySelectorAll(
        `[data-highlight-id="${sourceData.id}"]`
      );
      spans.forEach((span) => {
        span.style.backgroundColor = color;
        span.style.color = '#1e293b';
      });

      window.getSelection().removeAllRanges();
      setHighlightMenu(null);
      setHasActiveHighlights(true);

      await axios.post(`${backendUrl}/api/v1/highlights`, {
        subtopicId: subtopicId,
        highlightData: sourceData
      });
    } catch (err) {
      console.error('Failed to apply or save highlight:', err);
    }
  };

  const clearHighlights = async () => {
    if (!subtopicId) return;
    if (window.confirm('Clear all highlights for this lesson?')) {
      if (highlighterRef.current) {
        highlighterRef.current.removeAll();
      }
      setHasActiveHighlights(false);

      try {
        await axios.delete(`${backendUrl}/api/v1/highlights/${subtopicId}`);
      } catch (err) {
        console.error('Failed to delete highlights from database', err);
      }
    }
  };

  return (
    <main
      className={`flex-1 flex flex-col mt-4 min-w-0 ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'
        } relative`}
    >
      {/* Top Navbar */}
      <ContentHeader
        copied={copied}
        handleCopy={handleCopy}
        handleShare={handleShare}
        shareOpen={shareOpen}
        setShareOpen={setShareOpen}   // ← add this
        currentSubtopic={currentSubtopic}
        setMobileLeftOpen={setMobileLeftOpen}
        isFocusMode={isFocusMode}
        setIsFocusMode={setIsFocusMode}
      />

      {/* Highlight Floating Menu */}
      {highlightMenu && (
        <div
          id="highlight-menu"
          onMouseDown={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
          onPointerDown={(e) => e.preventDefault()}
          className={`fixed z-50 flex items-center gap-2 px-3 py-2 rounded-lg shadow-xl border transform -translate-x-1/2 ${darkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
            }`}
          style={{
            top: `${highlightMenu.top}px`,
            left: `${highlightMenu.left}px`
          }}
        >
          <HighlighterIcon
            className={`w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
          />
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
          {['#fef08a', '#bbf7d0', '#fbcfe8', '#bfdbfe'].map((color) => (
            <button
              key={color}
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.preventDefault()}
              onClick={() => applyHighlight(color)}
              className="w-5 h-5 rounded-full border border-black/10 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title="Highlight"
            />
          ))}
        </div>
      )}

      {/* Main Content Body */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 max-w-4xl mx-auto w-full custom-scrollbar space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-xs">
              <span
                className={`px-2 py-0.5 rounded font-medium ${darkMode
                    ? 'bg-indigo-950 border border-indigo-800 text-indigo-300'
                    : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                  }`}
              >
                {duration}
              </span>
              <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>
                •
              </span>
              <span
                className={`capitalize font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
              >
                {currentSubjectSlug}
              </span>
            </div>

            {hasActiveHighlights && (
              <button
                onClick={clearHighlights}
                className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-md transition-colors ${darkMode
                    ? 'text-rose-400 hover:bg-rose-500/10'
                    : 'text-rose-600 hover:bg-rose-50'
                  }`}
              >
                <Eraser className="w-3.5 h-3.5" /> Clear Highlights
              </button>
            )}
          </div>

          {/* Localized Title */}
          <h1
            className={`text-2xl md:text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'
              }`}
          >
            {title || 'Untitled Lesson'}
          </h1>
        </div>

        <hr
          className={
            darkMode ? 'border-slate-800 my-4' : 'border-slate-200 my-4'
          }
        />

        {/* Localized HTML Content */}
        <div
          ref={contentRef}
          onMouseUp={handleTextSelection}
          onTouchEnd={handleTextSelection}
          onKeyUp={handleTextSelection}
          className={`prose max-w-none leading-relaxed space-y-4 text-sm md:text-base selection:bg-indigo-200 selection:text-indigo-900 ${darkMode ? 'prose-invert text-slate-300' : 'text-slate-700'
            }`}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Interactive MCQs */}
        <Mcq currentSubtopic={currentSubtopic} />

        {/* Engagement Controls */}
        <div
          className={`pt-6 border-t flex items-center justify-between ${darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-1.5 text-xs px-3 py-2 rounded-lg border transition-colors ${isLiked
                  ? darkMode
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    : 'bg-rose-50 border-rose-200 text-rose-600'
                  : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
                }`}
            >
              <Heart
                className={`w-4 h-4 ${isLiked ? 'fill-rose-400 text-rose-400' : ''
                  }`}
              />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-1.5 text-xs px-3 py-2 rounded-lg border transition-colors ${isBookmarked
                  ? darkMode
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    : 'bg-amber-50 border-amber-200 text-amber-600'
                  : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
                }`}
            >
              <Bookmark
                className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''
                  }`}
              />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>
          </div>
        </div>

        {/* Pagination Controls */}
        <NextPagination
          onPrevious={onPrevious}
          onNext={onNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />

        {/* Comments Section */}
        <div className="pt-6 space-y-4">
          <h3
            className={`text-sm font-semibold flex items-center space-x-2 ${darkMode ? 'text-slate-200' : 'text-slate-900'
              }`}
          >
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            <span>Discussion ({comments.length})</span>
          </h3>
          <form onSubmit={handleAddComment} className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Ask a question..."
              className={`flex-1 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 ${darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200 placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 shadow-sm'
                }`}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded-lg font-medium shadow-sm transition-colors"
            >
              Post
            </button>
          </form>
          <div className="space-y-3 pt-2">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className={`p-3 rounded-xl space-y-1 border ${darkMode
                    ? 'bg-slate-900/40 border-slate-800/80'
                    : 'bg-white border-slate-200 shadow-sm'
                  }`}
              >
                <span className="font-semibold text-xs text-indigo-500">
                  {comment.user}
                </span>
                <p
                  className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                >
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContentView;