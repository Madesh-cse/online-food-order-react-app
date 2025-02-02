import classes from './Cart.module.css'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { PiNotepadFill } from "react-icons/pi";
import {useSelector,useDispatch} from 'react-redux'
import { removeItem } from '../features/AddToCart/CartSlice';
import { useNavigate } from 'react-router-dom';
import { TabTitle } from '../components/GeneralFunction';
export default function CartPage(){

    TabTitle("Cart Products")

    const {items:cartItem,TotalItemCost,handlingCharge,grantTotal,tempItem} = useSelector((state)=>state.Cart)

    // console.log(tempItem)

    // useSelector((state)=>console.log(state))

    const naviagte = useNavigate()

    const dispatch = useDispatch()

    const handleRemoveId = (id)=>{

        dispatch(removeItem(id)) // id=>is a payload data for action    
    }

    const handleOrder = ()=>{
        naviagte('/OrderStatus')

    }

    return(
        <>
        <section className={classes.CartBg}>
            <div className={classes.CartBox}>
                <h1>Order Your Favrouit Food</h1>
                {cartItem.map((item)=>(
                 <div className={classes.CartComponent} key={item.id}>
                    <div className={classes.CartImg}>
                      <img src={item.image} alt="title" />
                    </div>
                    <div className={classes.CartItemDetail}>
                        <div className={classes.CartTitle}>
                           <h4>{item.name.length>20?`${item.name.slice(0,20)}...`: item.name}</h4>
                           <p>Cuisine:{item.cuisine}</p>
                           <p> Price:<LiaRupeeSignSolid/>{item.caloriesPerServing}</p>
                        </div>
                    </div>
                    <div className={classes.updateBtn}>
                       <button>+</button>
                       <span>{item.quantity}</span>
                       <button>-</button>
                    </div>
                    <div className={classes.accesBtn}>
                        {/* <button className={classes.updatebutton}>Update</button> */}
                        <button className={classes.removeBtn}  onClick={()=>handleRemoveId(item.id)}>Remove</button>
                    </div>
                 </div>
                ))}
                {cartItem.length > 0 && 
                <div className={classes.orderBox}>
                  <button className={classes.orderBtn} onClick={handleOrder}>CHECK OUT</button>
                </div>}
                
            </div>
            <div className={classes.BillBox}>
             <h1>Bill Details</h1>
             <div className="BillContent">
             <div className={classes.BillDetail}>
                <p><PiNotepadFill />Items total</p>
                <p>₹{TotalItemCost}</p>
             </div>
             <div className={classes.BillDetail}>
                <p><PiNotepadFill />Delivery charge</p>
                <p>Free</p>
             </div>
             <div className={classes.BillDetail}>
                <p><PiNotepadFill />Handling charge</p>
                <p>₹{handlingCharge}</p>
             </div>
             </div>
             <div className={classes.TotalPrice}>
                <h4>Grand total</h4>
                <p> <LiaRupeeSignSolid/>{grantTotal}</p>
             </div>
            </div>
        </section>
        </>
    )
}