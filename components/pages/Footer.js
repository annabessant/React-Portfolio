import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <>
            <div className='footer-container'>
                <section class 'Contact-me'>
                    <h3 className='Github-follow'>Github</h3>
                    <a href="https://github.com/annabessant"
                    target="_blank"
                    className="social-icon-link github"/>
                    </a>
                    <h3 className='Linkedin-link'>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/anna-bessant-5b7bb074/?originalSubdomain=uk"
                    target="_blank"
                    className="social-icon-link linkedin"/>
                    <h3 className='Linkedin-link'>Instagram</h3>
                    <a href="https://www.instagram.com/bessant.anna/"
                    target="_blank"
                    className="social-icon-link instagram"/>
                    </a>
                </a>
            </div>
        </>
    )
}

export default Footer; 