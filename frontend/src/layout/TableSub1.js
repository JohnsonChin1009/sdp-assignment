import style from '@/styles/Home.module.css'
import { getPMStuResult1 } from '@/pages/api/api';
import { getPMStuResult2 } from '@/pages/api/api';
import { useEffect, useState } from 'react'
import { UpdateStuResult } from '@/pages/api/api';



export default function Home() {  
    const [data, setData] = useState([]); 
    const [data1, setData1] = useState([]);    
    const [finalMark, setfinalMark] = useState([]);    
    
    
    useEffect(() => {    
    
      fetchData();
      fetchData1();
    }, []);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)      
        console.log(token);
        const students = await getPMStuResult1(token);
        setData(students);
        console.log(students);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    const fetchData1 = async () => {
      try {
        const token = localStorage.getItem('tp_number'); //Retrieving token from local storage)      
        console.log(token);
        const students = await getPMStuResult2(token);
        setData1(students);
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
                    First Mark: <br/> Proposal : {data.Pro} , IR : {data.IR} , Doc : {data.Doc} , Presentation : {data.Pre} <br/><br/>
                    {Array.isArray(data1) && data1.map((data1)=> ( <p>Second Mark:<br/> Proposal : {data1.Pro} , IR : {data1.IR} , Doc : {data1.Doc} , Presentation : {data1.Pre} </p> ))}<br/>
                    <div>{data && (<p><br/>Final Mark: {data.finalmark}</p>)}</div>
                    <div>Update Final Mark: <input type="text"  value={finalMark}onChange={(e => setfinalMark(e.target.value))}/>
                    <br/><button className={style.button6} onClick={updateValue}>Update</button></div>                    
                  </div>
                ))}
              </div>
            
       
        
    )
  }