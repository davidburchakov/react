import 'css/header.css';
import logo from 'logo.svg';
// src/components/Header.jsx
export default function Header(){
    return(
        <header>
            <nav>
            <a href="https://www.facebook.com/spleentery" target='_blank'>
                David Burchakov
            </a>
            <ul>
                <li><a href="https://github.com/davidburchakov" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/david-b-54b288224/" target='_blank'>LinkedIn</a></li>
            </ul>
            </nav>
        </header>
    );
}