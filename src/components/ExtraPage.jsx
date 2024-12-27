import classes from './ExtraPage.module.css'
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
                <li>Signin</li>
                <li>Signup</li>
                <li>Forget Password</li>
            </ul>
        </div>
    )
}