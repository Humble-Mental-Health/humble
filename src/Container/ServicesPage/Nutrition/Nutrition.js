import React from 'react'
import './Nutrition.css'
import NutImage from '../../../assets/Experts.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Nutrition() {
    return (
        <div className='nut'>
            <div className="nut__container">
                <div className="nut__textContainer">
                    <Fade top duration={1000}>
                        <h1 className="nut__heading">Meet with Nutrition expert</h1>
                    </Fade>
                    <Fade bottom duration={1000} delay={300}>
                        <p className="nut__para">
                        Mindful eating places awareness on the menu, whenever and wherever we eat. As well as making us watchful about what we eat, it aims to transform our relationship with food by focusing on the how and why of eating, encouraging a more holistic point of view. Ultimately, this means we have a better chance of understanding what foods nourish us and what foods help us stay healthy while also encouraging a deeper appreciation of every meal, every mouthful, and every ingredient.
                        </p>
                    </Fade>
                    <Zoom duration={1000} delay={1000}>
                        <button className="nut__button">Start Now</button>
                    </Zoom>
                </div>
                <Fade bottom distance='100px' duration={1000} delay={500}>
                    <div className="nut__imageContainer">
                        <img src={NutImage} /> 
                    </div>
                </Fade>
            </div>  
        </div>
    )
}

export default Nutrition
