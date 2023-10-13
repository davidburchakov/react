import React, { useEffect } from 'react';
import 'css/about.css';

export default function About() {
  useEffect(() => {
    let listItems = [...document.querySelectorAll('.about li')];

    let options = {
      rootMargin: '-20%',
      threshold: 0.0
    };

    let observer = new IntersectionObserver(showItem, options);

    function showItem(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.children[0].classList.add('active');
        }else {
          entry.target.children[0].classList.remove('active'); // Remove 'active' class when not intersecting
        }
      });
    }

    listItems.forEach(item => {
      // console.log(item);
      observer.observe(item);
    });

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // An empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <section className="section about" id="about">
      <h1>Welcome to my portfolio</h1>
      <ul>
        <li><span>Hello!</span></li>
        <li><span>My name is <i>David Burchakov</i></span></li>
        <li><span>I'm a bachelor student of Cracow University of Technology (Politechnika Krakowska).</span></li>
        <li><span>My interests include software design and development, web developments, artificial intelligence.</span></li>
        <li><span>I'm currently a final-year student working towards my Bachelor degree in Informatics and Telecommunications.</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
      </ul>
    </section>
  );
}
