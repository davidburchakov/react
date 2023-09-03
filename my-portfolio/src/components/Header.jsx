import 'css/Header.css';
import logo from 'logo.svg';
// src/components/Header.jsx
export default function Header(){
    return(
        <header>
            <img src={logo} className="App-logo" alt="logo" />
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