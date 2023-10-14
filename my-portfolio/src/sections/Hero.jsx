import 'css/hero.css';
import reading from 'static/img/reading-book.png';
import Models from 'components/Models.jsx';
import React, { useEffect } from 'react';
import { Suspense } from 'react'

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.fromTo("nav", { y: "-100%" }, { y: "0%" })
        .fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1.3 })
        .fromTo(".subtitle1", { opacity: 0 }, { opacity: 1, duration: 1.3 })
        .fromTo(".subtitle2", { opacity: 0 }, { opacity: 1, duration: 1.3 })
        .fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1.3 })
    });

    return () => {
      ctx.revert();
    };
  }, []);

    return (
        <section className="section hero">
        <div className="title-container">
          <h1 className="title">Hi, I'm David</h1>
          <p className="subtitle1">I'm a student enthusiast</p>
          <p className="subtitle2">Web and Software developer</p>
        </div>

        <div className="avatar-container">
          <img src={ reading } alt="avatar" />
        </div>
        <Suspense>
          <Models />
        </Suspense>
        {/* <div class="animated-avatar-container">
          <img src="static/img/reading-book.png" alt="avatar">
          <video src="static/videos/splash-ink.mp4" autoplay muted loop></video>
        </div> */}
        {/* onClick="window.delayedTransition()" */}

      </section>
    );
}