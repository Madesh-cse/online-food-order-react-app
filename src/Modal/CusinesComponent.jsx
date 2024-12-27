import classes from './Modal.module.css'
import { CiSearch } from "react-icons/ci";
import { CusineData } from './CusineList';
import { useState } from 'react';
export default function Cusines({HandleCount}){

    const[Cusines,setCusines] = useState('')

    function SearchCusines(e){

        setCusines(e.target.value)
    }

    console.log(Cusines)

    return(
        <div className={classes.Cusines}>
            <div className={classes.CusinesInput}>
                <input type="text" onChange={SearchCusines} placeholder='Search here' />
                <p><CiSearch/></p>
            </div>
            <div className={classes.CusinesList}>
                {CusineData.filter((filterItem)=>{
                    return Cusines.toLowerCase() === '' ? filterItem : filterItem.name.toLowerCase().includes(Cusines)
                }).map((item)=>(
                    <div className={classes.CusinesCheck} id={item.id}>
                        <div className={classes.CusinesFlex}>
                           <input type="checkbox"  onClick={HandleCount} id='Popularity' name='Popularity' value='Popularity' />
                           <label htmlFor="">{item.name}</label> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}