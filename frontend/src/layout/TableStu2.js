import style from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { getPMOwnStudents } from '@/pages/api/api';

export default function Home() {
  const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          const students = await getPMOwnStudents(token);
          setData(students);
          console.log(students);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className={style.container}>
        {data.map((student) => (
          <div className={style.row1} key={student.tp_number}>
            <div className={style.image}></div>
            <a href="http://localhost:3000/ProfileStuAssign">
              <div>
                {student.name}
                <br />
                {student.tp_number}
                <br />
                {student.field_of_study}
              </div>
              <div>
                <b>{student.title}</b>
                <br />
                <br />
                {student.supervisor}
                <br />
                {student.secondmarker}
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };
  return <DataList />;
}