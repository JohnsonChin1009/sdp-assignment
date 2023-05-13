
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
        dots: false,
        infinite:true,
        speed:900,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        vertical: true,
        // appendDots:dots =>(
        //   <div style ={{position:'absolute', bottom: '200px'}}>
        //     <ul style={{margin:"0px"}}>{dots}</ul>
        //   </div>
        // ),

        
        prevArrow:<div className={styles.prevArrow}/>,
        nextArrow:<div className={styles.nextArrow}/>,
      }    
     
      return(
        <><div className={styles.slider}>
              <Slider {...settings}> 
              {slides.map((sliders, index) => (
                <><div key={index}>
                  <table>
                    <tbody>
                    <tr> 
                      <td><h3>{sliders.title}</h3></td>
                      
                    </tr>
                    <tr>
                      <td><p className={styles.word7}>{sliders.description} <br /></p><p className={styles.word8}>by {sliders.projectmanager}</p></td>
                      
                    </tr>
                    <tr>
                      <td><div className={styles.word9}>{sliders.date} {sliders.time}</div></td>
                    </tr>
                    </tbody>
                  </table>
                    <div >
                     
                      
                      <br />
                      <br />
                    </div>


                  </div></>
              )

              )}              
              
              </Slider>
           
        </div>
        </>
      )
}
