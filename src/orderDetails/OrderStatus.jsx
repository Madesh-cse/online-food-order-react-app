import React from 'react'
import { setOrderDetails } from '../features/AddToCart/CartSlice'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from './OrderStatus.module.css'
import { TabTitle } from '../components/GeneralFunction'

export default function OrderStatus() {

  TabTitle("Order Status")

    const selector = useSelector( (state)=>state.Cart.items)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const HandleorderDetails = ()=>{
        dispatch(setOrderDetails(selector))
        navigate('/OrderDetails')

    }
  return (
    <>
    <div className={classes.orderStatus}>
     <div className={classes.orderStatusImg}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19AAD-3vQueAYX_UMAse3ubTPby71AmwIiqwuOoYY66z7VaPP2sn7DSXWiK67Xjm1rYo&usqp=CAU" alt="" />
     </div>
     <div className={classes.orderDescription}>
        <h2>Your order has been successfully placed</h2>
        <p>It’ll take 5 min before you get it.Sit and relax while your order is being worked on</p>
        <button onClick={HandleorderDetails}>View Order Tracks</button>
     </div>
    </div>
    </>
    
  )
}
