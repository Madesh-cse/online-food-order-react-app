import React from 'react'
import classes from './Order.module.css'
import { useSelector } from 'react-redux'
import { FaHeadset } from "react-icons/fa6";
import { TabTitle } from '../components/GeneralFunction';

function OrderDetails() {

    TabTitle("Order Tracks")

    const orderDetails = useSelector((state)=>state.Cart.orderDetails)

    console.log(orderDetails)

    if (!orderDetails) {
        return <div>No order details available.</div>;
      }
  return (
    <div className={classes.orderDetail}>
        <p>OrderDetails</p>
        {orderDetails.map((item,index)=>(
            <div className={classes.orderDetailBox}>
             <div className={classes.orderContent}>
                <img src={item.image} alt=''/>
                <div className={classes.orderDescription}>
                    <h3>Burger King</h3>
                    <p>730 S Mendenhall Rd,Menphis,TN 38122,India</p>
                    <p>ORDER 24356798  Mon,Nov 12,6:26PM</p>
                    <ol>
                        <li>{item.name}</li>
                    </ol>
                </div>
                <div className={classes.DeliveryTime}>
                    <p>Delivery on Mon ,Nov 12,7.18PM</p>
                </div>
            </div>
            <hr className={classes.line}/>
            <div className={classes.reorder}>
                    <p>Total Paid: <span>{item.caloriesPerServing}₹</span> </p>
                    <div className={classes.reorderBtn}>
                        <button className={classes.reorderHelp}><FaHeadset/> HELP</button>
                        <button className={classes.Rebtn}>REORDER</button>
                    </div>
                </div>
            </div>
            
        ))}
       
    </div>
  )
}

export default OrderDetails