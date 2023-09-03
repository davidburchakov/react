import 'css/header.css';
import logo from 'logo.svg';
// src/components/Header.jsx
export default function Header(){
    return(
        <header>
            <nav>
            <a href="/">
                David Burchakov
            </a>
            <ul>
                <li>Explore</li>
                <li>Create</li>
            </ul>
            </nav>
        </header>
    );
}