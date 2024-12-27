import { PiGreaterThanBold } from "react-icons/pi";
import classes from './Catagories.module.css'
import { Catogorydata } from "../HomePageData";
import { Link } from "react-router-dom";

export default function Catagories(){

    return(
        <section>
            <div className={classes.catFlex}>
                <h2>Explore categories</h2>
                <p>See all <PiGreaterThanBold/> </p>
            </div>
            <div className={classes.catagoryRow}>
                {Catogorydata.map((item)=>(
                 <Link to={`/ExploreCatagories/${item.id}`} id={item.id} className={classes.catRow}>
                    <div className={classes.catCard} key={item.id}>
                      <div className={classes.catAlign}>
                        <span className={classes.caticon}>{item.icon}</span>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                 </Link>
                ))}
            </div>
        </section>
    )
}