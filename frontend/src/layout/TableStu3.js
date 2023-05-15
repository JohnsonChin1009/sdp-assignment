import style from '@/styles/Home.module.css'
import{ useEffect, useState } from 'react'
import { getSupOwnStudents } from '@/pages/api/api';
import { deleteStudent } from '@/pages/api/api';

export default function Table() {
  const [data, setData] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const students = await getSupOwnStudents();
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
                {data && data.length ===0 ? (<p className={style.text4}>No students assigned</p>):(data.map((student)=>(
                  <div className={style.row1} key={student.id}>
                    <div className={style.image}></div>
                    <div>{student.name} <br/>{student.tp_number}<br/>{student.intake_code}</div>
                    <div><b>{student.title}</b><br/><br/>{student.supervisor}<br/>{student.secondmarker}</div>
                    <div><button onClick={() => handleRemoveStudent(student.tp_number)}>Remove</button></div>
                  </div>
                ))
                  
                )}
                <br/>
                
              </div>
              
            
       
        
    )}