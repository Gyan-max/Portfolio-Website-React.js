import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>Hi, My Self <span>Gyan </span> </h2>
                <ul>
                    <li> CS Undergrad at IIT Patna.</li>
                    <li>Passionate web developer.</li>
                    <li>Interested in ReactJS, JavaScript, NodeJS, HTML, CSS, Python, Cybersecurity,
                        <br></br>Machine Learning and MUCH MORE.</li>
                    <li>Enthusiastic learner.</li>
                    <li>Interested in learning new technologies.</li>
                    <li>Exploring.....</li>

                </ul>

            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/Snapchat-314782128.jpg' alt='hero' />
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