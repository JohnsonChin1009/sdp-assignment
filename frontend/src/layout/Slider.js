
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
            {slides && (
                <div key={slides.id}>
                    <div>{slides.title}</div>
                    <div>{slides.description}</div>
                    <div>{slides.projectmanagername}</div>
                    <div>{slides.date}</div>
                </div>
            )}
        </Slider>
      )
}
