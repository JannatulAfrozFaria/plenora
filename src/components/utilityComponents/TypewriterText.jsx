import React, { useState, useEffect } from 'react';

// Custom hook for the typewriter effect
const useTypewriter = (text, speed = 150) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [text, speed]);

  return displayedText;
};

// const useTypewriter = (text, speed = 150) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let i = 0;

//     // Clear text to avoid the second letter disappearing
//     setDisplayedText(""); 

//     const typingEffect = setInterval(() => {
//       if (i < text.length) {
//         setDisplayedText((prev) => prev + text.charAt(i));
//         i++;
//       } else {
//         clearInterval(typingEffect);
//       }
//     }, speed);

//     return () => clearInterval(typingEffect); // Cleanup interval
//   }, [text, speed]);

//   return displayedText;
// };

const TypewriterText = ({ text }) => {
  const typedText = useTypewriter(text, 100); // You can adjust the speed here
  return <h1 className='text-4xl md:text-8xl banner-title'>{typedText}</h1>; // Display the typing text
};

// const TypewriterText = ({ text }) => {
//   const typedText = useTypewriter(text, 100); // Adjust speed if needed

//   return (
//     <h1 className='text-4xl md:text-8xl banner-title'>
//       {typedText}
//     </h1>
//   );
// };


export default TypewriterText;
