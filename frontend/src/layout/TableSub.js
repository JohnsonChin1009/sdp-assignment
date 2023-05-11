import style from '@/styles/Home.module.css'
import { getAllResults } from '@/pages/api/api';
import { useEffect, useState } from 'react'

export default function Home() {  
    const [data, setData] = useState([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const students = await getAllResults();
          setData(students);
          console.log(students);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };
    
      fetchData();
    }, []);
    
    return (
        
              <div className={style.container1}>
                {data.map((row) => (
                  <div className={style.row1} key={row.id}>
                    <div className={style.image}></div>
                    <div><br/>{row.name} <br/>{row.tp_number}</div>
                    <div><br/><b>{row.title}</b><br/><br/>Supervisor: {row.supervisor}<br/>SecondMarker: {row.secondmarker}</div>
                    <div><br/>Documentation: <br/>Presentation: <br/>Final Mark: <br/></div>                                        
                    <div><br/><br/><div className={style.button7}><a href=""><button>Edit</button></a></div></div>
                  </div>
                ))}
              </div>
            
       
        
    )
  }