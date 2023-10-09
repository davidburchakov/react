import React, { useState, useEffect, useRef } from 'react';
import birdPic from "static/img/bird.png";
import supervisionPic from "static/img/supervision.png";
import compilerPic from "static/img/compiler.png";
import 'css/projects.css';
// import 'js/gsap-scroll.js';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,CSSPlugin);

const ProjectsSection = () => {
  const [BirdIsShown, BirdSetIsShown] = useState(false);
  const [SupervisionIsShown, SupervisionSetIsShown] = useState(false);
  const [CompilerIsShown, CompilerSetIsShown] = useState(false);

  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});
  const [birdDimensions, setBirdDimensions] = useState({ width: null, height: null });
  const [supervisionDimensions, setSupervisionDimensions] = useState({ width: null, height: null });
  const [compilerDimensions, setCompilerDimensions] = useState({ width: null, height: null });


  const pileRef = useRef(null);

  const birdRef = useRef(null);
  let birdHeight = null;
  let birdWidth = null;
  const supervisionRef = useRef(null);
  let supervisionHeight = null;
  let supervisionWidth = null;
  const compilerRef = useRef(null);
  let compilerHeight = null;
  let compilerWidth = null;

  
  const handleMouseMove = (event, ref) => {
    // 👇 Get mouse position relative to bird container
    const localX = event.clientX - ref.current.getBoundingClientRect().left;
    const localY = event.clientY - birdRef.current.getBoundingClientRect().top;
  
    setLocalMousePos({ x: localX, y: localY });
  };


  // const tlProjects = gsap.timeline({
  //   repeat: 0,
  //   defaults: { duration: 1, ease: Power3.easeInOut },
  // });


  



  useEffect(() => {
    birdRef.current = document.getElementById("bird");
    birdHeight = birdRef.current.clientHeight;
    birdWidth = birdRef.current.clientWidth;
    setBirdDimensions({ width: birdWidth, height: birdHeight });
    
    supervisionRef.current = document.getElementById("supervision");
    supervisionHeight = supervisionRef.current.clientHeight;
    supervisionWidth = supervisionRef.current.clientWidth;
    setSupervisionDimensions({ width: supervisionWidth, height: supervisionHeight });

    compilerRef.current = document.getElementById("compiler");
    compilerHeight = compilerRef.current.clientHeight;
    compilerWidth = compilerRef.current.clientWidth;
    setCompilerDimensions({ width: compilerWidth, height: compilerHeight });

    console.log(birdRef)
    console.log(supervisionRef)
    console.log(compilerRef)

    /**
     * ScrollTrigger Auto Configurations
     */
    ScrollTrigger.config({
      // default is "resize,visibilitychange,DOMContentLoaded,load" so we can remove "resize" from the list:
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    ScrollTrigger.config({
      ignoreMobileResize: true
    });

    ScrollTrigger.addEventListener('refresh', () => console.log('refreshed !'))

    // gsap.to("#bird", {
    //   scrollTrigger: {
    //     trigger: "#bird",
    //     start: "top top",
    //     end: "center 100px",
    //     scrub: 1,
    //     markers: true,
    //     pin: true,
    //   },
    //   x: 400,
    //   rotation: 360,
    // });







    const handleMouseMove = (event, birdRef) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });


      // console.log(localMousePos)

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [localMousePos]);
  
  




  
  return (
    <section className="section projects">
      <h1>Projects</h1>

      <div className="pile" ref={pileRef}>

        <div  className="projects-container bird " 
              id="bird"
              onMouseEnter={() => BirdSetIsShown(true)}
              onMouseLeave={() => BirdSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, birdRef)}

              >
          
          <div  className="projects-card"
                style={{
                  transform: BirdIsShown
                    ? `rotateX(${((birdDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((birdDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ birdPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Computer Graphics</h1>
              <h3>
                Computer Graphics projects using WebCGF (Web Computer Graphics @ FEUP) - a library based on WebGL developed by teachers and alumni of GIG, DEI at the Faculty of Engineering of the University of Porto to support the computer graphics courses lectured primarily in the Master in Informatics and Computing Engineering (MIEIC).
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div  className="projects-container supervision " 
              id="supervision"
              onMouseEnter={() => SupervisionSetIsShown(true)}
              onMouseLeave={() => SupervisionSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, supervisionRef)}
              >
          
          <div  className="projects-card"
                style={{
                  transform: SupervisionIsShown
                    ? `rotateX(${((supervisionDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((supervisionDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ supervisionPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Computer Graphics</h1>
              <h3>
                Computer Graphics projects using WebCGF (Web Computer Graphics @ FEUP) - a library based on WebGL developed by teachers and alumni of GIG, DEI at the Faculty of Engineering of the University of Porto to support the computer graphics courses lectured primarily in the Master in Informatics and Computing Engineering (MIEIC).
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div  className="projects-container compiler " 
              id="compiler"
              onMouseEnter={() => CompilerSetIsShown(true)}
              onMouseLeave={() => CompilerSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, compilerRef)}
              >
          
          <div  className="projects-card"
                style={{
                  transform: CompilerIsShown
                    ? `rotateX(${((compilerDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((compilerDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ compilerPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Compilers</h1>
              <h3>
                Java-like compiler, including 
                Grammar using antl4, 
                Semantic Analysis, 
                OLLIR and
                Jasmin.
                Done as a part of the Faculty of Engineering of the University of Porto curriculum.
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProjectsSection;
