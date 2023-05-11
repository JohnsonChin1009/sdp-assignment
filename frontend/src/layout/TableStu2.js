import style from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getPMOwnStudents } from '@/pages/api/api';

export default function Home() {
  const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token'); //Retrieving token from local storage)
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
        {data&& (
          <div className={style.row1} key={data.id}>
            <div className={style.image}></div>
            <a href="http://localhost:3000/ProfileStuAssign"><div>{data.name}<br/>{data.tp_number}<br/>{data.field_of_study}</div>
            <div><b>{data.title}</b><br/><br/>{data.supervisor}<br/>{data.secondmarker}</div></a>
          </div>
        )}
      </div>
    );
  };

  return <DataList />;
}
