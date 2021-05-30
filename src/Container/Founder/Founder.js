import React from 'react'
import './Founder.css'
import founder_image from '../../assets/sahil_arun.jpeg'

function Founder() {
    return (
        <div className='founder'>
            <h1 className='founder__head'><span class="tapered">From the Founders</span></h1>
            <img className='founder__img' src={founder_image} />
            <div className="founder__para">
                <p>Whoever is reading this, considering that human beings are still now extinct yet, this is a message from the past, the time of 'great pause', when the whole world just stopped. Everyone limited themselves to the comfort of their homes and due to constraints in  mobility they were obliged to get confronted by their true selves. And when you peak within, you are bound to meet your inner-demons. and when the demons prevailed, two warriors emerged to rescue everyone...</p><br></br>

                <p>Enough wordplay, Meet us, <span className='founders__name'>Arun</span> and <span className='founders__name'>Sahil</span>, Founders of <span className='founders__startup'>THE HUMBLE INDIA</span>, we met each other at a very strange time. We both had the same realization about the world and our country and what the people of our country must be going through at that time. We, like the warriors, took the charge to help people fight their inner demons and that's where our sword and shield, Humble, came into the scene. We ideated together, brainstormed together, and decided to move forward in the direction, where more and more people could express themselves without having to worry about what others would think of them. We haven't reached out to destiny yet, but are very optimistic about making this world a better place, a considerate place, where the stigma around mental health gets removed.</p>
            </div>
        </div>
    )
}

export default Founder