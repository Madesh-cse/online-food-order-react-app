import classes from './ProductDetailsList.module.css'
import { TbTriangleFilled } from "react-icons/tb";
export default function ProductDetailList({productDetails}){

    return(
        <div className={classes.ProductDetailList}>
            <h2>Special Offer Starting @ ₹89 Only</h2>
            {productDetails.product.map((item)=>(
               <div className={classes.ProductCard} key={item.id}>
                 <span className={classes.arrow}><TbTriangleFilled/></span>
                 <div className={classes.productListFlex}>
                    <div className={classes.productContent}>
                      <h3>{item.title}</h3>
                      <div className={classes.TypeFood}>
                       <span className={classes.arrow}><TbTriangleFilled/></span>
                       <p>{item.type}</p>
                      </div>
                      <p className={classes.priceAmount}><del className={classes.discount}>{item.price}</del> Get for ₹100</p>
                      <p>{item.signature}</p>
                      <p>NOT ELIIGIBLE FOR COUPONS</p>
                    </div>
                    <div className={classes.ProductImg}>
                        <img src={item.image} alt="" />
                        <button>ADD</button>
                    </div>
                 </div>
               </div>
            ))}
        </div>
    )
}