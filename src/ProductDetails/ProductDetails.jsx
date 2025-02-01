import { useParams } from "react-router-dom"
import classes from './ProductDetails.module.css'
import { DeliveryFoodList } from "../explore/DeliveryData"
import { ImSpoonKnife } from "react-icons/im";
import { MdDeliveryDining } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import ProductDetailList from "./ProductDetailsList";
export default function ProductDetails(){

    const{productItemId} = useParams()
    
    const productDetails = DeliveryFoodList.find((item)=>item.id === parseInt(productItemId))
    console.log(productDetails)

    if (!productDetails) {
        return <h2>Product not found</h2>;
      }

    return(
        <>
        <section className={classes.productDetails}>
            <div className={classes.Restaruntsec1img}>
                <img src={productDetails.banner}alt="" />
            </div>
              <div className={classes.RestaruntTitleBox}>
                                <div className={classes.RestaruntGrid}>
                                    <div className={classes.RestaruntTitleLogo}>
                                        <img src={productDetails.logo} alt="logo" />
                                    </div>
                                    <div className={classes.Description}>
                                        <div className={classes.DescriptionTitle}>
                                          <h1>{productDetails.title}</h1>
                                          <p><span><ImSpoonKnife/></span>{productDetails.cusine}</p>
                                        </div>
                                        <div className={classes.DescriptionLocation}>
                                            <p className={classes.delivery}><span><MdDeliveryDining/></span>Free delivery</p> 
                                            <p className={classes.offer}><span><MdLocalOffer/></span>55% OFF</p> 
                                            <p className={classes.Timing}><span><GoClock/></span>Opens at 12 PM</p> 
                                        </div>
                                        <p className={classes.RestaruntDescription}>It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks.</p>
                                        <div className={classes.Rating}>
                                            <p><span><IoIosStar/></span>{productDetails.rating} 500+ Rating</p>
                                            <p><span><IoIosStar/></span>4.8 - 500+ Ratin</p>
                                            <p><span><IoIosStar/></span>4.8 - 500+ Rating</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                           
            <ProductDetailList productDetails={productDetails}/>
            
        </section>
        </>
    )
}