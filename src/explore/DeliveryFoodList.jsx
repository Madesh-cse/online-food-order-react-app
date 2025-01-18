import classes from './DeliveryPage.module.css'
import { DeliveryFoodList } from './DeliveryData'
import { LiaStarSolid } from "react-icons/lia";
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function DeliveryFoodListItem(){

    const[data,setdata] = useState(DeliveryFoodList);

    const Filterresult = (catItem) => {

        const result = DeliveryFoodList.filter((item)=>{
            return item.category === catItem;
        })

       setdata(result)
    }  
return(
    <>
   <div className={classes.FilterList}>
        <ul>
            <li onClick={()=>Filterresult('category')}>Offers</li>
            <li >Rating:4.5+</li>
            <li onClick={()=>Filterresult('Pure nonVeg')}>Pure NonVeg</li>
            <li onClick={()=>Filterresult('Briyani')}>Briyani</li>
            <li onClick={()=>Filterresult('Pure Veg')}>Pure Veg</li>
            <li onClick={()=>setdata(DeliveryFoodList)} >All</li>
        </ul>
    </div>
    <div className={classes.DeliveryRestarunt}>
        {data.map((item)=>(
            <Link to={`/ProductDetails/${item.id}`} key={item.id}>
             <div className={classes.DeliveryDiningCard}>
                <img src={item.img} alt = ''/>
                <div className={classes.DeliveryDiningTitle}>
                    <h4>{item.title}</h4>
                    <p>{item.rating}<span><LiaStarSolid/></span></p>
                </div>
                <div className={classes.DeliveryDiningCusine}>
                    <h4>{item.cusine}</h4>
                    <p>{item.price}</p>
                </div>
                <div className={classes.DeliveryDiningDestination}>
                    <h4>{item.address}</h4>
                    <p>{item.distance}</p>
                </div>
            </div>
            </Link>
        ))}
    </div>
    </>
    
)
}