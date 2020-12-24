import React from 'react'
import { useDispatch } from 'react-redux'
import './Input.css'


const Input = () => {

    const dispatch = useDispatch();

    return (
        <div className='input-container'>

            <div className='buttons'>
                <button onClick={() => dispatch({ type: 'INCREMENT' })} >INCREMENT</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })} > DECREMENT</button>
            </div>
            <p>Input Component</p>
        </div>
    )
}

export default Input;