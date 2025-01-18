import { useParams } from "react-router-dom"
import classes from './ProductDetails.module.css'
import { DeliveryFoodList } from "../explore/DeliveryData"
import { LiaStarSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
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
            <h2>{productDetails.title}</h2>
            <div className={classes.RestarurntAdd}>
                <div className={classes.loactionTitle}>
                    <p>This location is near to the outlet's delivery area</p>
                </div>
                <div className={classes.Rating}>
                  {/* <span className={classes.star}><LiaStarSolid/></span> */}
                  <p>{productDetails.rating}(1.1K+ rating)</p>
                  <p>{productDetails.price}</p>
                </div>
                <div className={classes.FoodList}>
                    <ul>
                        <li><Link>{productDetails.cusine},</Link></li>
                    </ul>
                </div>
                <div className={classes.location}>
                    <p className={classes.locationquery}>Outlet</p>
                    <p className={classes.locationName}>ANNA NAGAR</p>
                </div>
                <div className={classes.descripition}>
                  <p>Enjoy Your Food</p>
                </div>
            </div>
            <ProductDetailList productDetails={DeliveryFoodList}/>
        </section>
        </>
    )
}