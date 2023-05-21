import style from '@/styles/Home.module.css'
import { getResult } from '@/pages/api/api';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';


export default function Home({search}) {  
    const [data, setData] = useState([]);    
    const router = useRouter();        

    useEffect(() => {     
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const students = await getResult(token);     
        console.log(students)  ;
        setData(students);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    
    const handleClick = (tpNumber) => {
      localStorage.setItem('tp_number', tpNumber);
      console.log(tpNumber);
      router.push('/ProfilePMStuResult');
    };
    
    const filteredData = data.filter((student) => {
      return student.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        
              <div className={style.container}>
                {Array.isArray(data) && filteredData.map((row) => (
                  <div className={style.row4} key={row.id} >
                    <div className={style.content11}>                  
                    <div><h3>{row.name}</h3><br/>{row.tp_number}<br/><h3><b>{row.title}</b></h3></div><br/>
                    <div className={style.word11}><b><u>Final Mark:  {row.finalMark || row.finalmark}</u></b><br/></div>                     
                    <br/><button className={style.button6} onClick={()=>handleClick(row.tp_number)}>Update</button></div>                    
                  </div>
                  
                ))}
              </div>
            
       
        
    )
  }