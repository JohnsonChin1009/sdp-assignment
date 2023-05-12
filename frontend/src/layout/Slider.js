
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
        dots: false,
        infinite: false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1

      }    
      return(
        <div>
        <Slider {...settings}>
            {slides.map((slide)=>(
              <div key={slide.id}>
                <div className={styles.slide}>
                <div><h3>{slide.title}</h3></div>
                <div>{slide.description}</div>
                <div>by {slide.projectmanager}</div>
                <div>{slide.date} {slide.time}</div>
              </div>
                            
          </div>
            )
                
            )}
        </Slider>
        </div>
      )
}
