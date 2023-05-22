import style from '@/styles/Home.module.css'
import{ useEffect, useState } from 'react'
import { getSupOwnStudents } from '@/pages/api/api';
import { getSecOwnStudents } from '@/pages/api/api';


export default function Table() {
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');    
    useEffect(() => {
     

      fetchData();
      fetchData1();
    }, []);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('id');
        console.log(token);
        const students = await getSupOwnStudents(token);
        setData(students);        
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    const fetchData1 = async () => {
      try {
        const token = localStorage.getItem('id');
        console.log(token);
        const students = await getSecOwnStudents(token);
        setData1(students);        
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
     
     

    return (
        
              <><div className={style.content3a}>
                    <h2> Supervise:</h2><br/> <br/>      
              
        {data.length === 0 ? (<p className={style.text4}>No students assigned</p>) : (data.map((data) => (
          <table border="{10px}"> 
          <tbody key={data.id}>
            <td width="300px|100%">
              <tr><div>{data.name} {data.tp_number}{data.intake_code}</div></tr>              
            </td>
            <td >
              <tr><div><b>{data.title}</b><br /><br /></div></tr>
            </td>          
          </tbody>
          </table>
        )))}
        
        
        <br /><br />
      </div><div className={style.content3a}>
      <h2>Mark:</h2><br/>
      
          {data1.length === 0 ? (<p className={style.text4}>No students assigned</p>) : (data1.map((data1) => (
             <table border="{10px}"> 
             <tbody key={data1.id}>
               <td width="300px|100%">
                 <tr><div>{data1.name} {data1.tp_number}{data1.intake_code}</div></tr>              
               </td>
               <td >
                 <tr><div><b>{data1.title}</b><br /><br /></div></tr>
               </td>
               </tbody>
               </table>
          )))}
          <br />
          
        </div></>
              
            
       
        
    )}