import style from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getLecturers } from '@/pages/api/api';

export default function TableStaff() {
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const lecturers = await getLecturers();
          setData(lecturers);
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
                    <div><a href="http://localhost:3000/StuSupProfile">{item.name}<br/><br/>{item.field_of_study}</a></div>                                      
                    </div>
                ))}
              </div>
            
       
        
    )}