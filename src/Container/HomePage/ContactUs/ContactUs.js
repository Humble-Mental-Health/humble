import React, { useState } from 'react'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Button from '../../../Components/Button/Button';
import { db } from "../../../Config/firebase";
import './ContactUs.css';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../Components/Loader/Loader';

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || message === ''){
           return toast.error('Fill up all the fields');
        }
        setLoader(true);

        db.collection("contacts")
        .add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            setLoader(false);
            toast.success("Your response has been submitted");
        })
        .catch((error) => {
            setLoader(false);
            toast.error("We encountered some error while processing your request");
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className='contactUs'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {
                loader?<Loader />:null
            }
            <Fade bottom distance='200px' duration={1000}>
                <div className="contactUs__left">
                    <h1>Contact Us</h1>
                    <p>The world has gone through a pandemic of remorse in past few years. It's high time that we all take charge and start helping each other out. But in case, you need our help, do let us know, We are here for you! ALWAYS!</p>
                    <div className="contactUs__icon">
                        {/* <CallIcon style={{fill: "#13524a"}}/>
                        <h6>+91 9999999999</h6> */}
                    </div>
                    <div className="contactUs__icon">
                        <MailIcon style={{fill: "#13524a"}}/>
                        <h6>contacthumble12@gmail.com</h6>
                    </div>
                </div>
            </Fade>

            <Fade right distance='100px'duration={1000} delay={500}>

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
            </Fade>
        </div>
    )
}

export default ContactUs
