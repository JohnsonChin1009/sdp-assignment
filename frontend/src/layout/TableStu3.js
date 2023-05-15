import style from '@/styles/Home.module.css'
import{ useEffect, useState } from 'react'
import { getLecturerOwnStudents } from '@/pages/api/api';
import { deleteStudent } from '@/pages/api/api';

export default function Table() {
  const [data, setData] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const students = await getLecturerOwnStudents();
          setData(students);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);
     
     const handleRemoveStudent = async (tp_number) => {
      try {
        const response = await deleteStudent(tp_number);
        setData(data.filter((student) => student.tp_number !== tp_number));
      } catch (error) {
        console.log('Error deleting student: ', error);
      }
    };

    return (
        
              <div className={style.container1}>
                {data.length ===0 ? (<p className={style.text4}>No students assigned</p>) :(data.map((data)=>(
                  <div className={style.row1} key={data.id}>
                    <div className={style.image}></div>
                    <div>{data.name} <br/>{data.tp_number}<br/>{data.intake_code}</div>
                    <div><b>{data.title}</b><br/><br/>{data.supervisor}<br/>{data.secondmarker}</div>
                    <div><button onClick={() => handleRemoveStudent(data.tp_number)}>Remove</button></div>
                  </div>
                )))}
                <br/>
                
              </div>
              
            
       
        
    )}