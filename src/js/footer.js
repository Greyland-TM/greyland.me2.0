import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <div className="footer__pageselect">
            <ul className='footer__pageselect--list'>
                <li><Link className="footer__pageselect--item" to='/'>Home</Link></li>
                <li><Link className="footer__pageselect--item" to='/skills'>Skills</Link></li>
                <li><Link className="footer__pageselect--item" to='/about-me'>About me</Link></li>
                <li><Link className="footer__pageselect--item" to='/projects'>Projects</Link></li>
                <li><Link className="footer__pageselect--item" to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className="footer__copyright">
            <p className='footer__copyright--text'>&copy; This page was designed and developed entirely by Greyland Miller. 2021 All rights reserved.</p>
        </div>
    </div>
);

export default Footer;