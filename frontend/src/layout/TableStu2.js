import style from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/students');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className={style.container}>
        {data.map((item) => (
          <div className={style.row1} key={item.id}>
            <div className={style.image}></div>
            <div>{item.name}<br/>{item.tp_number}<br/>{item.field_of_study}</div>
            <div><b>{item.fyp_title}</b><br/><br/>{item.supervisor}</div>
          </div>
        ))}
      </div>
    );
  };

  return <DataList />;
}
