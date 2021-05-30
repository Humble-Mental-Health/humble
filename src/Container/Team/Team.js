import React from 'react'
import TeamIndi from '../../Components/TeamIndi/TeamIndi'
import ved from '../../assets/team/ved.jfif'
import abhishek from '../../assets/team/abhishek.jfif'
import alankrit from '../../assets/team/alankrit.jfif'
import arun from '../../assets/team/arun.jpg'
import faizan from '../../assets/team/faizan.jfif'
import isha from '../../assets/team/isha.jfif'
import jigisha from '../../assets/team/jigisha.jfif'
import kshitij from '../../assets/team/kshitij.jfif'
import sahil from '../../assets/team/sahil.jfif'
import vasu from '../../assets/team/vasu.jfif'
import './Team.css'

function Team() {
    return (
        <div className='teampage'>
            <hr style={{borderColor: "#838383", opacity:"0.3"}}></hr>
                <div className="content">
                    <p className="textType1" style={{lineHeight:"0.9" }}>It’s all about<b><br />the People</b></p>
                </div>
            <h1></h1>
            <p className='textType2'>We are good ones. And so are our customers. We wouldn’t have it any other way.<b><br />Meet the team.</b></p>
            <div className="teampage__col">
                <div className="teampage__row">
                    <TeamIndi name='Arun' image={arun} position='Founder' />
                    <TeamIndi name='Sahil' image={sahil} position='Founder' />
                    <TeamIndi name='Ved Vyapak' image={ved} position='Design Head' />
                </div>
            </div>
            
            <div className="teampage__col">
                <div className="teampage__row">
                    <TeamIndi name='Vasu Aggarwal' image={vasu} position='Web-Developer' />
                    <TeamIndi name='Isha Singh Rajpoot' image={isha} position='Social Media Manager' />
                    <TeamIndi name='Abhishek Purohit' image={abhishek} position='Web-Developer' />
                </div>
            </div>
            <div className="teampage__col">
                <div className="teampage__row">
                    <TeamIndi name='Alankrit' image={alankrit} position='Illustrator' />
                    <TeamIndi name='Jigisha' image={jigisha} position='Content Writer' />
                    <TeamIndi name='Kshitij Rawat' image={kshitij} position='Illustrator' />
                </div>
            </div>
        </div>
    )
}

export default Team
