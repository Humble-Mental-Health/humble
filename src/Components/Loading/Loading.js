import React from 'react'
import './Loading.css'
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
    return (
        <div className='loading'>
            <BounceLoader color= '#36D7B7' size={100} />
        </div>
    )
}

export default Loading
