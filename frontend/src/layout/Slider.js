
import Slider from "react-slick";
import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{fetchSlide} from '@/pages/api/api';

export default function Slider() {
    const[slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const students = await fetchSlide();
            setData(students);
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
                    <div>{slide.projectmanagername}</div>
                    <div>{slide.date}</div>
                </div>
            ))}
        </Slider>
      )
}
