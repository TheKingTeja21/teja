import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase";
import "./Signup.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(()=>{
        alert("success!");
      }).catch((err)=>{
        console.log(err);
      })
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>SIGN IN</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">SIGN UP</button>
        <p>or sign up with</p>
        <div className="social-buttons">
          <button>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button>
            <i className="fab fa-google"></i>
          </button>
          <button>
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </form>
      <p>
        If your not member? <a href="#">log-in</a>
      </p>
    </div>
  </div>
  );
}

export default Login;