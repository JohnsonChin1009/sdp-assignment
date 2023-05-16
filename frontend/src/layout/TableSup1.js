
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getStudentSup } from '@/pages/api/api';
import { getStudentSec} from '@/pages/api/api';
import { useRouter } from 'next/router';


export default function Table() {
  const [data, setData] = useState([]);
  const [students, setData1] = useState([]);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('');  
    
    useEffect(() => {      
        fetchData();
        fetchData1();

    }, []);
    const fetchData = async () => {
        
      try {
            const token = localStorage.getItem('token'); //Retrieving token from local storage)
            const student = await getStudentSup(token);           
            setData(student);
    } catch (error) {
        console.log('Error fetching data: ', error);
    }
  };
  const fetchData1 = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      const students = await getStudentSec(token);
      setData1(students);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };
    const handleClick = (tpNumber) => {
      localStorage.setItem('tp_number', tpNumber);
      console.log(tpNumber);
      router.push('/ProfileLecStu');
    };
    
    
    return ( 
<div className={styles.content9}>
      <form action="" className={styles.box12}>
          Supervise: 
          
            <select name="student" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
            <option value="-">All</option>{data.map((data)=>(
            <option value={data.id} key={data.id}>{data.name}</option> ))}
          </select>
         
      </form>
      
      <form className={styles.box12}>
        Mark:
        
            <select name="student" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
            <option value="-">All</option>{students.map((data1)=>(
            <option value={data1.id} key={data1.id}>{data1.name}</option>))}
          </select>
          
      </form><br/><br/><br/><br/><br/>
      <div className={styles.contentbox3}>
      <div className={styles.container1}>
        Supervise:<br/><br/>
                {data.length ===0 ? (<p className={styles.text3}>No Students assigned yet</p>) :( data.map((data) => (
                  <div className={styles.row} key={data.id} onClick={()=>handleClick(data.tp_number)}>
                    <div className={styles.content10}> 
                    <div className={styles.image}></div>
                    <a href="http://localhost:3000/ProfileLecStu"><div onClick={()=>handleClick(data.tp_number)} ><br/>{data.name}<br/>{data.tp_number}<br/>{data.intake_code}</div></a>  
                    <div><br/>{data.title}<br/><br/>{data.supervisor}<br/>{data.secondmarker}</div>
                    <div><br/>Proposal: {data.Pro}<br/>IR: {data.IR}<br/>Documentation: {data.Doc}<br/>Presentation: {data.Pre}</div>                       
                  </div>
                  </div>
                )))}
        Mark:<br/>
                {students.length ===0 ? (<p className={styles.text3}>No Students assigned yet</p>) :(students.map((row) => (
                  <div className={styles.row} key={row.id} onClick={()=>handleClick(row.tp_number)}>
                    <div className={styles.content10}>
                    <div className={styles.image}></div>
                    <a href="http://localhost:3000/ProfileLecStu"><div onClick={()=>handleClick(row.tp_number)} ><br/>{row.name}<br/>{row.tp_number}<br/>{row.intake_code}</div></a>  
                    <div><br/>{row.title}<br/><br/>{row.supervisor}<br/>{row.secondmarker}</div>
                    <div><br/>IR: <br/>Documentation: <br/>Presentation: <br/></div>   
                    <div><br/><br/><div className={styles.button7}><a href=""><button>Update</button></a></div></div>           
                    </div>                       
                  </div>
                )))}
              </div>
              </div>
        
</div>

)
}