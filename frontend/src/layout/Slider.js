
import Slider from "react-slick";
import styles from '@/styles/Home.module.css'
import{useEffect, useState, useRef} from 'react'
import{getAnnouncements} from '@/pages/api/api';
import {Component} from "react"
export default class SliderComponent extends Components {
  
  //   constructor(props){
  //     super(props);
  //     this.next = this.next.bind(this);
  //     this.previous = this.previous.bind(this);
  //   }
  //   next(){
  //     this.slider.slickPrev();
  //   }
  //   previous(){
  //     this.slider.slickPrev();
  //   }
  // }
    const[slides, setSlides] = useState([]);
    const sliderRef = useRef(null);
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
        slidesToScroll:1,
        autoplay:true,        
        autoplaySpeed:3000, 
        transitionDuration:5000, 
        cssEase:"linear"
          
      }    
      const nextSlide =()=>{
        sliderRef.current.slickNext();
      };
      const previousSlide = ()=>{
        sliderRef.current.slickPrev();
      }
      return(
        <><Slider {...settings} ref={sliderRef}>

          {slides.map((slide) => (
            <div className={styles.slides}key={slide.id}>
              <table>
                <tbody>
                  <tr>                    
                    <td><div>{slide.title}</div></td>
                    <td><div>{slide.description}</div></td>
                    <td><div>{slide.projectmanager}</div></td>
                    <td><div>{slide.date}</div>
                    <div>{slide.time}</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )

          )}
        </Slider>
        <div style={{ textAlign:"center"}}></div>
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        </>
      )
}
