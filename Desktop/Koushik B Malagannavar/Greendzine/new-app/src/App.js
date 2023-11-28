import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StatPage from "./Components/StatPage/StatPage.js";
import EmpData from "./Components/EmpData/EmpData.js";
import "./App.css";
import LoginWithNav from "./Components/LoginwithNav/LoginwithNav.js";

function App() {

  console.log("Started")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Example: Check credentials (replace with actual authentication logic)
    if (email === "kartik@gmail.com" && password === "123456") {
      setIsLoggedIn(!isLoggedIn);
      
      setUser(email);
      // return <Navigate to="/stats"></Navigate>;
    } else {
      alert("Invalid credentials");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <div>
            
            <Routes>
              <Route path="/employees" element={<EmpData />} />
              <Route path="/stats" element={<StatPage />} />
              <Route path="/" element={<StatPage />} />
              
            </Routes>   

          </div>
        ) : (
          <div className="login-container">
          
          <img className="logo" src="Group 3.png" alt="logo"></img>
          <h1>We are Electric</h1>
          <form onSubmit={handleLogin}>
            <input
            
              name = "email"
              id="1"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            
            <input
              
              name="password"
              id='2'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <a to="#">forgot Password?</a>
          </form>
          </div>
          
        )}
      </div>
    </Router>
  );
}

export default App;
