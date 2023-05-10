import style from '@/styles/Home.module.css'
import{ useEffect, useState } from 'react'
import { getStudents } from '@/pages/api/api';

export default function Table() {
  const [data, setData] = useState([]);

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


    return (
        
              <div className={style.container1}>
                {data.map((item) => (
                  <div className={style.row1} key={item.id}>
                    <div className={style.image}></div>
                    <div>{item.name} <br/>{item.tp_number}</div>
                    <div>{item.fyp_title}<br/><br/>{item.supervisor}<br/>{item.secondmarker}</div>
                    <div><button>Remove</button></div>
                  </div>
                ))}
                <br/>
                <div><button className={style.button8}>+</button></div>
              </div>
              
            
       
        
    )}