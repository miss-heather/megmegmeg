import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic (e.g., send signup request to the server)
    // You can access the entered values using the `name`, `email`, and `password` state variables

    // Redirect the user to the index page
    window.location.href = '/index.html';
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic (e.g., send login request to the server)
    // You can access the entered values using the `email` and `password` state variables

    // Redirect the user to the index page
    window.location.href = '/index.html';
  };

  return (
    <div>
      <h2>Signup or Login</h2>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login.html">Login</a></p>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signup;
