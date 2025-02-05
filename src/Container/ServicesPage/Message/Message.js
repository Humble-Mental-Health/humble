import React from 'react'
import msgImage from '../../../assets/Whatsapp-Message-01.png'
import './Message.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Message() {
    return (
        <div className="message">
            <div className="message__container">
                <Fade top distance='100px' duration={1000} delay={500}>
                    <div className="message__imageContainer">
                        <img src={msgImage} />
                    </div>
                </Fade>
                <div className="message__textContainer">
                    <Fade top duration={1000}>
                        <h1 className="message__heading">Daily affirmation texts 
                            on WhatsApp/SMS</h1>
                    </Fade>
                    <Fade bottom duration={1000} delay={300}>
                        <p className="message__para">Incorporating Positive Affirmations into your Mindfulness Practice. ... Positive affirmations are thoughts that make us feel good, peaceful, happy, empowered. They are thoughts that we want to believe or are learning to believe. Our destructive thoughts did not start out with power</p>
                    </Fade>
                    <Zoom duration={1000} delay={1000}>
                        <a href="https://forms.gle/LzKnTS8aCoVHJbfk8" target="_blank"><button className="message__button">Start Now</button></a>
                    </Zoom>
                </div>
            </div>            
        </div>
    )
}

export default Message
