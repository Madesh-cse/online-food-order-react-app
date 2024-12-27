import { NavLink } from 'react-router-dom'
import classes from './NewCoupons.module.css'
export default function BestCoupons(){

    return(
        <section className={classes.BestCoupons}>
           <div className={classes.BestCouponsFlex}>
            <h1>Available Coupons</h1>
            <div className={classes.CouponsList}>
              <ul>
                <NavLink to='/BestDeals'>New Coupon</NavLink>
                <NavLink to='/BestDeals/UsedCoupons'>Used Coupon</NavLink>
                <NavLink>Expired Coupon</NavLink>
              </ul>
            </div>
           </div>
        </section>
    )
}