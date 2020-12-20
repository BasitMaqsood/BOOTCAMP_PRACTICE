import React from 'react';

const Card = () => {
    return (
        <div style={{ width: 500, height: 300, background: '#077b8a', padding: 20, margin: 20, color: 'white' }}>
            <div style={{ height: 30, backgroundColor: '#a2d5c6' }}><h3 style={{ textAlign: 'center', color: '#322514' }}>This is Heading </h3></div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h5>Here is content Body</h5>
                    <p>Here is body Text</p>
                </div>
            </div>
        </div>
    )
}

export default Card;