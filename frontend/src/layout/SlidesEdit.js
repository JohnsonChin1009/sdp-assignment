
import Slider from "react-slick";
import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{getAllAnnouncements} from '@/pages/api/api';

export default function SliderComponent() {
    const[slides, setSlides] = useState([]);
  
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
      const settings ={
        dots: false,
        infinite: false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoPlay:true,
      }    
     
      return(
        <><div className={styles.slider}>
              <Slider {...settings}> 
              {/* {slides.map((slide) => (
                <div key={slide.id}>
                  <div className={styles.slide} alt={slide.id}>
                    <h3>{slide.title}</h3>
                    <p>{slide.description} <br />by {slide.projectmanager}</p>

                    <div>{slide.date} {slide.time}</div>
                  </div>


                </div>
              )

              )} */}
              {slides.filter((slide)=> slide.title || slide.description).map((slide)=>(
                  <div key={slide.id}>
                  <div className={styles.slide} alt={slide.id}>
                    <h3>{slide.title}</h3>
                    <p>{slide.description} <br />by {slide.projectmanager}</p>

                    <div>{slide.date} {slide.time}</div>
                  </div>
                  </div>
              ))}
              
              </Slider>
              <div className={styles.button7}><button>Done</button></div>                         
        </div>
        </>
      )
}
