// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.css';
import 'css/contact.css';
import App from './App';
import Header from './components/Header.jsx';
import Books from './components/Models.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import More from './sections/More.jsx';
import Contact from './sections/Contact.jsx';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { BoxGeometry } from 'three';
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
// JSX Tag Language
const root = ReactDOM.createRoot(document.getElementById('root'));

// Set a background color when the canvas is created
const created = ({gl}) => {
  // gl.setClearColor('#ff0000', 1)
}

root.render(
  <React.StrictMode>

        
        <Header />
        <Hero />
        
        
        <About />
        <Projects />
        <More />

        <section className="section contact">
            <h1 className="">Contact Me</h1>
        <Canvas
              dpr={ [0.1,0.6] } 
              onCreated={ created }
              camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
              }}
              >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Contact />
        </Canvas>
        </section>
  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
