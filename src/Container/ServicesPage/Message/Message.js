import React from 'react'
import msgImage from '../../../assets/Whatsapp-Message-01.png'
import './Message.css'
function Message() {
    return (
        <div className="message">
            <div className="message__container">
                <div className="message__imageContainer">
                    <img src={msgImage} />
                </div>
                <div className="message__textContainer">
                    <h1 className="message__heading">Daily affirmation texts 
                        on WhatsApp/SMS</h1>
                    <p className="message__para">Incorporating Positive Affirmations into your Mindfulness Practice. ... Positive affirmations are thoughts that make us feel good, peaceful, happy, empowered. They are thoughts that we want to believe or are learning to believe. Our destructive thoughts did not start out with power</p>
                    <button className="message__button">Start Now</button>
                </div>
            </div>            
        </div>
    )
}

export default Message
