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
        
              <div className={style.content}>
                {Array.isArray(data) && filteredData.map((row) => (
                  <table border="{10px}" key={row.id} >
                    <tbody>
                      <td width="300px|100%">
                        <tr><div><h3>{row.name}</h3>{row.tp_number}</div><br/>{row.intake_code}</tr>
                      </td>
                      <td width="400px|100%">
                        <tr><h3><b>{row.title}</b></h3></tr>
                      </td>
                      <td width="300px|100%">
                        <tr><div className={style.word11}><b><u>Final Mark:  {row.finalMark || row.finalmark}</u></b><br/></div>                     </tr>
                      </td>
                      <td width="20px|100%">
                        <tr className={style.button6}  onClick={()=>handleClick(row.tp_number)}> <label >Update</label></tr>
                      </td>
                    </tbody>
                    
                    
                   
                  </table>
                  
                ))}
              </div>
            
       
        
    )
  }