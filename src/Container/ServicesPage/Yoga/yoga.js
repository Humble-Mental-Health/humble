import React from 'react'
import './yoga.css'
import YogaImage from '../../../assets/YogaDesktop.png'
<<<<<<< HEAD
=======
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

>>>>>>> Krishna
const yoga = () => {
    return (
        <div className='yoga'>
            <div className="yoga__container">
                <div className="yoga__textContainer">
<<<<<<< HEAD
                    <h1 className="yoga__heading">Yoga</h1>
                    <p className="yoga__para">
                    Mindful Yoga or Mindfulness Yoga combines Buddhist-style mindfulness practice with yoga as exercise to provide a means of exercise that is also meditative and useful for reducing stress.
                    </p>
                    <button className="yoga__button">Start Now</button>
                </div>

                <div className="yoga__imageContainer">
                    <img src={YogaImage} /> 
                </div>
=======
                    <Fade top duration={1000}>
                        <h1 className="yoga__heading">Yoga</h1>
                    </Fade>
                    <Fade bottom duration={1000} delay={300}>
                        <p className="yoga__para">
                        Mindful Yoga or Mindfulness Yoga combines Buddhist-style mindfulness practice with yoga as exercise to provide a means of exercise that is also meditative and useful for reducing stress.
                        </p>
                    </Fade>
                    <Zoom duration={1000} delay={500}>
                        <button className="yoga__button">Start Now</button>
                    </Zoom>
                </div>
                <Fade top distance='100px' duration={1000} delay={500}>
                    <div className="yoga__imageContainer">
                        <img src={YogaImage} /> 
                    </div>
                </Fade>
>>>>>>> Krishna
            </div>  
        </div>
    )
}

export default yoga
