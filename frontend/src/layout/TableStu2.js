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
          <div className={style.row1} key={item.id}>
            <div className={style.image}></div>
            <a href="http://localhost:3000/ProfileStuAssign"><div>{item.name}<br/>{item.tp_number}<br/>{item.field_of_study}</div>
            <div><b>{item.title}</b><br/><br/>{item.supervisor}<br/>{item.secondmarker}</div></a>
          </div>
        )}
      </div>
    );
  };

  return <DataList />;
}
