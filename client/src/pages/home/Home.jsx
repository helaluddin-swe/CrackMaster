import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import HeroSection from './HeroSection';
import CompanySection from './comapany/CompanySection.jsx';
import FeatureSection from './feature/FeatureSection.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen overflow-x-hidden ${darkMode ? 'bg-slate-800' : 'bg-white'} font-sans`}>
      <Helmet>
        <title>Home | QSpace - Smart BCS Prep</title>
      </Helmet>

      <Navbar />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CompanySection />
        <FeatureSection />
      </main>
    </div>
  );
};

export default Home;