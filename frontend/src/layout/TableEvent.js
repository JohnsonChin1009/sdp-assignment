import styles from '@/styles/Home.module.css'
import { getStuPMSchedule } from '@/pages/api/api'
import { getStuLecSchedule } from '@/pages/api/api';
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
              const lecturer = await getStuPMSchedule(token);
              console.log(lecturer);
              setData(lecturer);
      } catch (error) {
          console.log('Error fetching data: ', error);
      }
    };
    const fetchData1 = async () => {
        try {
              const token = localStorage.getItem('id'); //Retrieving token from local storage)
              console.log(token);
              const lecturer1 = await getStuLecSchedule(token);
              setData1(lecturer1);
      } catch (error) {
          console.log('Error fetching data: ', error);
      }
    };
    return (
        <><div className={styles.text2}><i>Events</i></div><br/><div className={styles.content6}>

            {data.length ===0 ? (<p className={styles.text3}>No Events to display</p>) :(data.map((data)=>(
                <><div className={styles.content7} key={data.id}>
                    <b><h4>{data.name}</h4></b>                    
                    <div className={styles.contentbox5}>{data.start} {data.end}</div>
                    <br />
                </div>  </>

            )))}
            {!data && data.length ===0 ? (<p className={styles.text3}>No Events to display</p>) :(data1.map((data1)=>(
                <><div className={styles.content7} key={data1.id}>
                    <b><h4>{data1.name}</h4></b>
                    <div className={styles.contentbox5}>{data1.start} {data1.end}</div>
                    <br />
                </div>  </>

            )))}


        </div></>
      
      )
}