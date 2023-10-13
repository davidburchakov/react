import "css/more.css";
import React, { useEffect, useRef } from 'react';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger)

function More() {
  const componentRef = useRef(null);
  const introRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.to(videoContainerRef.current, {
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top top",
          end: "bottom+=12000px top",
          // markers: true,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const scrollpos = self.progress * 30;
            let delay = 1;
            delay += (scrollpos - delay) * .2;
            videoRef.current.currentTime = delay;
          },
        },
      });

      // Text Animation
      const textAnim = gsap.fromTo(textRef.current, { opacity: 1 }, { opacity: 0, duration: 3 });

      ScrollTrigger.create({
        animation: textAnim,
        trigger: introRef.current,
        start: "top top",
        end: "bottom-=10000px top",
        scrub: true,
      });
      return () => {
        animation.kill();
        textAnim.kill();
      }
    }, componentRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="App" ref={componentRef}>
      <section className="section intro" ref={introRef}>
        <div className="video-container" ref={videoContainerRef}>
          <h1 ref={textRef}>The New Wingsuit Pro</h1>
          <video src={process.env.PUBLIC_URL + '/cloudf.mp4'} type="video/mp4" preload="auto" ref={videoRef}></video>
        </div>
      </section>
    </div>
  );
}

export default More;