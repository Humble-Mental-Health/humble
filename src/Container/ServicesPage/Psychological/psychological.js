import React from 'react'
import './psychological.css'
<<<<<<< HEAD
=======
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
>>>>>>> Krishna

const psychological = () => {
    return (
            <div className='psychological'>
                <div className='psycho-text'>
<<<<<<< HEAD
                    <p className='psycho-heading'>Psychological Help</p>
                    <div className='psycho-paraContainer'>
                        <p className='psycho-para'>Humble’s subscription program will help you to improve your mental health 10 times faster and 50 times cheaper than conventional therapy. 
                        You will get 2 hours of therapy session, where you’ll get experienced therapists/counsellors from team humble, who’ll provide you a better perspective
                        </p>
                    </div>
                    <a href="df" className="btn btn-green">Start Now</a>
                </div>
                <div className='psycho-img'>
                    <div className="img1"></div>
                    <div className="img2"></div>
=======
                    <Fade top duration={1000}>
                        <p className='psycho-heading'>Psychological Help</p>
                    </Fade>
                    <Fade bottom duration={1000}>
                        <div className='psycho-paraContainer'>
                            <p className='psycho-para'>Humble’s subscription program will help you to improve your mental health 10 times faster and 50 times cheaper than conventional therapy. 
                            You will get 2 hours of therapy session, where you’ll get experienced therapists/counsellors from team humble, who’ll provide you a better perspective
                            </p>
                        </div>
                    </Fade>
                    <Zoom duration={1000} delay={1500}>
                            <a href="df" className="btn-start">Start Now</a>
                    </Zoom>
                </div>
                <div className='psycho-img'>
                    <Fade left duration={1500} distance='200px' delay={200}>
                        <div className="img1"></div>
                    </Fade>
                    <Fade right duration={1500} distance='200px' delay={200}>
                        <div className="img2"></div>
                    </Fade>
>>>>>>> Krishna
                </div>
            </div>
    )
}

export default psychological
