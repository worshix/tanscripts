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
        { opacity: 0, y: -20 }, 
        {
          opacity: 1,
          y: 0,
          duration: .4,
          delay:.2,
          scrollTrigger: {
            trigger: slide,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub:true, //smoothens animation
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
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
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
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
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
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
            delay:.2,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
          }
        }
      );
    });
  });

  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const scaleXCenter = document.querySelectorAll('.scale-x-center');
    scaleXCenter.forEach((item) => {
      gsap.fromTo(item,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 2,
          ease: "power2.out", 
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
          }
        }
      );
    });
  });

  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const scaleXLeft = document.querySelectorAll('.scale-x-left');
    scaleXLeft.forEach((item) => {
      gsap.set(item, {transformOrigin:'left center', scale:0})
      gsap.to(item,
        {
          scale: 1, duration: 2,
          ease: "power2.out", 
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
          }
        }
      );
    });
  });

  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const spinBtn = document.querySelectorAll('.spin-btn');
    spinBtn.forEach((item) => {
      gsap.set(item, {scale:0, transformOrigin:'50% 50%'})
      gsap.to(item,
        {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
          },
          scale:1,
          rotation:360,
          duration:1.2,
          ease:'elastic.out'
        }
      );
    });
  });

  return null; // This component doesn't render anything visible
};

export default BasicAnimations;