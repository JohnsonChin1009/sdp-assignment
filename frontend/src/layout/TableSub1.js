import style from '@/styles/Home.module.css'
import { getAllResults } from '@/pages/api/api';
import { useEffect, useState } from 'react'
import { UpdateLecStuResults } from '@/pages/api/api';

export default function Home() {  
    const [data, setData] = useState([]);
    const [newValue, setNewValue] = useState([]);
    
    
    useEffect(() => {    
    
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const students = await getAllResults();
        setData(students);
        console.log(students);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    const updateValue = async()=>{
      try{
        const token = localStorage.getItem('token'); //Retrieving token from local storage)
        const update1 = await UpdateStuResults(token, newValue)
        setData(update1);
        fetchData();
        alert("Successfully update!");
      }catch(error){
        console.log('Error updating value: ', error);
      }
    }
    
    return (
        
              <div className={style.container1}>
                {data.map((row) => (
                  <div className={style.row1} key={row.id}>
                    <div className={style.image}></div>
                    <div><br/>{row.tp_number}<br/><b>{row.title}</b></div>
                    <div><br/><br/>Mark: {row.firstmark}<br/></div>
                    <div>Update value:<br/><input type="text"  value={newValue}onChange={(e => setNewValue(e.target.value))}/>
                    <br/><button className={style.button6} onClick={updateValue}>Done</button></div>                    
                  </div>
                ))}
              </div>
            
       
        
    )
  }