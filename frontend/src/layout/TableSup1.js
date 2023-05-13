
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getResult } from '@/pages/api/api';
export default function Table() {
  const [data, setData] = useState([]);
    
    
    useEffect(() => {
      const fetchData = async () => {
          try {
                const token = localStorage.getItem('token'); //Retrieving token from local storage)
                const student = await getStudentProfile(token);
                setData(student);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
      };
        fetchData();

    }, []);
    return (
<div className={styles.content9}>
      <form action="" className={styles.box12}>
          Supervise: 
          <select name="student" >
            <option value="-">All</option>
            <option value=""></option>
          </select>
      </form>
      
      <form className={styles.box12}>
        Mark:
        <select>
            <option value="-">All</option>
        </select>
      </form><br/><br/><br/><br/><br/>
      <div className={styles.container1}>
                {data.map((row) => (
                  <div className={styles.row} key={row.id}>
                    <div className={styles.image}></div>
                    <div><br/>{row.name}<br/>{row.tp_number}<br/>{row.intake_code}</div>
                    <div><br/>{row.title}<br/><br/>{row.supervisor}<br/>{row.secondmarker}</div>
                    <div><br/>IR: <br/>Documentation: <br/>Presentation: <br/></div>      
                    <div><br/><br/><div className={styles.button7}><a href=""><button>Edit</button></a></div></div>                                  
                  </div>
                ))}
              </div>
        
</div>

)
}