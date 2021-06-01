import React from 'react'
import './loader.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import HashLoader from "react-spinners/HashLoader";
 
const Loader = () => {
    return (
        <div className='loader'>
            <HashLoader color= '#36D7B7' size={100} />
        </div>
    )
}

export default Loader
