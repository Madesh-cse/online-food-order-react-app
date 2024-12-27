import classes from './Collection.module.css'
import { PiGreaterThanBold } from "react-icons/pi";
import { Link } from 'react-router-dom'
// import { collectionData } from '../HomePageData.js';
import collection1 from '../asset/RestaruntImg/collection1.jpg'
import collection2 from '../asset/RestaruntImg/collection2.jpg'
import collection3 from '../asset/RestaruntImg/collection3.jpg'
import collection4 from '../asset/RestaruntImg/collection4..jpg'
export default function Collecion(){

    return(
        <section className={classes.collection}>
            <h1>Collection</h1>
            <div className={classes.title} >
                <h3>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</h3>
                <Link to='/collection/Chennai'>All collection in Madurai <PiGreaterThanBold/></Link>
            </div>
            <article>
             <div className={classes.collectionImg}>
               <Link to='collection'>
                    <div className={classes.collectionBlock}>
                        <img src ={collection1} alt={''}/>
                        <div className={classes.collectionTitle}>
                            <h3>Newly Open Placed</h3>
                            <p>13 places</p>
                        </div>
                    </div>
                </Link>
               <Link to='/collection/Top Trending Place'>
                    <div className={classes.collectionBlock}>
                        <img src ={collection2} alt={''}/>
                        <div className={classes.collectionTitle}>
                            <h3>Top Trending spot</h3>
                            <p>13 places</p>
                        </div>
                    </div>
                </Link>
               <Link to='collection'>
                    <div  className={classes.collectionBlock}>
                        <img src ={collection3} alt={''}/>
                        <div className={classes.collectionTitle}>
                            <h3>Insta Story Place</h3>
                            <p>13 places</p>
                        </div>
                    </div>
                </Link>
               <Link to='collection'>
                    <div  className={classes.collectionBlock}>
                        <img src ={collection4} alt={''}/>
                        <div className={classes.collectionTitle}>
                            <h3>South Indain Special</h3>
                            <p>13 places</p>
                        </div>
                    </div>
                </Link>
               </div>
            </article>
        </section>
    )
}