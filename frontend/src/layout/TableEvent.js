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
              const lecturer = await getStuLecSchedule(token);
              setData1(lecturer);
      } catch (error) {
          console.log('Error fetching data: ', error);
      }
    };
    return (
        <><div className={styles.text2}><i>Events</i></div><br/><div className={styles.content6}>

            {data.length > 0 && (
                <><div className={styles.content7} key={data.id}>
                    <b><h2>{data.name}</h2></b>
                    <br /><br />
                    <div className={styles.contentbox5}>{data.start} {data.end}</div>
                    <br />
                </div>  </>

            )}
            {!data && data1 && (
                <><div className={styles.content7} key={data1.id}>
                    <b><h2>{data1.name}</h2></b>
                    <br /><br />
                    <div className={styles.contentbox5}>{data1.start} {data1.end}</div>
                    <br />
                </div>  </>

            )}


        </div></>
      
      )
}