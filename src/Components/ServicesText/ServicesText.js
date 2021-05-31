import React from 'react'
import './ServicesText.css';
import Button from '../Button/Button';
<<<<<<< HEAD
=======
import Fade from 'react-reveal/Fade';
>>>>>>> Krishna

function Text() {
    return (
        <div className="service__text">
<<<<<<< HEAD
         <div className="service__text__heading">
        <h1>Our Services are Our Superpower</h1>
      </div>
      <div className="service__text__para">
        <p>At Humble, we have made sure to curate our services in such a way that ensures maintenance of the full circle of physical as well as mental health. Our products and services are going to be made and curated by a top notch team of psychologists and psychiatrists.</p>
=======
          <Fade left duration={1500} distance='150px'>
          <div className="service__text__heading">
              <h1>Our Services are Our Superpower</h1>
          </div>
          </Fade>
        <Fade bottom duration={1500} delay={500} distance='150px'>
        <div className="service__text__para">
            <p>At Humble, we have made sure to curate our services in such a way that ensures maintenance of the full circle of physical as well as mental health. Our products and services are going to be made and curated by a top notch team of psychologists and psychiatrists.</p>
>>>>>>> Krishna
        <div className="service__text__button">
          <Button title="Know More" />
          </div>
      </div>
<<<<<<< HEAD
=======
        </Fade>
>>>>>>> Krishna
        </div>
    )
}

export default Text
