import classes from './DeliveryPage.module.css'
import { DeliveryBrandData } from './DeliveryData';
import DeliveryFoodListItem from './DeliveryFoodList.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function DeliveryBrandPage(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
      };

    return(
        <section className={classes.DeliveryBrand}>
            <h2>Top brands for you</h2>
            <div className={classes.DeliveryBrandSlider}>
                 <Slider {...settings}>
                    {DeliveryBrandData.map((item)=>(
                        <li key={item.id}>
                            <img src={item.img} alt=''/>
                            <p>{item.title}</p>
                            <p>{item.Time}</p>
                        </li>
                    ))}
                 </Slider>
                    {/* <button  onClick={ShowNextImage} className={classes.lessthan}><PiLessThan/></button>
                    <button className={classes.greaterthan}><PiGreaterThanLight/></button> */}
            </div>
           <DeliveryFoodListItem/>
        </section>
    )
}