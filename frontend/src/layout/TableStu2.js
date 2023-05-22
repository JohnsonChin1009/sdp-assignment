import style from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { getPMOwnStudents } from '@/pages/api/api';
import { useRouter } from 'next/router';

export default function Home({search}) {
  const router = useRouter();

  
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          const students = await getPMOwnStudents(token);
          setData(students);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);

    const handleClick = (tpNumber) => {
      localStorage.setItem('tp_number', tpNumber);
      router.push('/ProfileStuAssign');
    };

    const filteredData = data.filter((student) => {
      return student.name.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className={style.content}>
      
      {filteredData.map((student) => (
        <div
                    
          key={student.tp_number}
          onClick={() => handleClick(student.tp_number)} // Add onClick event handler
        >          
          
          <table  border="{10px}">
          <a href="http://localhost:3000/ProfileStuAssign">
            
              <td width="300px|100%">
                <tr><h3>{student.name}</h3><br />{student.tp_number}<br/>{student.intake_code}<br />{student.field_of_study}</tr>
              </td>
              <td width="500px|100%">
                <tr> <div className={style.word10}>{student.title}</div></tr>
              </td>
              <td width="350px|100%">
                <tr>Supervisor: {student.supervisor_name || student.supervisor}
              <br />
              Second Marker: {student.second_marker_name || student.second_marker}</tr>
              </td>
            
              
            </a></table>
            
        
        </div>
        ))}
    
    </div>
    );
  };

  
