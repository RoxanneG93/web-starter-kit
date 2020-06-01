import './scss/style.scss';

import gsap from "gsap";  // Also works with TweenLite and TimelineLite: import { TweenMax, TimelineMax } from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateIn = gsap.timeline({
   // yes, we can add it to an entire timeline!
   scrollTrigger: {
    trigger: "#section2",
   // markers: true,
    //pin: true,   // pin the trigger element while active
    start: "bottom center", // when the bottom of the trigger hits the center of the viewport
    end: "+=200", // end after scrolling 200px beyond the start
  }
});

animateIn.fromTo('.rj', 1, { opacity: 0, y: 100}, {y: 0, opacity: 1});

