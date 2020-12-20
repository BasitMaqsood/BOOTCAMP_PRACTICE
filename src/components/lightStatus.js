import React from 'react';

const LightStatus = ({ isLight }) => {
    return (
        <div>
            {isLight ? (<h6>Light is On</h6>) : <h6>Ligh is Off</h6>}
        </div>
    )
}

export default LightStatus;