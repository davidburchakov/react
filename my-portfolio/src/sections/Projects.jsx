import React from 'react';
import bird from "static/img/bird.png";
import 'css/projects.css';
import "js/projects-card.js";


const ProjectsSection = () => {
  return (
    <section className="section projects">
      <h1>Projects</h1>

      <div className="pile">
        <div className="projects-container bird" id="bird">
          <div className="projects-card">
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

        <div className="projects-container supervision">
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

        <div className="projects-container compiler">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
