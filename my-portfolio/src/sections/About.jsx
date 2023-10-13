import React, { useEffect } from 'react';
import 'css/about.css';

export default function About() {
  useEffect(() => {
    let listItems = [...document.querySelectorAll('.about li')];

    let options = {
      rootMargin: '0%',
      threshold: 1.0
    };

    let observer = new IntersectionObserver(showItem, options);

    function showItem(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.children[0].classList.add('active');
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
      <h1>Welcome.</h1>
      <ul>
        <li><span>Hello!</span></li>
        <li><span>My name is David</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
        <li><span>Hire me!</span></li>
      </ul>
    </section>
  );
}
