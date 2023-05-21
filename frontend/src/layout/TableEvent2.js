import styles from '@/styles/Home.module.css'
import { getStuLecSchedule } from '@/pages/api/api';
import { useEffect, useState } from 'react'
export default function Event(){
    const [data, setData] = useState([]);
    
    
    
    useEffect(() => {
      
        fetchData();
        

    }, []);
    const fetchData = async () => {
        try {
              const token = localStorage.getItem('id'); //Retrieving token from local storage)
              console.log(token);
              const lecturer = await getStuLecSchedule(token);
              console.log(lecturer);
              setData(lecturer);
      } catch (error) {
          console.log('Error fetching data: ', error);
      }
    };
   
    return (
        <><div className={styles.text2}><i>Events</i></div><br/><div className={styles.content6}>

           { data.length ===0 ? (<p className={styles.text3}>No Events to display</p>) :(data.map((data)=>(
                <><div className={styles.content7} key={data.id}>
                    <b><h4>{data.name}</h4></b>
                    <div className={styles.contentbox5}>{data.start} {data.end}</div>
                    <br />
                </div>  </>

            )))}


        </div></>
      
      )
}