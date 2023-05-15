import styles from '@/styles/Home.module.css'
import { getPMSchedule } from '@/pages/api/api'
import { getLecSchedule } from '@/pages/api/api';
import { useEffect, useState } from 'react'
export default function Event(){
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    
    
    useEffect(() => {
      
        fetchData();
        fetchData1();

    }, []);
    const fetchData = async () => {
        try {
              const token = localStorage.getItem('id'); //Retrieving token from local storage)
              console.log(token);
              const lecturer = await getPMSchedule(token);
              console.log(lecturer.data);
              setData(lecturer.data);
      } catch (error) {
          console.log('Error fetching data: ', error);
      }
    };
    const fetchData1 = async () => {
        try {
              const token = localStorage.getItem('id'); //Retrieving token from local storage)
              console.log(token);
              const lecturer = await getLecSchedule(token);
              setData1(lecturer.data1);
      } catch (error) {
          console.log('Error fetching data: ', error);
      }
    };
    return (
        
<div className={styles.content6}>  
{data.length > 0  &&(
    <><div className={styles.content7} key={data.id}>
                    <b>{data.name}</b>
                    <br /><br />
                    <div className={styles.contentbox5}>{data.start} {data.end}</div>
                    <br/>
              </div>  </>

)}     
{!data && data1 &&(
    <><div className={styles.content7} key={data1.id}>
                    <b>{ data1.name}</b>
                    <br /><br />
                    <div className={styles.contentbox5}>{data1.start} {data1.end}</div>
                    <br/>
              </div>  </>

)}
        
        
      </div>
      
      )
}