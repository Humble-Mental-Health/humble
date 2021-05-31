import React from 'react'
import './log.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from '../../Config/firebase'
import firebase from 'firebase'

function Contact({id, name, message, email}) {
    function deleteDoc(){
        db.collection("contacts").doc(id).delete()
    }
 

    return (
        <div className="dashboard__indi">
            <div className="dashboard__text">
                <h4>Name: {name}</h4>
                <h6>Email: {email}</h6>
                <p>{message}</p>
                <div><button onClick={deleteDoc}><DeleteIcon/></button></div>
            </div>
        </div>
    )
}

export default Contact
