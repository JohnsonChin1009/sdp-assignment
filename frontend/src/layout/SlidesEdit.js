

import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{getAllAnnouncements} from '@/pages/api/api';
import { useRouter } from 'next/router';

export default function SliderComponent() {
    const[slides, setSlides] = useState([]);
    const router = useRouter();
   
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
      const handleClick = (id) => {
        localStorage.setItem('id', id);
        console.log(id);
        // router.push('/EditSlides');
      };
      
      return(
        <> <div className={styles.container3}>
              {slides.filter((slide)=> slide.title || slide.description).map((slide)=>(

                  <div key={slide.id}>
                  <div  className={styles.slide1} >
                    <h3>{slide.title}</h3><br/>
                    Description:
                    <p>{slide.description} <br />by {slide.projectmanager}</p><br/>{slide.intake_code}
                    <div>{slide.date} {slide.time}</div><br/>                    
                    Current status (1=Show, 0=Hidden): <div>{slide.show}</div><br/>                
                    <a href="http://localhost:3000/EditSlides"><button className={styles.button6} onClick={()=>handleClick(slide.id)}>Edit</button></a>              
                  </div>
                  </div>
              ))}
              
              
              
        </div>
        </>
      )
}
