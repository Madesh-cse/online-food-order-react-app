import classes from './Coupons.module.css'
import { CouponsData } from './CouponsDataList'
import BankComponent from './Bank'

export default function Coupons(){

    return(
        <section className={classes.Coupons}>
         <div className={classes.CouponsContainer}>
            {CouponsData.map((item)=>(
                <div className={classes.CouponsCard} id={item.id}>
                    <div className={classes.CouponsImg}>
                         <img src={item.img} alt="" />
                         <div className={classes.CouponsTitle}>
                           <h2>{item.title}</h2>
                           <p>{item.event}</p>
                         </div>
                    </div>
                    <div className={classes.CouponsOffer}>
                        <p>Get cashback between $5 to <br /> $10 using Gpay</p>
                    </div>
                    <div className={classes.CouponsValid}>
                        <p>Valid on order with items wroth <br /> $10 or more.</p>
                    </div>
                    <hr className={classes.Line}/>
                    <div className={classes.ApplyCode}>
                        <h3>{item.code}</h3>
                        <button>Copy Code</button>
                    </div>
                </div>    
            ))}
         </div>
         <BankComponent/>
        </section>
       
    )
}

