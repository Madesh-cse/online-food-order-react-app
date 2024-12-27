import classes from './Modal.module.css'
import { CiSearch } from "react-icons/ci";
import { MoreFilterData } from './CusineList';
export default function MoreFilter(){

    return(
        <div className={classes.MoreFilter}>
            <div className={classes.CusinesInput}>
               <input type="text" placeholder='Search here' />
               <p><CiSearch/></p>
           </div>
           <div className={classes.MoreListContent}>
            {MoreFilterData.map((item)=>(
                <div className={classes.MoreFilterList}>
                    <div className={classes.MoreFilterInput} id={item.id}>
                      <input type="checkbox"  id='Popularity' name='Popularity' value='Popularity' />
                      <label htmlFor="">{item.filter}</label> 
                    </div>
                </div> 
            ))}
           </div>
        </div>
       
    )
}