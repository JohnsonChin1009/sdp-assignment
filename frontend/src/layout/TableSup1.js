
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getSupOwnStudent } from '@/pages/api/api';
import { useRouter } from 'next/router';
export default function Table() {
  const [data, setData] = useState([]);
  const router = useRouter();
    
    
    useEffect(() => {
      const fetchData = async () => {
        
          try {
                const token = localStorage.getItem('token'); //Retrieving token from local storage)
                const student = await getSupOwnStudent(token);
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
      router.push('/ProfileLecStu');
    };
    const filteredData = data.filter((student) => {
      return student.name.toLowerCase().includes(search.toLowerCase());
    });

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
                {filteredData.map((row) => (
                  <div className={styles.row} key={row.id} onClick={()=>handleClick(row.tp_number)}>
                    <div className={styles.image}></div>
                    <a href=""><div onClick={()=>handleClick(row.tp_number)} ><br/>{row.name}<br/>{row.tp_number}<br/>{row.intake_code}</div></a>  
                    <div><br/>{row.title}<br/><br/>{row.supervisor}<br/>{row.secondmarker}</div>
                    <div><br/>IR: <br/>Documentation: <br/>Presentation: <br/></div>   
                    <div><br/><br/><div className={styles.button7}><a href=""><button>Update</button></a></div></div>                                  
                  </div>
                ))}
              </div>
        
</div>

)
}