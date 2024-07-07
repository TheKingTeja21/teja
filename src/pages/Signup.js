import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase";
import { setDoc,doc } from "firebase/firestore";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    
    try {
        await createUserWithEmailAndPassword(auth,email, password)
        const user= auth.currentUser;
        console.log(user);
      
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email: user.email,
          name: name
        })
      }
    } catch (error) {
      console.log(error);
      
    }
        
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Is Agreed:", isAgreed);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>SIGN UP</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="form-group">
            <input
              type="checkbox"
              id="agree"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <label htmlFor="agree">
              I've read and agree with terms of services and policy.
            </label>
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
          Already a member? <a href="#">log-in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
