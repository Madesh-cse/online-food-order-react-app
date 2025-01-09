import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'
import { useSelector } from "react-redux"
export default function Navbar(){

    const selector = useSelector((state)=>state.Cart.items)
    return(

        <header>
            <nav>
                <div className={classes.navbarFlex}>
                    <div className={classes.navbar}>
                       <Link to='/'><FaLocationCrosshairs/> SAN FRANCISCO,CALIFORNIA</Link>
                       <Link to='/'> <IoBagHandle className={classes.bag}/> PICK UP</Link>
                       <Link to='BestDeals'> <TbMoneybag className={classes.moneybag}/>BEST DEALS</Link>
                    </div>
                    <div className={classes.navInput}>
                        <input alt="text" placeholder="Search for..."/>
                        <span><button><IoSearchSharp/></button></span>
                        <button className={classes.btn}><IoFilterSharp/></button>
                       <Link to='/CheckOut'><button className={classes.btn}><IoBagHandle/>({selector.length})</button></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}