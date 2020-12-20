import React from 'react';

const Button = ({ onClickCount, counter }) => {
    return (
        <button onClick={() => onClickCount(++counter)}>
            Update Count
        </button>
    )
}

export default Button;