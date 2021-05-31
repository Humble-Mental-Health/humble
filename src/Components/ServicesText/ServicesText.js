import React from 'react'
import './ServicesText.css';
import Button from '../Button/Button';
import Fade from 'react-reveal/Fade';

function Text() {
    return (
        <div className="service__text">
          <Fade left duration={1500} distance='150px'>
          <div className="service__text__heading">
              <h1>Our Services are Our Superpower</h1>
          </div>
          </Fade>
        <Fade bottom duration={1500} delay={500} distance='150px'>
        <div className="service__text__para">
            <p>At Humble, we have made sure to curate our services in such a way that ensures maintenance of the full circle of physical as well as mental health. Our products and services are going to be made and curated by a top notch team of psychologists and psychiatrists.</p>
        <div className="service__text__button">
          <Button title="Know More" />
          </div>
      </div>
        </Fade>
        </div>
    )
}

export default Text
