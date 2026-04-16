import React, { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = element.scrollHeight - element.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setWidth(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="reading-progress-bar">
      <div 
        className="reading-progress-fill" 
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;