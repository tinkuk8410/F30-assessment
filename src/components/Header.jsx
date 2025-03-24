import React from 'react';

function Header() {
    return (
        <header style={{
            padding: '20px',
            background: '#f8f9fa',
            borderBottom: '1px solid #eee',
            width: '100%',
            height:'10vh',
            boxSizing: 'border-box'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#333',
                margin: 0
            }}>
                Password Manager
            </h1>
        </header>
    );
}

export default Header;