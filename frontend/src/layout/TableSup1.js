
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getLecturerOwnStudent } from '@/pages/api/api';
import { useRouter } from 'next/router';
export default function Table() {
  const [data, setData] = useState([]);
    
    
    useEffect(() => {
      const fetchData = async () => {
          try {
                const token = localStorage.getItem('token'); //Retrieving token from local storage)
                const student = await getLecturerOwnStudent(token);
                setData(student);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
      };
        fetchData();

    }, []);
    const handleClick = (tpNumber) => {
      localStorage.setItem('tp_number', tpNumber);
      console.log(id);
      // router.push('/ProfileLecStu');
    };
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
                  <div className={styles.row} key={row.id} onClick={()=>handleClick(data.tp_number)}>
                    <div className={styles.image}></div>
                    <a href=""><div onClick={()=>handleClick(data.tp_number)} ><br/>{data.name}<br/>{data.tp_number}<br/>{row.intake_code}</div></a>  
                    <div onClick={()=>handleClick(data.tp_number)}><br/>{row.title}<br/><br/>{data.supervisor}<br/>{data.secondmarker}</div>
                    <div onClick={()=>handleClick(data.tp_number)}><br/>IR: <br/>Documentation: <br/>Presentation: <br/></div>   
                    <div><br/><br/><div className={styles.button7}><a href=""><button>Update</button></a></div></div>                                  
                  </div>
                ))}
              </div>
        
</div>

)
}