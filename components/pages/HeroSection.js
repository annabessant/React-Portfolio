import React from 'react';
import './HeroSection.css';

function HeroSection () {
    return (
        <div className="hero-container">
            <h1>Welcome! I am Anna B. and who are you?</h1>
            <p>I'm a{' '}
            <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'photographer  π·', // https://emojiguide.org/camera
                    1000,
                    'designer π', // https://emojiguide.org/gem-stone
                    1000,
                    'web developer πΈοΈ', // https://emojiguide.org/spider-web
                    1000,
        ]}
            />
            </p>
            <div className="hero-btns">
                <button className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >
                My web Portfolio
            </button>
        </div>
    </div>
    )
}

export default HeroSection;