import { PiGreaterThanBold } from "react-icons/pi";
import classes from './RestaruntList.module.css'
import { Link } from "react-router-dom";
import { RestaruntData } from "../HomePageData";
import { CiStar } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdDeliveryDining } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default function RestaruntList(){

    return(

        <section>
            <div className={classes.ResFlex}>
                <h2>Featured restaurants</h2>
                <p>See all <PiGreaterThanBold/> </p>
            </div>
            <div>
                <Link to='/' className={classes.ResRow}>
                {RestaruntData.map((item)=>(
                    <div className={classes.ResCard} key={item.id}>
                        <div className={classes.ResCardFlex}>
                            <img src ={item.img} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>{item.title}</h4>
                                <div className={classes.ResDescription}>
                                    <p><span className={classes.Rating}><CiStar/></span>0.8(873)</p>
                                    <p><span><ImSpoonKnife/></span>Burger</p>
                                    <p><span><LiaRupeeSignSolid/></span>234/-</p>
                                </div>
                                <div className={classes.location}>
                                    <div className={classes.delivery}><span><MdDeliveryDining/></span>Free delivery</div>
                                    <div className={classes.distance}><span><FaLocationDot/></span>0.3 km</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </Link>
            </div>
        </section>
    )
}