import React, { useReducer } from 'react';
import CounterReducer from '../CounterReducer';

const Child2 = () => {
    const [state, dispatch] = useReducer(CounterReducer, 1);
    return (
        <div>
            <h2>This is second Child of Counter Reducer</h2>

            <h3 style={{ backgroundColor: 'blue', padding: 50, color: 'white' }}>Value of reducer state is: {state}</h3>
            <button onClick={() => dispatch('INCREMENT')} style={{ width: '50%', height: '100%', color: 'white', background: 'green', padding: 50, cursor: 'pointer' }}>Update Count v.i.a REDUCER </button>

        </div>

    )
}

export default Child2;