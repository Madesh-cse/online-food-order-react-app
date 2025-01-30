import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import {  Link } from "react-router-dom";
import classes from './NavBar.module.css'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserProfile from "../Authentication/UserProfile";
export default function Navbar(){

    const selector = useSelector((state)=>state.Cart.items)

    const navigate = useNavigate()

    const handleLogout = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        

        if(user && user.id){

            console.log("User to delete:", user);
           axios.delete(`http://localhost:9000/users/${user.id}`)
           .then(()=>{
            alert("User data deleted successfully and logged out.");
              localStorage.removeItem("user"); // Remove user from localStorage
              navigate("/login");
            })
            .catch((error) => {
                console.error("Error deleting user data:", error);
                alert("Failed to delete user data. Try again later.");
            });
        }
        else {
            alert("No user found in localStorage. Redirecting to login.");
            navigate("/login");
        }
            
    };
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
                        {/* <button className={classes.btn}><IoFilterSharp/></button> */}
                       <Link to='/CheckOut'><button className={classes.btn}><IoBagHandle/>({selector.length})</button></Link>
                       <UserProfile handleLogout={handleLogout}/>
                       <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}