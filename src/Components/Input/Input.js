import React from 'react'
import './Input.css'


const Input = ({ counter, setCounter }) => {

    return (
        <div className='input-container'>

            <div className='buttons'>
                <button onClick={() => setCounter(counter + 1)} >INCREMENT</button>
                <button onClick={() => setCounter(counter - 1)} >DECREMENT</button>
            </div>
            <p>Input Component</p>
        </div>
    )
}

export default Input;