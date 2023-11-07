import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)

const AnimationComponent = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Amit Dattatray Kumbhar';

  useEffect(() => {
    const animateText = () => {
      const animation = gsap.timeline();

      for (let i = 0; i < textToType.length; i++) {
        animation.to('.sd', {
          duration: 0.05,
          text: textToType.slice(0, i + 1)+'|',
          ease: 'power1.out',
          delay: 0.05,
        });
      }
    };

    // Ensure the element is mounted before running the animation
    if (document.getElementById('typed-text')) {
      animateText();
    }
  }, [typedText, textToType]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-3xl font-bold text-white" id="typed-text">
        <h1 className='sd text-5xl'></h1>
      </div>
    </div>
  );
};

export default AnimationComponent;
