import React from 'react'
import './yoga.css'
import YogaImage from '../../../assets/YogaDesktop.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const yoga = () => {
    return (
        <div className='yoga'>
            <div className="yoga__container">
                <div className="yoga__textContainer">
                    <Fade top duration={1000}>
                        <h1 className="yoga__heading">Yoga</h1>
                    </Fade>
                    <Fade bottom duration={1000} delay={300}>
                        <p className="yoga__para">
                        Mindful Yoga or Mindfulness Yoga combines Buddhist-style mindfulness practice with yoga as exercise to provide a means of exercise that is also meditative and useful for reducing stress.
                        </p>
                    </Fade>
                    <Zoom duration={1000} delay={500}>
                     <a href="https://forms.gle/LzKnTS8aCoVHJbfk8" target="_blank"><button className="yoga__button">Start Now</button></a>
                    </Zoom>
                </div>
                
                <Fade top distance='100px' duration={1000} delay={500}>
                    <div className="yoga__imageContainer">
                        <img src={YogaImage} /> 
                    </div>
                </Fade>
            </div>  
        </div>
    )
}

export default yoga
