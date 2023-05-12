
import Slider from "react-slick";
import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{getAnnouncements} from '@/pages/api/api';

export default function SliderComponent() {
    const[slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const sliders = await getAnnouncements();
            setSlides(sliders);
          } catch (error) {
            console.log('Error fetching slide: ', error);
          }
        };
  
        fetchData();
      }, []);
      const settings ={
        dots: true,
        infinite: true,
      }    
      return(
        <Slider {...settings}>
            {slides.map((slide)=>(
              <div key={slide.id}>
              <div>{slide.title}</div>
              <div>{slide.description}</div>
              <div>{slide.projectmanager}</div>
              <div>{slide.date}</div>
              <div>{slide.time}</div>
          </div>
            )
                
            )}
        </Slider>
      )
}
