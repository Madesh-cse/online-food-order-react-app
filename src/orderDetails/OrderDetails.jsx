import React from 'react'
import classes from './OrderDetails.module.css'
import { useSelector } from 'react-redux'

function OrderDetails() {

    const orderDetails = useSelector((state)=>state.Cart.orderDetails)

    console.log(orderDetails)

    if (!orderDetails) {
        return <div>No order details available.</div>;
      }
  return (
    <div className={classes.orderDetail}>
        <p>OrderDetails</p>
        {orderDetails.map((item,index)=>(
            <li key={index}>
                <p>{item.name}</p>
                {/* <img src={item.image} alt="title" /> */}
            </li>
        ))}
    </div>
  )
}

export default OrderDetails