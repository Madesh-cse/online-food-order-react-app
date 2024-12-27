import classes from './Coupons.module.css'
import { BankData } from './CouponsDataList'
export default function BankComponent(){
    return(
        <div className={classes.BankComponent}>
            <h1>Bank Offers</h1>
            <p>There are many variations of Offer Coupes</p>
            <div className={classes.BankContainer}>
                {BankData.map((item)=>(
                    <div className={classes.BankCard} key={item.id}>
                        <div className={classes.BankImg}>
                            <img src={item.img} alt="" />
                            <div className={classes.BankTitle}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <p className={classes.extraLine}>Receive 10% cashback when <br /> cards Express American using ...  </p>
                    </div>
                ))}
            </div>
        </div>
    )
}