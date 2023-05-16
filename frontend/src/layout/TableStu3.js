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
        
              <><div className={style.container1}> Supervise:<br/>
        {data.length === 0 ? (<p className={style.text4}>No students assigned</p>) : (data.map((data) => (
          <div className={style.row1} key={data.id}>
            <div className={style.image}></div>
            <div>{data.name} <br />{data.tp_number}<br />{data.intake_code}</div>
            <div><b>{data.title}</b><br /><br /></div>
          </div>
        )))}
        <br />

      </div><div className={style.container1}> Mark:<br/>
          {data1.length === 0 ? (<p className={style.text4}>No students assigned</p>) : (data1.map((data1) => (
            <div className={style.row1} key={data1.id}>
              <div className={style.image}></div>
              <div>{data1.name} <br />{data1.tp_number}<br />{data1.intake_code}</div>
              <div><b>{data1.title}</b><br /><br /></div>
            </div>
          )))}
          <br />

        </div></>
              
            
       
        
    )}