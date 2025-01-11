import classes from './ExtraPage.module.css'
import { Link } from 'react-router-dom'
export default function ExtraPageList(){

    return(
        <div className={classes.pageBox}>
            <h6 className={classes.title}>PAGES</h6>
            <ul>
                <li>Details</li>
                <li>Listing</li>
                <li>Messages</li>
                <li>Search</li>
                <li>Component</li>
            </ul>
            <h6 className={classes.title}>ACCOUNT</h6>
            <ul>
               <Link to='Registration'><li>Signin</li></Link> 
                <li>Signup</li>
                <li>Forget Password</li>
            </ul>
        </div>
    )
}