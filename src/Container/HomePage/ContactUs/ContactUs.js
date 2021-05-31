import React, { useState } from 'react'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Button from '../../../Components/Button/Button';
import { db } from "../../../Config/firebase";
import './ContactUs.css'
<<<<<<< HEAD
=======
import Fade from 'react-reveal/Fade';
>>>>>>> Krishna

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
        .add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
        })
        .catch((error) => {
<<<<<<< HEAD
            alert(error.message);
=======
            alert("Fill up all the fields");
>>>>>>> Krishna
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    };
<<<<<<< HEAD

    return (
        <div className='contactUs'>
            <div className="contactUs__left">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam voluptates blanditiis optio voluptatibus repudiandae modi, officiis amet tempore dolorem illum excepturi autem eligendi praesentium. Vero molestias architecto qui ducimus.</p>
                <div className="contactUs__icon">
                    <CallIcon style={{fill: "#13524a"}}/>
                    <h6>+91 9999999999</h6>
                </div>
                <div className="contactUs__icon">
                    <MailIcon style={{fill: "#13524a"}}/>
                    <h6>humbleinfo@gmail.com</h6>
                </div>
            </div>

=======
    return (
        <div className='contactUs'>
                <Fade bottom distance='200px' duration={1000}>
                <div className="contactUs__left">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam voluptates blanditiis optio voluptatibus repudiandae modi, officiis amet tempore dolorem illum excepturi autem eligendi praesentium. Vero molestias architecto qui ducimus.</p>
                    <div className="contactUs__icon">
                        <CallIcon style={{fill: "#13524a"}}/>
                        <h6>+91 9999999999</h6>
                    </div>
                    <div className="contactUs__icon">
                        <MailIcon style={{fill: "#13524a"}}/>
                        <h6>humbleinfo@gmail.com</h6>
                    </div>
                </div>
            </Fade>
            <Fade right distance='100px'duration={1000} delay={500}>
>>>>>>> Krishna
            <div className="contactUs__right">  
                <form className="form" onSubmit={handleSubmit}>
                    <h4>Your Name</h4>
                    <input type="text" placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} />
                    <h4>Your Email</h4>
                    <input type="text" placeholder='Enter your email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h4>Message</h4>
                    <textarea type="text" placeholder='Type your message...' value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                    {/* <div className="contactUs__button">
                        <Button title='Send Message' />
                    </div> */}
                    <button
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
<<<<<<< HEAD
            
=======
            </Fade>
>>>>>>> Krishna
        </div>
    )
}

export default ContactUs
