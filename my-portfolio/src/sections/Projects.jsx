import React, { useState, useEffect, useRef } from 'react';
import birdPic from "static/img/bird.png";
import supervisionPic from "static/img/supervision.png";
import compilerPic from "static/img/compiler.png";
import lbawPic from "static/img/lbaw.png";
import r3fPic from "static/img/r3f.png";
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
  const [LbawIsShown, LbawSetIsShown] = useState(false);
  const [LtwIsShown, LtwSetIsShown] = useState(false);

  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});
  const [birdDimensions, setBirdDimensions] = useState({ width: null, height: null });
  const [supervisionDimensions, setSupervisionDimensions] = useState({ width: null, height: null });
  const [compilerDimensions, setCompilerDimensions] = useState({ width: null, height: null });
  const [lbawDimensions, setLbawDimensions] = useState({ width: null, height: null });
  const [ltwDimensions, setLtwDimensions] = useState({ width: null, height: null });

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
  const lbawRef = useRef(null);
  let lbawHeight = null;
  let lbawWidth = null;
  const ltwRef = useRef(null);
  let ltwHeight = null;
  let ltwWidth = null;

  
  const handleMouseMove = (event, ref) => {
    // 👇 Get mouse position relative to bird container
    const localX = event.clientX - ref.current.getBoundingClientRect().left;
    const localY = event.clientY - ref.current.getBoundingClientRect().top;
  
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

    lbawRef.current = document.getElementById("lbaw");
    lbawHeight = lbawRef.current.clientHeight;
    lbawWidth = lbawRef.current.clientWidth;
    setLbawDimensions({ width: lbawWidth, height: lbawHeight });

    ltwRef.current = document.getElementById("ltw");
    ltwHeight = ltwRef.current.clientHeight;
    ltwWidth = ltwRef.current.clientWidth;
    setLtwDimensions({ width: ltwWidth, height: ltwHeight });

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

        <div className="projects-container bird " 
              id="bird"
              onMouseEnter={() => BirdSetIsShown(true)}
              onMouseLeave={() => BirdSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, birdRef)}

              >
          
          <div className="projects-card"
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

        <div className="projects-container supervision " 
              id="supervision"
              onMouseEnter={() => SupervisionSetIsShown(true)}
              onMouseLeave={() => SupervisionSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, supervisionRef)}
              >
          
          <div className="projects-card"
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
              <h1 className="title-card">Supervision Learning</h1>
              <h3>
                Supervision Learning project.
                Application of different Machine Learning algorithms, including
                Nearest Neighbor,
                SVM,
                Decision Trees and
                Neural Networks
                and a comparison of theese algorithms.
                The purpose of the project is to find a binary solution for
                real-life data - Regensburg Pediatric Appendicitis dataset.
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>


        <div className="projects-container compiler " 
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


        <div  className="projects-container lbaw" 
              id="lbaw"
              onMouseEnter={() => LbawSetIsShown(true)}
              onMouseLeave={() => LbawSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, lbawRef)}
              >
          
          <div className="projects-card"
                style={{
                  transform: LbawIsShown
                    ? `rotateX(${((lbawDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((lbawDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ lbawPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Database and Web Applications Laboratory</h1>
              <h3>
                Web project that uses technologies such as
                Laravel,
                PostgresDB,
                PHP,
                JS,
                AJAX calls, 
                etc.
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>


        <div  className="projects-container ltw" 
              id="ltw"
              onMouseEnter={() => LtwSetIsShown(true)}
              onMouseLeave={() => LtwSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, ltwRef)}
              >
          
          <div className="projects-card"
                style={{
                  transform: LtwIsShown
                    ? `rotateX(${((ltwDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((ltwDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ lbawPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Web Languages and Technologies</h1>
              <h3>
              Web Languages and Technologies
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>


        <div  className="projects-container lbaw" 
              id="lbaw"
              onMouseEnter={() => LbawSetIsShown(true)}
              onMouseLeave={() => LbawSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, lbawRef)}
              >
          
          <div className="projects-card"
                style={{
                  transform: LbawIsShown
                    ? `rotateX(${((lbawDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((lbawDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ lbawPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Optimizations - Travelling Salesman Problem</h1>
              <h3>
              Optimizations - Travelling Salesman Problem
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>


        <div  className="projects-container lbaw" 
              id="lbaw"
              onMouseEnter={() => LbawSetIsShown(true)}
              onMouseLeave={() => LbawSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, lbawRef)}
              >
          
          <div className="projects-card"
                style={{
                  transform: LbawIsShown
                    ? `rotateX(${((lbawDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((lbawDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ lbawPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Optimizations - Travelling Salesman Problem</h1>
              <h3>
              Optimizations - Travelling Salesman Problem
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>


        <div  className="projects-container lbaw" 
              id="lbaw"
              onMouseEnter={() => LbawSetIsShown(true)}
              onMouseLeave={() => LbawSetIsShown(false)}
              onMouseMove={(event) => handleMouseMove(event, lbawRef)}
              >
          
          <div className="projects-card"
                style={{
                  transform: LbawIsShown
                    ? `rotateX(${((lbawDimensions.height / 2) - localMousePos.y) / 20}deg) rotateY(${((lbawDimensions.width / 2) - localMousePos.x) / 30}deg)`
                    : 'none',
                  transition: 'none'
                }}
                >
            <div className="img-card">            
              <div className="circle"></div>
              <img id="img-self-bird" src={ r3fPic } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">This website</h1>
              <h3>
              This website is built using cheifly 
              React Framework (Library),
              WebGL library - three.js,
              GreenSock (gsap),
              html, css, js and others.
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
