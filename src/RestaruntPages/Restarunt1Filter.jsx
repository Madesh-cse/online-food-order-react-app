import { useState } from 'react';
import classes from './Restarunt1Filter.module.css'
import { RestaruntData } from './RestaruntData'
import { FaStar } from "react-icons/fa6";
export default function Restarunt1Filter(){

    const[filterData,setFilterData] = useState(RestaruntData)

    const filterRestaruntItem = (filterItem) =>{

        const FilterResult = RestaruntData.filter((FilterContent)=>{

            return FilterContent.catagories === filterItem
        })

        setFilterData(FilterResult)
    }

    return(

        <>
    <section className={classes.RestaruntBox}>
     <div className={classes.FilterList}>
        <ul>
            <li className={classes.active} onClick={()=>setFilterData(RestaruntData)} >Popular</li>
            <li onClick={()=>filterRestaruntItem('Burger')}>Burger</li>
            <li onClick={()=>filterRestaruntItem('Fries')}>Fries</li>
            <li >Drinks</li>
            <li>Nuggets</li>
            <li>Wraps</li>
        </ul>
      </div>
            <div className={classes.Restarunt}>
                {filterData.map((item)=>(
                    <div className={classes.RestaruntCard} id={item.id}>
                        <img src={item.img} alt="" />
                        <div className={classes.Restaruntcontent}>
                            <h4>{item.cusines}</h4>
                            <h3>{item.FoodName}</h3>
                        </div>
                        <div className={classes.Rating}>
                            <p className={classes.RatingNo}><span><FaStar/></span>{item.Rating}</p>
                            <p className={classes.prices}>{item.Price}</p>
                        </div>
                        <div className={classes.cartbox}>
                            <button>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}