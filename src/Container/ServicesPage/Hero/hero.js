import React from 'react'
import './hero.css';
<<<<<<< HEAD
=======
import Fade from 'react-reveal/Fade';
>>>>>>> Krishna

const hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
<<<<<<< HEAD
                <div className='container-text'>
                    <h1 className='hero-heading'>Services</h1>
                    <p className='hero-para'>Our Services include, one click-away listeners, easy to get therapists for reasonable prices, Humble’s subscription program, Online course along with Mental health kit (to be launched very soon)</p>
                    <a href="kd" className='btn btn-white'>Join our Community</a>
                </div>
                <div className='container-img'></div>
=======
                <Fade left distance='150px' duration={1000}>
                    <div className='container-text'>
                        <h1 className='hero-heading'>Services</h1>
                        <p className='hero-para'>Our Services include, one click-away listeners, easy to get therapists for reasonable prices, Humble’s subscription program, Online course along with Mental health kit (to be launched very soon)</p>
                        <button>Join our Community</button>
                    </div>
                </Fade>
                <Fade top distance='200px' duration={1000} delay={500}>
                    <div className='container-img'></div>
                </Fade>
>>>>>>> Krishna
            </div>
        </div>
    )
}

export default hero
