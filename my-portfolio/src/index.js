// index.js
import 'css/index.css';
import 'css/contact.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import More from './sections/More.jsx';
import Finale from './sections/Finale.jsx';
import reportWebVitals from './reportWebVitals';

// JSX Tag Language
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

        <Header />
        <Hero />
        <Finale />
        <About />
        <Projects />
        <More />
        
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
