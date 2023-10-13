import React, { useEffect } from 'react';
import 'css/about.css';

export default function About() {
  useEffect(() => {
    let listItems = [...document.querySelectorAll('.about li')];

    let options = {
      rootMargin: '-15%',
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

    return () => observer.disconnect();
  }, []); 

  return (
    <section className="section about" id="about">
      <h1>Welcome to my online portfolio</h1>
      <ul>
        <li><span>Hello!</span></li>
        <li><span>My name is <i>David Burchakov</i></span></li>
        <li><span>I'm a bachelor student of Cracow University of Technology (Politechnika Krakowska)</span></li>
        <li><span>My interests include web developments, artificial intelligence, Natural Language Processing</span></li>
        <li><span>I'm currently a final-year student working towards my Bachelor degree in Computer Science</span></li>
        <li><span><a href="https://it.pk.edu.pl/" target='_blank' >@Wydział Informatyki i Telekomunikacji Politechniki Krakowskiej</a></span></li>
        <li><span>Moreover, I was lucky to participate in the EU Erasmus exchange program</span></li>
        <li><span>and studied in the University of Porto, Portugal</span></li>
        <li><span><a href="https://sigarra.up.pt/feup/pt/web_page.inicial" target='_blank' >@Faculdade de Engenharia da Universidade do Porto</a></span></li>
        <li><span>I'm a hard-working, humble and rational guy</span></li>
        <li><span>currently looking for a job</span></li>
        <li><span>Feel free to contact me</span></li>
        <li><span>I speak English, Polish and Russian</span></li>

      </ul>
    </section>
  );
}
