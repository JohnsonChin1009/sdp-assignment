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
    <div className={style.container}>
      {filteredData.map((student) => (
        <div
          className={style.row1}
          key={student.tp_number}
          onClick={() => handleClick(student.tp_number)} // Add onClick event handler
        >
          <div className={style.image}></div>
          <a href="http://localhost:3000/ProfileStuAssign">
            <div>{student.name}<br />{student.tp_number}<br/>{student.intake_code}<br />{student.field_of_study}
            </div></a>
            <div><a href="http://localhost:3000/ProfileStuAssign">
              <b>{student.title}</b>
              <br/>
              <br />
              {student.supervisor_name || student.supervisor}
              <br />
              {student.second_marker_name || student.second_marker}</a>
            </div>
        </div>
        ))}
    </div>
    );
  };

  
