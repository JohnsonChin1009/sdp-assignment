

import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{getAllAnnouncements} from '@/pages/api/api';
import { UpdateAnnouncements } from '@/pages/api/api';

export default function SliderComponent() {
    const[slides, setSlides] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDes, setNewDescription] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const sliders = await getAllAnnouncements();
            setSlides(sliders);
          } catch (error) {
            console.log('Error fetching slide: ', error);
          }
        };
  
        fetchData();
      }, []);
      
      const updateValue = async()=>{
        try{
        //   const token = localStorage.getItem('token'); //Retrieving token from local storage)
          const update1 = await UpdateAnnouncements(newTitle, newDes )
          setData(update1);
        }catch(error){
          console.log('Error updating value: ', error);
        }
      }
      return(
        <><div className={styles.slider}>                            
              {slides.filter((slide)=> slide.title || slide.description).map((slide)=>(
                  <div key={slide.id}>
                  <div className={styles.slide} alt={slide.id}>
                    <h3>{slide.title}</h3>
                    <input type="text" value={newTitle} onChange={(e => setNewTitle(e.target.value))}/>
                    <p>{slide.description} <br />by {slide.projectmanager}</p>
                    <input type="text" value={newDes} onChange={(e => setNewDescription(e.target.value))}/>
                    <div>{slide.date} {slide.time}</div>
                    <input type="checkbox" value={slide.show}></input>
                  </div>
                  </div>
              ))}
              
              
              <div className={styles.button7}><button onClick={updateValue}>Done</button></div>                         
        </div>
        </>
      )
}
