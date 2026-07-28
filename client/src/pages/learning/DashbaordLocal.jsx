import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainContentView from './MainContentView';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RighSidebar';
import { dummyCoursesDatabase } from './data';


// Local Dummy JSON Dataset


export default function LearningDashboardLocal() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const activeSlug = slug

  const [courseData, setCourseData] = useState(null);
  const [currentSubtopic, setCurrentSubtopic] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileLeftOpen, setMobileLeftOpen] = useState(false);
  const [mobileRightOpen, setMobileRightOpen] = useState(false);

  // Load curriculum from local JSON database based on activeSlug
  const allSubtopics = useMemo(() => {
    if (!courseData?.chapters) return [];
    return courseData.chapters.flatMap(chapter => 
      chapter.topics.flatMap(topic => topic.subtopics)
    );
  }, [courseData]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Compute navigation states accurately
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allSubtopics.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  

  useEffect(() => {
    function loadCourseFromJSON() {
      setLoading(true);
      try {
        // Find data from local database or default to full-stack-engineering if slug doesn't exist
        const selectedCourse = dummyCoursesDatabase[activeSlug] || dummyCoursesDatabase['full-stack-engineering'];
        
        setCourseData(selectedCourse);
        if (selectedCourse.chapters?.[0]?.topics?.[0]?.subtopics?.[0]) {
          setCurrentSubtopic(selectedCourse.chapters[0].topics[0].subtopics[0]);
        }
      } catch (err) {
        console.error("Failed to load local dummy course data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadCourseFromJSON();
  }, [activeSlug]);


  if (loading || !courseData || !currentSubtopic) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-indigo-400 text-xs">
        Loading {activeSlug} curriculum from local dummy JSON...
      </div>
    );
  }

  return (
    <div className="flex h-screen mt-5 bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <LeftSidebar
        courseData={courseData}
        currentSubjectSlug={activeSlug}
        currentSubtopic={currentSubtopic}
        setCurrentSubtopic={setCurrentSubtopic}
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