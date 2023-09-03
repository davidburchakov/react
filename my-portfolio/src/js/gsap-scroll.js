import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { DRACOLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const ScrollToPlugin = window.ScrollToPlugin;
const CSSPlugin = window.CSSPlugin;
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,CSSPlugin)

const tlProjects = gsap.timeline({
    scrollTrigger: {
        trigger: ".pile",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=3000",
        scrub: 0.5,
        markers: true,
    }
});

tlProjects.addLabel('card1');
tlProjects.to('.bird',{
    // css: {zIndex: 12,opacity: 1, xPercent: 0},
    xPercent: 0,
    opacity: 1
})

tlProjects.from(".supervision",{
    // css: {zIndex: 11, opacity: 0, xPercent: 75},
    xPercent: 75,
    opacity: 0,

})
tlProjects.addLabel('card2');

tlProjects.to(".bird", {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5   
},  "-=0.3");

tlProjects.to(".supervision", {
    // css: {zIndex: 11 ,opacity: 1, xPercent: 0}
    xPercent: 0,
    opacity: 1
})

tlProjects.from('.compiler',{
    xPercent: 75,
    opacity: 0
})
tlProjects.addLabel("card3")

tlProjects.to(".supervision", {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6
}, "-=0.3");

tlProjects.to(".compiler", {
    xPercent: 0,
    opacity: 1
})