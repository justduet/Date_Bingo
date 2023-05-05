import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../../App.css';
import CloudImg from '../cloud-background.png'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up 
        const user = userCredential.user;
        console.log('New user created: ', user);
        // Redirect the user to a different page
        window.location.href = '/gallery';
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  return (
    
    <div className="form-container">
      <img className = "cloud-background" src = {CloudImg} alt= "clouds"/>
      <div className="form">
        <div className="content">
          <h1>WELCOME</h1>
          <form onSubmit={handleSubmit}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
          <p className="mt-3">Already a member? <Link to="/login">Log in here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
