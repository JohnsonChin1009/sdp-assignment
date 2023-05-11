import style from '@/styles/Home.module.css'
import{ useEffect, useState } from 'react'
import { getStudents } from '@/pages/api/api';
import { deleteStudent } from '@/pages/api/api';

export default function Table() {
  const [data, setData] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const students = await getStudents();
          setData(students);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);
     const handleStudentSelection = (event) =>{
      const studentID = event.target.value;
      const isChecked = event.target.checked;
      if(isChecked){
        const student = data.find((student)=> data.id === studentID);
        setSelectedStudents([...selectedStudents,student]);
      }else{
        setSelectedStudents(selectedStudents.filter((student)=>data.id!==studentID))
      }
     }

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
                {data.map((item) => (
                  <div className={style.row1} key={item.id}>
                    <div className={style.image}></div>
                    <div>{item.name} <br/>{item.tp_number}</div>
                    <div>{item.title}<br/><br/>{item.supervisor}<br/>{item.secondmarker}</div>
                    <div><button onClick={() => handleRemoveStudent(item.tp_number)}>
                      Remove</button></div>
                  </div>
                ))}
                <br/>
                <div><button className={style.button8} >+</button></div>
              </div>
              
            
       
        
    )}