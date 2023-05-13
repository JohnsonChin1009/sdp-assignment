
import Slider from "react-slick";
import styles from '@/styles/Home.module.css'
import{useEffect, useState} from 'react'
import{getAnnouncements} from '@/pages/api/api';

export default function SliderComponent() {
    const[slides, setSlides] = useState([]);
    const[activeSlide, setActiveSlide] = useState(0);
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
        infinite:false,
        speed:800,
        slidesToShow:1,
        slidesToScroll:1,
        autoPlay:true,
        // appendDots:dots =>(
        //   <div style ={{position:'absolute', bottom: '200px'}}>
        //     <ul style={{margin:"0px"}}>{dots}</ul>
        //   </div>
        // ),

        customPaging:(i)=>(
          <label className={activeSlide === i?styles.dotActive: styles.dot}>
            <input type="radio" name="slider-dot1" />
            
            {/* <input type="radio" name="slider-dot3" checked= {activeSlide === i} onChange={()=>setActiveSlide(i)}/> */}
          </label>
        ),
        prevArrow:<div className={styles.prevArrow}/>,
        nextArrow:<div className={styles.nextArrow}/>,
      }    
     
      return(
        <><div className={styles.slider}>
              <Slider {...settings}> 
              {slides.map((slideData, index) => (
                <div key={index}>
                  <div className={styles.slide} alt={slideData.id}>
                    <h3>{slideData.title}</h3>
                    <p>{slideData.description} <br />by {slideData.projectmanager}</p>

                    <div>{slideData.date} {slideData.time}</div>
                  </div>


                </div>
              )

              )}
              {/* {slides.filter((slide)=> slide.title || slide.description).map((slide)=>(
                  <div key={slide.id}>
                  <div className={styles.slide} alt={slide.id}>
                    <h3>{slide.title}</h3>
                    <p>{slide.description} <br />by {slide.projectmanager}</p>

                    <div>{slide.date} {slide.time}</div>
                  </div>
                  </div>
              ))} */}
              
              </Slider>
           
        </div>
        </>
      )
}
