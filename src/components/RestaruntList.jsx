import { PiGreaterThanBold } from "react-icons/pi";
import classes from './RestaruntList.module.css'
import { Link } from "react-router-dom";
import img1 from '../asset/RestaruntImg/burgerking.png'
import img2 from '../asset/RestaruntImg/domino.png'
import img3 from '../asset/RestaruntImg/kfc.png'
import img4 from '../asset/RestaruntImg/macd.png'
import img5 from '../asset/RestaruntImg/pizzahut.png'
import img6 from '../asset/RestaruntImg/subway.png'
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
            <div  className={classes.ResRow}>
             <Link to='/Restarunt-List/Burger-King'>
                <div className={classes.ResCard}>
                        <div className={classes.ResCardFlex}>
                            <img src ={img1} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>Burger King</h4>
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
             </Link>
                <div className={classes.ResCard}>
                        <div className={classes.ResCardFlex}>
                            <img src ={img2} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>Burger King</h4>
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
                <div className={classes.ResCard}>
                        <div className={classes.ResCardFlex}>
                            <img src ={img3} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>Burger King</h4>
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
                <div className={classes.ResCard}>
                        <div className={classes.ResCardFlex}>
                            <img src ={img4} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>Burger King</h4>
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
                <div className={classes.ResCard}>
                        <div className={classes.ResCardFlex}>
                            <img src ={img5} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>Burger King</h4>
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
                <div className={classes.ResCard}>
                        <div className={classes.ResCardFlex}>
                            <img src ={img6} alt =''/>
                            <div classes={classes.ResContent}>
                                <h4>Burger King</h4>
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
            </div>
        </section>
    )
}