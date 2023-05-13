import styles from '@/styles/Home.module.css'
import { getPMSchedule } from '@/pages/api/api'
import { useEffect, useState } from 'react'
export default function Event(){
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
      const fetchData = async () => {
          try {
                const token = localStorage.getItem('token'); //Retrieving token from local storage)
                const lecturer = await getPMSchedule(token);
                setData(lecturer);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
      };
        fetchData();

    }, []);
    return (
        
<div className={styles.content6}>  
{data &&(
    <><div className={styles.content7}>
                    <b>{data.name}</b>
                    <br /><br />
                    <div className={styles.contentbox5}>{data.start} {data.end}</div>
                    <br/>
              </div>  </>

)}     
        
        
      </div>
      
      )
}