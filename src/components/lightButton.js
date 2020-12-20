import React from 'react';

const LightButton = ({ onClickLight }) => {
    return (
        <button onClick={onClickLight}>
            Update Light
        </button>
    )
}


export default LightButton;