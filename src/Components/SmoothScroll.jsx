import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './SmoothScroll.css';

const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    let timer = null;

    const handleWheel = event => {
        event.preventDefault();
        const scrollDistance = window.pageYOffset + event.deltaY * 2.2;

        gsap.to(window, {
            scrollTo: scrollDistance,
            duration: 0.4,
            ease: 'power2.out'
        });
    };

    const handleScroll = () => {
        document.body.classList.add('scrolling');

        clearTimeout(timer);
        timer = setTimeout(() => {
            document.body.classList.remove('scrolling');
        }, 1000);  // Reduzindo o tempo para 1 segundo
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    };
}, []);


    return null;
};

export default SmoothScroll;
