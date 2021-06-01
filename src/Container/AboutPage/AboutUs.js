import React from 'react'
import Header from '../../Components/Header/Header';
import './AboutUs.css'
function AboutUs() {
    return (
        <div>
            <Header />
            <div className="aboutus">
                <hr style={{borderColor: "#838383", opacity:"0.3"}}></hr>
                <div className="aboutus__content">

                    <p className="aboutus__textType1" >Life's a beach,<b><br />we make it a humble beach. <br /></b></p>
                </div>
                {/* <div className="content">
                    <p className="textType2">Beautiful, practical, meaningful stuff.<br/>
                    We make what we love.<br/>
                    we ❤️ what we do.</p>
                </div> */}
                <div className="aboutus__content">
                    <p className="aboutus__textType2">Humble India is a community of people to help you and provide mental health advice through counselling sessions and seminars. You can share your feelings and sufferings with active listeners. Take part in group discussion/expression and talks.</p>
                </div>
                <div className="aboutus__content">
                    <p className="aboutus__new">“What mental health needs is more sunlight, more candor and more unashamed conversation”  <b><br/>-Glenn Close<br/></b></p>
                </div>
                <div className="aboutus__content">
                    <p className="aboutus__textType2">We're here to listen to you and give constructive solutions. Meditation and Yoga classes are there to refresh, rejuvenate & repair your life and find the supersoul within.</p>
                </div>
                {/* <div className="content">
                    <p className="textType1" style={{lineHeight:"0.95"}}>FOR <br/>
                    <b>THE MAKERS, <br/>
                    THE CREATORS, <br/>
                    THE DISCOVERERS, <br/>
                    THE ORIGINAL THINKERS.</b></p>
                </div> */}
                <p style={{fontSize:"18px", fontWeight:500, marginTop:"30px", marginBottom:"30px"}}>We <span>@thehumbleindia</span> believe in living for today and tomorrow!</p>
            </div>
        </div>
    )
}

export default AboutUs
