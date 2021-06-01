import React from 'react'
import './Community.css'
import CommunityImage from '../../../assets/Community-Desktop.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Community() {
    return (
            <div className="com">
                <div className="com__container">
                    <div className="com__textContainer">
                        <Fade top duration={1000}>
                            <h1 className="com__heading">COMMUNITY FOR ALL</h1>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <p className="com__para">
                                We function in a very efficient way through our constantly interacting and constantly growing virtual community. Diversity of people working towards the same goal. Helping each other.
                            </p>
                        </Fade>
                        <Zoom duration={1000} delay={500}>
                            <a href="https://discord.gg/59gn9tW98n" target="_blank" ><button className="com__button">Start Now</button></a>
                        </Zoom>
                    </div>
                    <Fade bottom duration={2000} delay={1000}>
                        <div className="com__imageContainer"><img src={CommunityImage}/></div>
                    </Fade>
                </div>
            </div>  
    )
}

export default Community;
