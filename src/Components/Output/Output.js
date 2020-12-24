import React from 'react';
import { useSelector } from 'react-redux';




const Output = () => {

    const counter = useSelector(state => state.counter);
    console.log('counter ', counter)

    return (
        <div>
            <p>Output Component Counter is:</p>
            <h4> Counter value is {counter} </h4>
        </div>
    )
}

export default Output
