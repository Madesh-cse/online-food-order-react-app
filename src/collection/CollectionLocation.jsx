import classes from './CollectionLocation.module.css'
import { NavLink } from 'react-router-dom'

export default function CollectionModule(){

    return(
        <section className={classes.CollectionHeader}>
            <h1>Collections-Chennai</h1>
            <p>Create and browse lists of the finest restaurants</p>
            <nav>
                <ul>
                   <li>
                    <NavLink to='/collection/Chennai'>HandPicked</NavLink>
                   </li>
                   <li>
                    <NavLink to='/collection/Chennai/Saved'>Saved Collections</NavLink>
                   </li>
                </ul>
            </nav>
            <hr/>
        </section>
    )
}