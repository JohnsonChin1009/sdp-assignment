
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
    const handleClick1 = (tpNumber) => {
      localStorage.setItem('tp_number', tpNumber);
      console.log(tpNumber);
      router.push('/ProfileLecStu2');
    };
    
    
    return ( 
<div className={styles.content9}>
      <div className={styles.contentbox3}>
      <h2>Supervise:</h2><br/>
            
                {data.length ===0 ? (<p className={styles.text3}>No Students assigned yet</p>) :( data.map((data, index) => (
                  <table border="{10px}" width="300px | 100%"  key={index} onClick={() => handleClick(data.tp_number, index)}> 
                  <tbody>
                    <><td width="350px|100%">
                    <tr><a href="http://localhost:3000/ProfileLecStu"><div onClick={() => handleClick(data.tp_number, index)}><h3>{data.name}</h3></div></a>  </tr>

                  </td>
                  <td>
                    <tr>{data.tp_number}<br/>{data.intake_code}</tr>
                  </td>
                  <td>
                    <tr>{data.field_of_study}</tr>
                  </td>
                  <td width="450px|100%">
                      <tr> <h3>{data.title}<br /></h3></tr>
                    </td>
                    
                    {/* <td>
                      <tr>
                        <td><div><br/>Proposal: {data.Pro}<br/>IR: {data.IR}<br/>Documentation: {data.Doc}<br/>Presentation: {data.Pre}</div></td>
                      </tr>
                    </td>   */}
                    </>
                    
                   
                     
                    </tbody> 
      </table>
                  
                )))}
                
      </div>
      <div className={styles.content9}>
      <div className={styles.contentbox3b}>
      <h2>Mark:</h2><br/>
      
      
                {students.length ===0 ? (<p className={styles.text3}>No Students assigned yet</p>) :(students.map((row) => (
                  <table border="{10px}" width="500px | 100%" key={row.tp_number} onClick={()=>handleClick1(row.tp_number)}> 
                  <tbody> 
                    <><td width="350px|100%">
                    <tr><a href="http://localhost:3000/ProfileLecStu2"><div onClick={() => handleClick1(row.tp_number)}><h3>{row.name}</h3></div></a>  </tr>
                  </td>
                  <td>
                    <tr>{row.tp_number}<br />{row.intake_code}</tr>
                  </td>
                  <td>
                    <tr>{row.field_of_study}</tr>
                  </td>
                  <td width="450px|100%">
                      <tr><h3 onClick={() => handleClick1(row.tp_number)}>{row.title}<br /></h3></tr>
                    </td>
                    {/* <td>
                      <tr> <div><br/>Proposal: {row.Pro}<br/>IR: {row.IR}<br/>Documentation: {row.Doc}<br/>Presentation: {row.Pre}</div></tr>
                   </td> */}
                    </>                                                                                 
                    </tbody>
              </table>                   
                  
                )))}
                
                
              </div>              
              </div>
              </div>
        
      

)
}