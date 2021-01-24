import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <div className="footer__pageselect">
            <ul className='footer__pageselect--list'>
                <li className="footer__pageselect--item"><Link path='/' exact>Home</Link></li>
                <li className="footer__pageselect--item"><Link path='/skills' exact>Skills</Link></li>
                <li className="footer__pageselect--item"><Link path='/about-me' exact>About me</Link></li>
                <li className="footer__pageselect--item"><Link path='/projects' exact>Projects</Link></li>
                <li className="footer__pageselect--item"><Link path='/contact' exact>Contact</Link></li>
            </ul>
        </div>
        <div className="footer__copyright">
            <p className='footer__copyright--text'>&copy; This page was designed and developed entirely by Greyland Miller. 2021 All rights reserved.</p>
        </div>
    </div>
);

export default Footer;