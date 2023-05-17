import style from '@/styles/Home.module.css'
import { getPMStuResult } from '@/pages/api/api';
import { useEffect, useState } from 'react'
import { UpdateStuResult } from '@/pages/api/api';


export default function Home() {  
    const [data, setData] = useState([]);    
    const [finalMark, setfinalMark] = useState([]);    
    
    
    useEffect(() => {    
    
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)       
        const students = await getPMStuResult(token);
        setData(students);
        console.log(students);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    const updateValue = async()=>{
      try{        
        const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)
        const update1 = await UpdateStuResult(token, finalMark)
        console.log(token);
        setData(update1);
        fetchData();
        alert("Successfully update!");
      }catch(error){
        console.log('Error updating value: ', error);
      }
    }    
    
    return (
        
              <div className={style.content11}>
                { Array.isArray(data) && data.map((data)=>(

                
                  <div className={style.context10} key={data.tp_number}>                    
                    <div><br/>{data.name}<br/>{data.tp_number}<br/><h3><b>{data.title}</b></h3></div>                    
                    <div><br/><br/>First Mark: {data.firstmark}<br/>Second Mark: {data.secondmark}<br/>Final Mark: {data.finalmark}</div>
                    <div>Update Final Mark: <input type="text"  value={finalMark}onChange={(e => setfinalMark(e.target.value))}/>
                    <br/><button className={style.button6} onClick={updateValue}>Update</button></div>                    
                  </div>
                ))}
              </div>
            
       
        
    )
  }