import {useEffect } from 'react';
import classes from './Restarunt1Filter.module.css'
import { FaStar } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { fetchFoodItem } from '../features/AddToCart/ProductSlice';
import {useSelector,useDispatch} from 'react-redux'
import { AddItem } from '../features/AddToCart/CartSlice';
export default function Restarunt1Filter(){

   
   const{item:FoodItems=[],status} = useSelector((state)=>state.FoodItems)

//    console.log('food:',FoodItems)

//    useSelector((state)=>console.log(state))

   const dispatch = useDispatch()

    useEffect(()=>{

        if(status === 'idle'){

            dispatch(fetchFoodItem())
        }

    },[status,dispatch])

    if(status ==='loading')
        return <p>loading data....</p>
    
    if(status === 'failed')
        return <p>error has occur</p>

    

    return(
    <>
    <section className={classes.RestaruntBox}> 
        <div className={classes.Restarunt}>
            {FoodItems.map((Fooditem)=>(
                <div className={classes.RestaruntCard} key={Fooditem.id}>
                     <img src={Fooditem.image} alt='recipes'/>
                     <div className={classes.Restaruntcontent}>
                         <h4>{Fooditem.name.length>10?`${Fooditem.name.slice(0,10)}...`: Fooditem.name}</h4>
                         <p>{Fooditem.rating} <span><FaStar/></span></p>
                     </div>
                     <div className={classes.RestaruntCusines}>
                         <h4>{Fooditem.cuisine}</h4>
                         <p><LiaRupeeSignSolid/> {Fooditem.caloriesPerServing} for two</p>
                     </div>
                     <div className={classes.cartBox}>
                       <button onClick={()=>dispatch(AddItem(Fooditem))}>Add to Cart</button>
                     </div>
                </div>
            ))}
            
        </div>
    </section>
    </>
    )
}