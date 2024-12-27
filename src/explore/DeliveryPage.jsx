
import classes from './DeliveryPage.module.css'
import { IoFilterSharp } from "react-icons/io5";
import { DeliveryData } from './DeliveryData';
import DeliveryBrandPage from './DeliveryBrand';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '../Modal/Modal';
import { useRef } from 'react';
import { useState } from 'react';
export default function DeliveryPage(){

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red", }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const modal = useRef()

      function HandleModel(){
        modal.current.showModal()
        console.log('Madesh')
      }


      const[close,setclose] = useState(false)

      function HandleCloseEvent(){

        setclose(true)
        console.log('close')
      }

      
    return(
      <>
      <Modal title='FILTER' ref={modal} HandleClose={HandleCloseEvent}  close={close}/>
      <section className={classes.DeliveryPage}>
            <div className={classes.Delivery}>
                <button onClick={HandleModel}><span><IoFilterSharp/></span>Filters</button>
            </div>
            <div className={classes.DeliveryOrder}>
                <h2>Inspiration for your first order</h2>
                <div className={classes.DeliverySlider}>
                 <Slider {...settings}>
                    {DeliveryData.map((item)=>(
                        <li key={item.id}>
                            <img src={item.img} alt='' />
                            <p>{item.title}</p>
                        </li>
                    ))}
                 </Slider>
                    {/* <button  onClick={ShowNextImage} className={classes.lessthan}><PiLessThan/></button>
                    <button className={classes.greaterthan}><PiGreaterThanLight/></button> */}
                </div>
            </div>
            <DeliveryBrandPage/>
        </section>
      </>
        
    )
 }