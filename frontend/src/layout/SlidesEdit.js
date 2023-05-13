

import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{getAllAnnouncements} from '@/pages/api/api';
import { UpdateAnnouncements } from '@/pages/api/api';

export default function SliderComponent() {
    const[slides, setSlides] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDes, setNewDescription] = useState('');
    const [newName, setNewName] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [newStatus, setNewStatus] = useState('');
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
          const update1 = await UpdateAnnouncements(newTitle, newDes, newName, newDate, newTime, newStatus )
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
                    <h3>{slide.title}</h3><br/>
                    <input type="text" value={newTitle} onChange={(e => setNewTitle(e.target.value))}/><br/>
                    <p>{slide.description} <br />by {slide.projectmanager}</p><br/>
                    Description:<br/>
                    <input type="text" value={newDes} onChange={(e => setNewDescription(e.target.value))}/><br/>
                    Editor: by <br/>
                    <input type="text" value={newName} onChange={(e => setNewName(e.target.value))}/>
                    <div>{slide.date} {slide.time}</div><br/>
                    <input type="date" value={newDate} onChange={(e => setNewDate(e.target.value))}/><br/>
                    <input type="time" value={newTime} onChange={(e => setNewTime(e.target.value))}/><br/>
                    Current status (1=Show, 0=Hidden): <div>{slide.show}</div><br/>
                    <input type="checkbox" value={newShow} onChange={(e => setNewStatus(1))}>Show</input><br/>
                    <input type="checkbox" value={newShow} onChange={(e => setNewStatus(0))}>Hidden</input><br/>
                  </div>
                  </div>
              ))}
              
              
              <div className={styles.button7}><button onClick={updateValue}>Done</button></div>                         
        </div>
        </>
      )
}
