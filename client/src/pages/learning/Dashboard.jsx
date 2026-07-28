import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainContentView from './MainContentView';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RighSidebar'; // Assuming this spelling matches your file
import { useAppContext } from '../../context/AppContext';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';

export default function LearningDashboard() {
  const { slug } = useParams();
  const { darkMode } = useTheme();
  const { backendUrl } = useAppContext();
  const navigate = useNavigate();
  const activeSlug = slug || 'full-stack-engineering'; // Fallback if no slug provided

  const [courseData, setCourseData] = useState(null);
  const [currentSubtopic, setCurrentSubtopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileLeftOpen, setMobileLeftOpen] = useState(false);
  const [mobileRightOpen, setMobileRightOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all subtopics for easy previous/next navigation
  const allSubtopics = useMemo(() => {
    if (!courseData?.chapters) return [];
    return courseData.chapters.flatMap(chapter => 
      chapter.topics.flatMap(topic => topic.subtopics)
    );
  }, [courseData]);

  // Compute navigation states accurately
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allSubtopics.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentSubtopic(allSubtopics[newIndex]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentSubtopic(allSubtopics[newIndex]);
    }
  };

  // Fetch curriculum from MongoDB via Express API
  useEffect(() => {
    async function fetchCourseFromDB() {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(`${backendUrl}/api/v1/courses/${activeSlug}`);
        
        // 1. Axios automatically parses JSON and puts it in `response.data`
        const result = response.data;

        // 2. Safety check: Did the server send an HTML error page (like a 404)?
        if (typeof result === 'string' && result.trim().startsWith('<')) {
          throw new Error('Received an HTML page instead of JSON. Check your backend URL or proxy.');
        }

        // 3. Axios throws an error for 4xx/5xx status codes automatically
        if (!result.success) {
          throw new Error(result.message || 'Failed to fetch course');
        }

        const fetchedCourse = result.data;
        setCourseData(fetchedCourse);
        
        // Initialize the first subtopic safely
        if (fetchedCourse?.chapters?.[0]?.topics?.[0]?.subtopics?.[0]) {
          setCurrentSubtopic(fetchedCourse.chapters[0].topics[0].subtopics[0]);
          setCurrentIndex(0);
        }
      } catch (err) {
        console.error("Database fetch error:", err);
        const errorMessage = err.response?.data?.message || err.message || "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchCourseFromDB();
  }, [activeSlug, backendUrl]); 

  if (loading) {
    return (
      <div className={`flex h-screen items-center justify-center text-xs ${darkMode ? 'bg-slate-950 text-indigo-400' : 'bg-slate-50 text-indigo-600'}`}>
        Loading {activeSlug} curriculum from database...
      </div>
    );
  }

  if (error || !courseData || !currentSubtopic) {
    return (
      <div className={`flex h-screen items-center justify-center text-sm ${darkMode ? 'bg-slate-950 text-red-400' : 'bg-slate-50 text-red-600'}`}>
        {error ? `Error: ${error}` : "Course content not found."}
      </div>
    );
  }

  return (
    // The wrapper acts as a fixed screen overlay, hiding overflowing content so only the center scrolls
    <div className={`flex h-screen overflow-hidden font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      <LeftSidebar
        courseData={courseData}
        currentSubjectSlug={activeSlug}
        currentSubtopic={currentSubtopic}
        setCurrentSubtopic={(subtopic) => {
          setCurrentSubtopic(subtopic);
          // Sync currentIndex when user clicks a subtopic in the sidebar
          const newIndex = allSubtopics.findIndex(s => s._id === subtopic._id || s.id === subtopic.id);
          if (newIndex !== -1) setCurrentIndex(newIndex);
        }}
        mobileOpen={mobileLeftOpen}
        setMobileOpen={setMobileLeftOpen}
      />

      <MainContentView
        currentSubtopic={currentSubtopic}
        currentSubjectSlug={activeSlug}
        isFocusMode={isFocusMode}
        setIsFocusMode={setIsFocusMode}
        isPlayingAudio={isPlayingAudio}
        setIsPlayingAudio={setIsPlayingAudio}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        isBookmarked={isBookmarked}
        setIsBookmarked={setIsBookmarked}
        setMobileLeftOpen={setMobileLeftOpen}
        setMobileRightOpen={setMobileRightOpen}
        onNext={handleNext}
        onPrev={handlePrevious}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />

      <RightSidebar
        currentSubtopic={currentSubtopic}
        courseData={courseData}
        isFocusMode={isFocusMode}
        mobileRightOpen={mobileRightOpen}
        setMobileRightOpen={setMobileRightOpen}
        setCourseData={setCourseData}
      />
    </div>
  );
}