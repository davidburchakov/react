import React, { useState, useEffect, useRef } from 'react';
import bird from "static/img/bird.png";
import 'css/projects.css';



const ProjectsSection = () => {
  const [BirdIsShown, BirdSetIsShown] = useState(false);
  const [SupervisionIsShown, SupervisionSetIsShown] = useState(false);
  const [CompilerIsShown, CompilerSetIsShown] = useState(false);

  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});
  const [birdDimensions, setBirdDimensions] = useState({ width: null, height: null });
  const [supervisionDimensions, setSupervisionDimensions] = useState({ width: null, height: null });
  const [compilerDimensions, setCompilerDimensions] = useState({ width: null, height: null });


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

      <div className="pile">

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
              <img id="img-self-bird" src={ bird } alt="bird" />
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
              <img id="img-self-bird" src={ bird } alt="bird" />
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
              <img id="img-self-bird" src={ bird } alt="bird" />
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


      </div>
    </section>
  );
};

export default ProjectsSection;
