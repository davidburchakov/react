import {useState} from 'react';

export default function Hero() {
    const countState = useState(0);
    const count = countState[0];
    const setCount = countState[1];
    const inject = 'bla-bla-bla';
    const boolean = true;
    
    const buttonClick = () => {
        setCount(count + 1);
    }

    return (
        <section className="hero-section" id='heroSection'>
            <h1>Hero</h1>
            <div className="hello-container">
            Hello {inject}
            <br />
            Current date: {Date.now()}
            <br />
            {`Random number: ${Math.random()}`}
            <br />
            {boolean ? 'true' : 'false'}
            <h1>Hello React</h1>
            <p>Lorem ipsum dolor <br /> sit amet consectetur, adipisicing elit. Harum magnam deleniti ad praesentium alias nihil temporibus doloremque eaque consequatur. A harum ipsum blanditiis delectus ad eius ipsa adipisci quam culpa.</p>
            </div>
            <button className="increment" onClick={ buttonClick }>{count}</button>
        </section>
    );
}