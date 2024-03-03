import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>Building Digital Experience That Inspire </h2>
                <p>Passionate web developer | Transforming Ideas into Seamless and Effective Digital Experiences</p>

            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/hero.jpg' alt='hero' />
                    </div>
                    <img src='./assets/images/icons8-react-native-64.png' alt='react' />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/icons8-html-64.png' alt='html' />
                        <img src='./assets/images/icons8-css-64.png' alt='css' />
                        <img src='./assets/images/icons8-js-64.png' alt='javascript' />
                    </div>
                </div>
            </div>
        </section >

    );
};

export default Hero