import classes from './Dining.module.css'
import DiningData from './DiningRestaruntList'
import { LiaStarSolid } from "react-icons/lia";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useState } from 'react';
export default function DiningRestaruntList(){

    const[Diningdata,setDiningdata] = useState(DiningData);

    const Filterresult = (catItem) => {

        const result = DiningData.filter((item)=>{
            return item.catagories === catItem;
        })

       setDiningdata(result)
    }   

    return(
        <>
     <div className={classes.FilterList}>
        <ul>
            <li onClick={()=>Filterresult('offer')} >Offers</li>
            <li onClick={()=>Filterresult('4.5')}>Rating:4.5+</li>
            <li>Pet Friendly</li>
            <li onClick={()=>Filterresult('outDoor')} >Outdoor Seating</li>
            <li>Serves Alcohal</li>
            <li onClick={()=>setDiningdata(DiningData)}>Open Now</li>
        </ul>
     </div>
        <div className={classes.Restarunt}>
            {Diningdata.map((item)=>(
                <div className={classes.DiningCard} key={item.id}>
                    <img src={item.img} alt = ''/>
                    {/* <div className={classes.Discount}>
                         <p> <FaPercentage/> {item.discount}</p>
                    </div> */}
                    <div className={classes.DiningTitle}>
                        <h4>{item.title}</h4>
                        <p>{item.rating}<span><LiaStarSolid/></span></p>
                    </div>
                    <div className={classes.DiningCusine}>
                        <h4>{item.cusine}</h4>
                        <p><span><LiaRupeeSignSolid/></span>{item.price}</p>
                    </div>
                    <div className={classes.DiningDestination}>
                        <h4>{item.address}</h4>
                        <p>{item.distance}</p>
                    </div>
                </div>
            ))}
        </div>
     </>
    )
}