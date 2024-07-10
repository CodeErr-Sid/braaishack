// CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default Cursor;
