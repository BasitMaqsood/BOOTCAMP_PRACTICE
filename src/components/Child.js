import React, { useContext } from 'react';
import CounterContext from '../CounterContext';

const Child = () => {
    const counterValue = useContext(CounterContext);
    return (
        <div>
            <h5>Here is Child</h5>
            <h4 style={{ backgroundColor: 'blue', padding: 50, color: 'white' }}>Counter Value v.i.a Context API: {counterValue[0]}</h4>
            <button onClick={() => counterValue[1](++counterValue[0])} style={{ width: '50%', height: '100%', color: 'white', background: 'green', padding: 50, cursor: 'pointer' }}>Update Count v.i.a Context API: </button>
        </div>
    )
}

export default Child;