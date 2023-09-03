// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import More from './sections/More.jsx';
import Contact from './sections/Contact.jsx';
import reportWebVitals from './reportWebVitals';



// JSX Tag Language
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <About />
    <Projects />
    <More />
    <Contact />
    
    <> 
    </>
  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
