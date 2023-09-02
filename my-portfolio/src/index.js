// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const inject = 'bla-bla-bla';
const boolean = true;
// JSX Tag Language
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <> 
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
  </>
  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
