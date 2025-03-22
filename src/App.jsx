// src/App.jsx
import React from 'react';
import Header from './components/Header';
import PasswordManager from './components/PasswordManager';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      width: '100%'
    }}>
      <Header />
      <PasswordManager />
    </div>
  );
}

export default App;