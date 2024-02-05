import React from 'react';
import 'css/footer.css';
import reading from 'static/img/reading-book.png';
export default function Footer() {
    return (
        <footer className="site-footer">
            <img src={reading} alt="Logo" className="footer-logo" />
            <p>CC0</p>
            <p>No Rights Reserved</p>
        </footer>
    );
}
