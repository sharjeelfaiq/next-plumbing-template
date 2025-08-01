import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

export const smoothScroll = (target: string) => {
  const element = document.querySelector(target);
  if (!element) return;

  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: element,
      offsetY: 0
    },
    ease: "power3.inOut"
  });
}; 