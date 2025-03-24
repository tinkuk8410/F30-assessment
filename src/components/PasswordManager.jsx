import React, { useState } from 'react';

function PasswordManager() {
    const [websites, setWebsites] = useState([]);
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswords, setShowPasswords] = useState(false);

    const addWebsite = (e) => {
        e.preventDefault();
        if (!website || !username || !password) return;

        setWebsites([...websites, { id: Date.now(), website, username, password }]);
        setWebsite('');
        setUsername('');
        setPassword('');
    };

    const deleteWebsite = (id) => {
        setWebsites(websites.filter(site => site.id !== id));
    };

    return (
        
        <main style={{
            height: '50vh',
            width: '100%',
            padding: '10px',
            flex: 1,
            boxSizing: 'border-box'
        }}>
            <div>
            <form
                
                onSubmit={addWebsite}
                style={{
                    backgroundImage: 'url(/lockbg.jpg)',
                    backgroundSize: 'cover',
                    borderRadius:'10px',
                    padding:'50px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '20px',                    
                    marginLeft: '40px',
                    marginRight: '40px'
                }}  
            >   
            <div style={{
                        
                        padding: '20px',
                        backgroundColor:'lightblue',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        width: '50%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end' // Aligns button to the right
                       
                    }}>
                        <h4 style={{ alignSelf: 'flex-start' }}>Add New Password</h4>
                <input
                    placeholder="Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    style={{
                        marginBottom: '10px',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                />
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        marginBottom: '10px',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        marginBottom: '10px',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '8px',
                        background: '#007bff',
                        color: 'white',
                       
                        justifyContent: 'end',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '20%',
                        boxSizing: 'border-box'
                    }}
                    onMouseOver={e => e.target.style.background = '#0056b3'}
                    onMouseOut={e => e.target.style.background = '#007bff'}
                >
                    Add
                </button>
                </div>
            </form>
            
            </div>

            <div style={{
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '4px',
                
                height: '40vh',
                
                boxSizing: 'border-box',
                marginLeft: '40px',
                marginRight: '40px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px',
                    width: '100%'
                }}>
                    <h2 style={{ margin: 0, fontSize: '18px' }}>
                        Passwords ({websites.length})
                    </h2>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input
                            type="checkbox"
                            checked={showPasswords}
                            onChange={() => setShowPasswords(!showPasswords)}
                        />
                        Show Passwords
                    </label>
                </div>

                {!websites.length ? (
                    <p style={{
                        textAlign: 'center',
                        color: '#666',
                        margin: '20px 0',
                        width: '100%'
                    }}>
                        No passwords saved
                    </p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                        {websites.map(site => (
                            <li
                                key={site.id}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '10px 0',
                                    borderBottom: '1px solid #eee',
                                    width: '100%'
                                }}
                            >
                                <span style={{
                                    width: '30px',
                                    height: '30px',
                                    background: '#007bff',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    flexShrink: 0
                                }}>
                                    {site.website[0]}
                                </span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <p style={{ margin: '3px 0', overflow: 'hidden', textOverflow: 'ellipsis' }}>{site.website}</p>
                                    <p style={{ margin: '3px 0', overflow: 'hidden', textOverflow: 'ellipsis' }}>{site.username}</p>
                                    <p style={{ margin: '3px 0', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {showPasswords ? site.password : '••••••'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => deleteWebsite(site.id)}
                                    style={{
                                        width: '25px',
                                        height: '25px',
                                        background: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                    onMouseOver={e => e.target.style.background = '#b02a37'}
                                    onMouseOut={e => e.target.style.background = '#dc3545'}
                                >
                                    x
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}

export default PasswordManager;