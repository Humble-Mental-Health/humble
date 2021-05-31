import React from 'react'
import Partial from '../../../Components/Partial/Partial'
import aboutUsImage from '../../../assets/aboutUs.png'
import dumbbell from '../../../assets/dumbbell.png'
import skull from '../../../assets/skull.png'
import thumb from '../../../assets/thumb.png'
import tick from '../../../assets/tick.png'
import './AboutUs.css'
<<<<<<< HEAD
=======
import Fade from 'react-reveal/Fade';
>>>>>>> Krishna

function AboutUs() {
    return (
        <div className='aboutus'>
<<<<<<< HEAD
            <div className="aboutus__head">
                <h1 className='aboutus__heading'>Welcome to Humble</h1>
                <p className='aboutus__para'>Humble is a startup based on mental-health and awareness. We took the initiative to make sure that everyone in this country openly expresses about their mental-health. We are here to remove the stigma associated with mental-health.</p>
            </div>
            <div className="aboutus__grid">
                <div className="aboutus__grid__elm1">
                    <Partial 
                        icons={dumbbell} 
                        orientation='right' 
                        topic='Integration of Physical and Mental Health' 
                        para='We’ve put out a subscription program that helps you improve your mental as well as mental health'/>    
                </div>

=======
            <Fade bottom distance='50px'>
                <div className="aboutus__head">
                    <h1 className='aboutus__heading'>Welcome to Humble</h1>
                    <p className='aboutus__para'>Humble is a startup based on mental-health and awareness. We took the initiative to make sure that everyone in this country openly expresses about their mental-health. We are here to remove the stigma associated with mental-health.</p>
                </div>
            </Fade>
            <div className="aboutus__grid">
                <Fade left distance='200px' duration={1500}>
                    <div className="aboutus__grid__elm1">
                        <Partial 
                            icons={dumbbell} 
                            orientation='right' 
                            topic='Integration of Physical and Mental Health' 
                            para='We’ve put out a subscription program that helps you improve your mental as well as mental health'/>    
                    </div>
                </Fade>
                <Fade left distance='200px' duration={1500}>
>>>>>>> Krishna
                <div className="aboutus__grid__elm2">
                    <Partial 
                        icons={thumb} 
                        orientation='right'
                        topic='100 Percent Assurance'
                        para='Once you become a part of Humble, It becomes our responsibility to make sure that your mental health is on check all the time.' />
                </div>
<<<<<<< HEAD

=======
                </Fade>
                <Fade right distance='200px' duration={1500}>
>>>>>>> Krishna
                <div className="aboutus__grid__elm3">
                    <Partial 
                        icons={tick} 
                        orientation='left'
                        topic='Constant Check'
                        para='Your mental health will be our priority, we will make sure that everything that you do or we do encourages the improvement of mental health.' />
                </div>
<<<<<<< HEAD

=======
                </Fade>
                <Fade right distance='200px' duration={1500}>
>>>>>>> Krishna
                <div className="aboutus__grid__elm4">
                    <Partial 
                        icons={skull} 
                        orientation='left'
                        topic='Subconscious Mind'
                        para='Our processes will include tapping into the subconscious mind so that healthy habits get engraved in you deeply.' />
                </div>
<<<<<<< HEAD

                <div className="aboutus__image">
                    <img src={aboutUsImage} alt=""/>
                </div>
=======
                </Fade>
                <Fade bottom distance='200px' duration={1500} delay={500}>
                <div className="aboutus__image">
                    <img src={aboutUsImage} alt=""/>
                </div>
                </Fade>
>>>>>>> Krishna
            </div>  
        </div>
    )
}

export default AboutUs
