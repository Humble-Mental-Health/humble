import React from 'react'
import './Meditation.css'
import MedImage from '../../../assets/Meditation-01.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Meditation() {
    return (
        <div className="med">
            <div className="med__container">
                <div className="med__textContainer">
                    <Fade top duration={1000}>
                        <h1 className="med__heading">Mindfulness Meditation</h1>
                    </Fade>
                    <Fade bottom duration={1000} delay={300}>
                        <p className="med__para">
                        A mental training practice that teaches you to slow down racing thoughts, let go of negativity, and calm both your mind and body. ... Techniques can vary, but in general, mindfulness meditation involves deep breathing and awareness of body and mind. 
                        </p>
                    </Fade>
                    <Zoom duration={1000} delay={1000}>
                    <a href="https://forms.gle/LzKnTS8aCoVHJbfk8" target="_blank"><button className="med__button">Start Now</button></a>
                    </Zoom>
                </div>

                <Fade bottom distance='100px' duration={1000} delay={500}>
                    <div className="med__imageContainer">
                        <img src={MedImage} /> 
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Meditation
