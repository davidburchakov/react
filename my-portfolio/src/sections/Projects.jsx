import React, { useState, useEffect, useRef } from 'react';
import bird from "static/img/bird.png";
import 'css/projects.css';
// import "js/projects-card.js";



const ProjectsSection = () => {
  const [BirdIsShown, BirdSetIsShown] = useState(false);
  const [SupervisionIsShown, SupervisionSetIsShown] = useState(false);
  const [CompilerIsShown, CompilerSetIsShown] = useState(false);

  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});
  const [birdDimensions, setBirdDimensions] = useState({ width: null, height: null });


  const birdRef = useRef(null);
  let birdHeight = null;
  let birdWidth = null;
  const handleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };

  useEffect(() => {
    birdRef.current = document.getElementById("bird");
    birdHeight = birdRef.current.clientHeight;
    birdWidth = birdRef.current.clientWidth;
    setBirdDimensions({ width: birdWidth, height: birdHeight });
    console.log(birdHeight)
    console.log(birdWidth)

    const handleMouseMove = (event) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
      const xAxis = (localMousePos.x / 20);
      const yAxis = ( localMousePos.y / 20);

      // birdRef.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
      console.log(localMousePos)

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
        <p>width: {birdWidth}</p>
        <div  className="projects-container bird " 
              id="bird"
              onMouseEnter={() => BirdSetIsShown(true)}
              onMouseLeave={() => BirdSetIsShown(false)}
              onMouseMove={handleMouseMove}
              >
          
          <div className="projects-card"
          style={{
            transform: `rotateX(${((birdDimensions.height /2) - localMousePos.y) / 20}deg) rotateY(${((birdDimensions.width/2)- localMousePos.x) / 30}deg)`,
            transition:'none'
          }}>
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

        {/* <div  className="projects-container supervision"
              id='supervision'
              onMouseEnter={() => SupervisionSetIsShown(true)}
              onMouseLeave={() => SupervisionSetIsShown(false)}

                      >
          <div className="projects-card">
            <div className="img-card">
              <div className="circle"></div>
              <img id="img-self-supervision" src={ bird } alt="bird" />
            </div>
            <div className="info">
              <h1 className="title-card">Supervision Learning</h1>
              <h3>
                Computer Graphics projects using WebCGF (Web Computer Graphics @ FEUP) - a library based on WebGL developed by teachers and alumni of GIG, DEI at the Faculty of Engineering of the University of Porto to support the computer graphics courses lectured primarily in the Master in Informatics and Computing Engineering (MIEIC).
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div  className="projects-container compiler"
              id='compiler'
              onMouseEnter={() => CompilerSetIsShown(true)}
              onMouseLeave={() => CompilerSetIsShown(false)}
              onMouseMove={handleMouseMove}

          >
          <div className="projects-card">
            <div className="img-card">
              <div className="circle"></div>
              <img id="img-self-compiler" src={ bird } alt="bird" />
            </div>
            <div className="info">
              <h1>Java-- Compiler</h1>
              <h3>
                Computer Graphics projects using WebCGF (Web Computer Graphics @ FEUP) - a library based on WebGL developed by teachers and alumni of GIG, DEI at the Faculty of Engineering of the University of Porto to support the computer graphics courses lectured primarily in the Master in Informatics and Computing Engineering (MIEIC).
              </h3>
              <div className="readmore">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
