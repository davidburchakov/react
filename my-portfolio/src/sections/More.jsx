import "css/styles.scss";
import React, { useRef, useEffect } from "react";

export default function More() {
  const videoRef = useRef(null);

  useEffect(() => {
    loadVideoOnScroll(".more");
  }, []);

  const loadVideoOnScroll = (containerSelector) => {
    const container = document.querySelector(containerSelector);

    const videoPlayOnScroll = () => {
      if (videoRef.current.duration) {
        const sectionHeight = container.clientHeight;
        const scrollY = window.scrollY - container.offsetTop;
        const scrollPercent = scrollY / sectionHeight;

        videoRef.current.currentTime =
          videoRef.current.duration * scrollPercent ;
      }
      requestAnimationFrame(videoPlayOnScroll);
    };

    requestAnimationFrame(videoPlayOnScroll);
  };

  return (
    <section className="section more">
      <div className="App">
        <div className="video-container">
          <div className="video-content">
            <video
              preload="auto"
              ref={videoRef}
              src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
              // src={process.env.PUBLIC_URL + '/lion2.mp4'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
