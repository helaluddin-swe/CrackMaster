import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Components & Layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages - General
import Home from './pages/home/Home'
import BcsQuestion from './pages/bcs/components/BcsQuestion'
import ExamQCard from './pages/previousExamQ/ExamQCard'
// import ModelTestView from './pages/ModelTest/pages/ModelTestView'
// import SubjectModelTest from './pages/ModelTest/pages/SubjectBasedTest'

import BlogDetails from './pages/blog/BlogDetails'
import BlogList from './pages/blog/BlogList'
import ResultSummary from './pages/analyzer/ResultSummary'

import Dashboard from './pages/dashboard/Dashboard'
import Article from './components/navbar/Article'

import QuestionBankPage from './pages/mcqHub/QuestionBank'
import ArticleMenu from './pages/article/ArticleMenu'
import BcsModelTest from './pages/modelTestHub/BcsModelTest'
import PrevExamQuestion from "./pages/previousExamQ/PrevExamQuestion"
import DailyTest from './pages/modelTestHub/DailyTest'
import WeeklyTest from './pages/modelTestHub/WeeklyTest'
import WrittenHub from './pages/writtenHub/WrittenHUb'
import DetailsArticle from './pages/writtenHub/DetailsArticle'

import McqList from './components/McqList'
import LeaderBoard from './pages/leaderboard/LeaderBoard'

// Auth Pages
import LoginPage from './pages/auth/LoginPage'
import SignUpPage from './pages/auth/SignUpPage'

// Protected Route & Packages
import ProtectedRoute from './context/ProtectedRoute'
import Pakages from './components/Pakages'

// Mock / Asset Data
// import { blog_details_data } from './assets/assest'
import LearningDashboard from './pages/learning/Dashboard'
import { useTheme } from './context/ThemeContext'
import BCSQuestionList from './pages/bcs/components/BcsQuestionList'
import DashboardPreviousQuestions from './pages/previousExamQ/DashboardPreviousQuestions'
import SpecificExamQuestions from './pages/previousExamQ/SpecificExamQuestions'

const App = () => {
  const {darkMode}=useTheme()
  const location = useLocation();

  const hideNavbarPaths = ['/login', '/signup','/dashboard'];
  
  

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className={`flex flex-col min-h-screen justify-between transition-colors duration-300 ${
  darkMode 
    ? "bg-[#020617] text-slate-100" 
    : "bg-slate-50 text-slate-900"
}`}>
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Conditionally Render Global Navigation Header */}
      {!shouldHideNavbar && <Navbar />}

      <main className={`grow ${!shouldHideNavbar ? 'pt-16' : ''}`}>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />

          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/:slug" element={<LearningDashboard />} />
            {/* <Route path="/subject-model-test" element={<SubjectModelTest />} />
            <Route path="/subject-model-test/:id" element={<SubjectModelTest />} /> */}
            
            {/* Model Tests & Question Hubs */}
            {/* <Route path="/model-test-live/:id/:slug" element={<ModelTestView />} /> */}
            <Route path="/question-list/:id/:title" element={<BcsQuestion />} />
            
            <Route path="/mcq-hub" element={<QuestionBankPage />} />
            <Route path="/test-hub" element={<BcsModelTest />} />
            <Route path="/daily-test" element={<DailyTest />} />
            <Route path="/weekly-test" element={<WeeklyTest />} />
            

            {/* Previous Exam Paths */}
            <Route path="/previous-exam-questions" element={<DashboardPreviousQuestions />} />
            <Route path="/previous-exam" element={<PrevExamQuestion />} />
            <Route path="/previous-exam/:id" element={<ExamQCard />} />
            <Route path="/pq-list" element={<ExamQCard />} />
            <Route path='/exams/:examName' element={<SpecificExamQuestions/>}/>

            {/* Written & Article Hubs */}
            <Route path="/written-hub" element={<WrittenHub />} />
            <Route path="/written/:id" element={<DetailsArticle />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article-hub" element={<ArticleMenu />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />

            {/* Analytics & Misc */}
            <Route path="/activity" element={<ResultSummary />} />
            <Route path="/leader" element={<LeaderBoard />} />
            <Route path="/pakages" element={<Pakages />} />
          </Route>

          {/* Fallback Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      {/* {!shouldHideNavbar && <Footer />} */}
    </div>
  )
}

export default App;