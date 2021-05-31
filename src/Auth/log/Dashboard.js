import React, { useEffect, useState } from 'react'
import './log.css'
import Contact from './Contact';
import {db} from '../../Config/firebase'

function Dashboard({handleLogout}) {


    const [contacts, setContacts] = useState([])

    useEffect(() => {
        db.collection('contacts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setContacts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))
    }, [])

    console.log(contacts)

    return (
        <div className='dashboard'>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className='dashboard__content'>
                {contacts.map(({id, data: { name, message, email }})=>(
                <Contact
                    id={id}
                    name={name}
                    message={message}
                    email={email}
                />    
                ))}
            </div>
        </div>
    )
}

export default Dashboard
