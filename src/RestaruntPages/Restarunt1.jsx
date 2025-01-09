import classes from './Restarunt1.module.css'
// import Restarunt1Filter from './Restarunt1Filter';
import Recipes from './Restarunt1Filter';
import logo from '../asset/RestaruntImg/burgerking.png'
import { ImSpoonKnife } from "react-icons/im";
import { MdDeliveryDining } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
export default function Restarunt1(){

    return(
        <>
         <section className={classes.Restarunt}>
            <div className={classes.Restaruntsec1}>
                <div className={classes.Restaruntsec1img}></div>
                <div className={classes.RestaruntTitleBox}>
                    <div className={classes.RestaruntGrid}>
                        <div className={classes.RestaruntTitleLogo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={classes.Description}>
                            <div className={classes.DescriptionTitle}>
                              <h1>Burger King</h1>
                              <p><span><ImSpoonKnife/></span>American,Fast Food</p>
                            </div>
                            <div className={classes.DescriptionLocation}>
                                <p className={classes.delivery}><span><MdDeliveryDining/></span>Free delivery</p> 
                                <p className={classes.offer}><span><MdLocalOffer/></span>55% OFF</p> 
                                <p className={classes.Timing}><span><GoClock/></span>Opens at 12 PM</p> 
                            </div>
                            <p className={classes.RestaruntDescription}>It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks.</p>
                            <div className={classes.Rating}>
                                <p><span><IoIosStar/></span>4.8 - 500+ Rating</p>
                                <p><span><IoIosStar/></span>4.8 - 500+ Rating</p>
                                <p><span><IoIosStar/></span>4.8 - 500+ Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Recipes/>
        </>
    )
}