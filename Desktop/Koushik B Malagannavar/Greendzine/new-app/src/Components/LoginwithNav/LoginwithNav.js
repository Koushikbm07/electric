// LoginWithNav.jsx
import React, { useState } from 'react';
import styles from './LoginwithNav.module.css'; // Import the CSS file

const LoginWithNav = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on your authentication status
  const [username, setUsername] = useState(props.user); // Replace with actual username

//   const handleLogout = () => {
//     // Implement your logout logic here
//     setIsLoggedIn(false);
//   };

  return (
    <>
      {/* Top-right corner logo */}
      
        
          <img className={styles.top_right_logo} src="call-girl.png" alt="User Logo" onClick={() => alert(`Logged in as ${username}`)} />
          {/* <button onClick={handleLogout}>Logout</button> */}
        
      

      {/* Centered logo */}
      
        <div className={styles.span_div}><span id={styles.num}>4</span></div>
        <img className={styles.centered_logo} src="moptro-logo.png" alt="Center Logo" />
        
    </>
  );
};

export default LoginWithNav;
