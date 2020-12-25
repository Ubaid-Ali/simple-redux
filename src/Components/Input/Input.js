import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementAction, decrementAction } from '../Redux/Action'
import './Input.css';


const Input = () => {

    const [userNumber, setUserNumber] = useState(0);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let val = Number(e.target.value)
        setUserNumber(val);
    }

    return (
        <div className='input-container'>

            <div className='buttons'>
                <button onClick={() => dispatch(incrementAction())} >INCREMENT</button>
                <button onClick={() => dispatch(decrementAction())} > DECREMENT</button>
            </div>
            <input onChange={handleChange} type='number' />
            <button
                onClick={() => dispatch({ type: 'USER_NUMBER', payload: { value: userNumber } })}
            >
                Payload
            </button>
            <p>Input Component</p>
        </div>
    )
}

export default Input;