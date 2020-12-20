import React from 'react';

const Card2 = () => {
    return (
        <div style={{ width: 500, height: 300, background: '#077b8a', padding: 20, margin: 20, color: 'white' }}>
            <div style={{ backgroundColor: '#a2d5c6', borderRadius: '50%', width: 200, height: 200, margin: 'auto', marginTop: '-87px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ textAlign: 'center', color: '#322514' }}>
                        This is Heading
                    </h3>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h5>Here is content Body</h5>
                    <p>Here is body Text</p>
                </div>
            </div>
        </div>
    )

}

export default Card2;