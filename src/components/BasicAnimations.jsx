'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const BasicAnimations = () => {
  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const SlideInTop = document.querySelectorAll('.slide-in-top');
    SlideInTop.forEach((slide) => {
      gsap.fromTo(slide, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: .4,
          scrollTrigger: {
            trigger: slide,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  });
  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const SlideInLeft = document.querySelectorAll('.slide-in-left');
    SlideInLeft.forEach((slide) => {
      gsap.fromTo(slide, 
        { opacity: 0, x: -50 }, 
        {
          opacity: 1,
          x: 0,
          duration: .6,
          scrollTrigger: {
            trigger: slide,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  });
  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const SlideInRight = document.querySelectorAll('.slide-in-right');
    SlideInRight.forEach((slide) => {
      gsap.fromTo(slide, 
        { opacity: 0, x: 50 }, 
        {
          opacity: 1,
          x: 0,
          duration: .6,
          scrollTrigger: {
            trigger: slide,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  });

  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const SlideInBottom = document.querySelectorAll('.slide-in-bottom');
    SlideInBottom.forEach((slide) => {
      gsap.fromTo(slide, 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1,
          y: 0,
          duration: .6,
          scrollTrigger: {
            trigger: slide,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  });

  return null; // This component doesn't render anything visible
};

export default BasicAnimations;
