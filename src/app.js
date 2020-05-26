import './scss/style.scss';
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import gsap from "gsap";  // Also works with TweenLite and TimelineLite: import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
ScrollMagicPluginGsap(ScrollMagic, gsap);
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

// init controller
const controller = new ScrollMagic.Controller();

const animateIn = gsap.timeline();

animateIn
    .fromTo('.work-test', 1, { opacity: 0, y: 100}, {y: 0, opacity: 1})
    .fromTo('.rj', 1, { opacity: 0, y: 100}, {y: 0, opacity: 1});

// // build scene
const scene = new ScrollMagic.Scene({
  triggerElement: "#section2",
})
  .setTween(animateIn) // trigger a TweenMax.to tween
  //.addIndicators() // add indicators (requires plugin), need to look further into having this work with plugin wrapper
  .addTo(controller);