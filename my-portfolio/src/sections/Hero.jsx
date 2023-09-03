import 'css/hero.css';
import reading from 'static/img/reading-book.png';

export default function Hero() {

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
        
        {/* <div class="animated-avatar-container">
          <img src="static/img/reading-book.png" alt="avatar">
          <video src="static/videos/splash-ink.mp4" autoplay muted loop></video>
        </div> */}
        {/* onClick="window.delayedTransition()" */}
        <a >
        <div className="scrollDown">
          <span></span>
          <span></span>
          <span></span>
          </div>
        </a>
      </section>
    );
}