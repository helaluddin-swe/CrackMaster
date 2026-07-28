import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // If using React Router

const AnalyticsView = () => {
  const [stats, setStats] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.pathname;

    // Update our array state
    setStats(prev => {
      const exists = prev.find(p => p.url === currentUrl);
      if (exists) {
        return prev.map(p => p.url === currentUrl ? { ...p, views: p.views + 1 } : p);
      }
      return [...prev, { url: currentUrl, views: 1 }];
    });
    
  }, [location.pathname]); // Runs every time the URL changes

  return (
    <div>
      <h3>Page View Stats</h3>
      {stats.map(page => (
        <p key={page.url}>{page.url}: {page.views} views</p>
      ))}
    </div>
  );
};
export default AnalyticsView