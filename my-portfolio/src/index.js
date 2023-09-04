// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.css';
// import App from './App';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import More from './sections/More.jsx';
import Laptop from './sections/Laptop.jsx';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';



// JSX Tag Language
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="main-container">
        {/* <canvas className="webgl" id="canvas"></canvas> */}
    
        <div className="dat-gui-container">
          <div id="gui"></div>
        </div>

        <Header />
        <Hero />
        <About />
        <Projects />
        <More />

        <section className="section contact">
            <h1 className="">Contact Me</h1>
        <Canvas 
              camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
              } }
              dpr={ [1, 2] }>
          <Laptop />
        </Canvas>
        </section>

      </div>
    
    <> 
    </>
  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
