import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or authenticate user here
    if (username === 'admin' && password === 'password') {
      // Login successful, redirect to dashboard or home page
      document.write("hwloi")
    } else {
      setError('Invalid username or password');
      console.log(username);
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="gmail"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div>
        {/* <text>{username}</text> */}
      </div>
    </div>
  );
}

export default Login;