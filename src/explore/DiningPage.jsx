import { PiGreaterThanBold } from "react-icons/pi"
 import { Link } from 'react-router-dom'
 import classes from './Dining.module.css'
 import { collectionData } from '../HomePageData.js';
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import DiningRestaruntList from "./DiningRestaruntList.jsx";
 export default function DiningPage(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <section className={classes.DiningPage}>
            <div className={classes.DiningContainer}>
              <h1>Collection</h1>
              <div className={classes.title} >
                <h3>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</h3>
                <Link to='/'>All collection in Madurai <PiGreaterThanBold/></Link>
              </div>
              <article className={classes.slider}>
              <Slider {...settings}>
                {collectionData.map((item)=>(
                    <div className={classes.collectionBlock} key={item.id}>
                     <img src ={item.img} alt={''}/>
                        <div className={classes.collectionTitle}>
                         <h3>{item.des}</h3>
                         <p>13 places</p>
                        </div>
                    </div>
                ))}
              </Slider>
             </article>  
             <div className={classes.Brand}>
                <h2>Zomato Diwali Special</h2>
                <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt=""/>
             </div>
            </div>
            <DiningRestaruntList/>
        </section>
    )
 }