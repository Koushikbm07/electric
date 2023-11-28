import BottomNav from '../BottomNav/BottomNav'

import React from "react";
import LoginwithNav from "../LoginwithNav/LoginwithNav";
import styles from "./StatPage.module.css";

const StatPage = () => {
  const statsData = [
    { label: "Productivity on Monday", percentage: 4 },
    {  label: "Productivity on Tuesday", percentage: 92 },
    {  label: "Productivity on wednesday", percentage: 122 },
    {  label: "Productivity on Thursday", percentage: 93 },
    {  label: "Productivity on Friday", percentage: 89 },
    {  label: "Productivity on Saturday", percentage: 98 },
  ];

  return (
    <div>
      <LoginwithNav />

      <div className={styles.stats_container}>
        
          <p className={styles.emp_header}>Employee Productivity Dashboard</p>
        
        <div className={styles.stats_byday}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.stat_item}>
            <div  className={styles.stat_hori}>
              <p className={styles.stat_label}>{stat.label}</p>
              <p
                className={styles.stat_percentage}
              >{`${stat.percentage}%`}
              </p>
            </div>

            <div className={styles.stat_bar_container}>
              <div
                className={styles.stat_bar}
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
           </div>
        ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default StatPage;
