import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = () => {
    return (
        <div>
            <h5>Here is Parent</h5>
            <Child />
            <Child2 />
        </div>
    )
}

export default Parent;