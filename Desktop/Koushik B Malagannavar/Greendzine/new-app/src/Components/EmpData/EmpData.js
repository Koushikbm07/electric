import React, { useState } from 'react';
import BottomNav from '../BottomNav/BottomNav';
import styles from './EmpData.module.css';
import LoginWithNav from '../LoginwithNav/LoginwithNav';

const getStyle=(id)=>{
  if(id%2===0){
    return(
      {
        
      }
      
    )
  }
};

const EmpDetails = () => {
  const empData = [
    {
      EMP_ID: 1,
      Name: "Arjun",
      DOB: "16 - 11 - 2000",
      Role: "Software Engineer",
    },
    {
      EMP_ID: 2,
      Name: "Mahesh",
      DOB: "16 - 11 - 2000",
      Role: "Software",
    },
      // {
      //   EMP_ID: 3,
      //   Name: "abc",
      //   DOB: "16 - 11 - 2000",
      //   Role: "Software Engineer",
      // },
      // {
      //   EMP_ID: 4,
      //   Name: "yae",
      //   DOB: "16 - 11 - 2000",
      //   Role: "Software",
      // },
      // {
      //   EMP_ID: 1,
      //   Name: "qwerty",
      //   DOB: "16 - 11 - 2000",
      //   Role: "Software Engineer",
      // },
      // {
      //   EMP_ID: 2,
      //   Name: "kjhg",
      //   DOB: "16 - 11 - 2000",
      //   Role: "Software",
      // },
      // {
      //   EMP_ID: 1,
      //   Name: "poui",
      //   DOB: "16 - 11 - 2000",
      //   Role: "Software Engineer",
      // },
      // {
      //   EMP_ID: 2,
      //   Name: "zxcv",
      //   DOB: "16 - 11 - 2000",
      //   Role: "Software",
      // }
  ];

  const [search, setSearch] = useState('');

  const filteredEmpData = empData.filter(item =>
    item.Name.toLowerCase().includes(search.toLowerCase())
  );

  // const handleClearFilter = () => {
  //   setSearch('');
  // };

  return (
    <div>
      <LoginWithNav/>
      <div className={styles.emp}>
      <input
        type="search"
        placeholder="Search with name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className={styles.emp_container}>
        <div>
          {search ? (
            filteredEmpData.map((item, id) => (
               
              <div key={id} id={getStyle(id)} className={styles.emp_item}>
               
               <span id={styles.role_no}>{item.EMP_ID}</span>
               <h5>EMP ID : <span className={styles.right} id={styles.emp_id}> {item.EMP_ID}</span> </h5>
               <h5>Name :   <span className={styles.right}  id={styles.name}> {item.Name}</span> </h5>
                <h5 >DOB : <span className={styles.right} id={styles.dob}>{item.DOB}</span> </h5>
                <h5 >Role : <span className={styles.right} id={styles.role}> {item.Role}</span>  </h5>
              </div>
            ))
          ) : (
            empData.map((item, id) => (
              <div key={id} className={styles.emp_item}>
                <span id={styles.role_no}>{item.EMP_ID}</span>
               <h5>EMP ID : <span className={styles.right} id={styles.emp_id}> {item.EMP_ID}</span> </h5>
               <h5>Name :   <span className={styles.right}  id={styles.name}> {item.Name}</span> </h5>
                <h5 >DOB : <span className={styles.right} id={styles.dob}>{item.DOB}</span> </h5>
                <h5 >Role : <span className={styles.right} id={styles.role}> {item.Role}</span>  </h5>
              </div>
            ))
          )}
        </div>
      </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default EmpDetails;
