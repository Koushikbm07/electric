import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHome } from 'react-icons/fa';
import styles from './BottomNav.module.css'; // Import the CSS module
import  { useState } from 'react';


const BottomNav = () => {
  
    // State to manage the class name
    const [homeIsActive, setHomeIsActive] = useState(false);
  const [userIsActive, setUserIsActive] = useState(false);

  // Functions to toggle the class names for each Link
  const toggleHomeClassName = () => {
    setHomeIsActive(!homeIsActive);
  };

  const toggleUserClassName = () => {
    setUserIsActive(!homeIsActive);
  };
 
  return (
    <div className={styles.bottomNav}>
      <Link to='/electric/stats' onClick={toggleHomeClassName}  className={` ${homeIsActive ? styles.active : styles.navItem}`}>
        <FaHome size={"30px"} />
      </Link>

      <Link to='/electric/employees'  onClick={toggleUserClassName}    className={` ${homeIsActive ? styles.active : styles.navItem}`}>
        <FaUser size={"30px"} />
      </Link>
    </div>
  );

};

export default BottomNav;
