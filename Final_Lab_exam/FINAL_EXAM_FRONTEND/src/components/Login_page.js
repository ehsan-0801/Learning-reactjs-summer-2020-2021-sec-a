import React, { useState } from 'react';

const Login = ({ leUserLogin }) => {
  const [username, setUsername] = useState('');

  const loginUser = (e) => {
    if (!username) return alert('enter your username');
    e.preventDefault();
    leUserLogin(username);
  };

  return (
      <form onSubmit={loginUser}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' name='username' id='' />
        <label>Password</label>
        <input type='password' name='password' id='' />
        <button>Login</button>
      </form>
  );
};

export default Login;
