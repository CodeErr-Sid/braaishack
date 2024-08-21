// import React, { useEffect, useState } from 'react';
// import './Cursor.css'; 

// const CursorFollower = () => {
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const [cursorX, setCursorX] = useState(0);
//   const [cursorY, setCursorY] = useState(0);
//   const [dotX, setDotX] = useState(0);
//   const [dotY, setDotY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouseX(e.pageX);
//       setMouseY(e.pageY);
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     const updateCursor = () => {
//       setCursorX(prevX => prevX + (mouseX - prevX) * 0.1);
//       setCursorY(prevY => prevY + (mouseY - prevY) * 0.1);
//       setDotX(prevX => prevX + (mouseX - prevX) * 0.15);
//       setDotY(prevY => prevY + (mouseY - prevY) * 0.15);
//     };

//     const interval = requestAnimationFrame(function update() {
//       updateCursor();
//       requestAnimationFrame(update);
//     });

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(interval);
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <>
//       <span
//         className="cursorFollowerDot"
//         style={{ left: dotX, top: dotY }}
//       ></span>
//       <span
//         className="cursorFollower"
//         style={{ left: cursorX, top: cursorY }}
//       ></span>
//     </>
//   );
// };

// export default CursorFollower;
