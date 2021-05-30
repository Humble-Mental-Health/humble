import React from 'react'
import './Meditation.css'
import MedImage from '../../../assets/Meditation-01.png'

function Meditation() {
    return (
        <div className="med">
            <div className="med__container">
                <div className="med__textContainer">
                    <h1 className="med__heading">Mindfulness Meditation</h1>
                    <p className="med__para">
                    A mental training practice that teaches you to slow down racing thoughts, let go of negativity, and calm both your mind and body. ... Techniques can vary, but in general, mindfulness meditation involves deep breathing and awareness of body and mind. 
                    </p>
                    <button className="med__button">Start Now</button>
                </div>

                <div className="med__imageContainer">
                    <img src={MedImage} /> 
                </div>
            </div>
        </div>
    )
}

export default Meditation
