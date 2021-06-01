import React from 'react'
import './Button.css'

function Button({onClick, title}) {

    console.log(onClick)
    return (
        <div>
            {onClick ? (
                <button onclick={onClick}>{title}</button>
            ): (
                <button>{title}</button>
            )}
            
        </div>
    )
}

export default Button
