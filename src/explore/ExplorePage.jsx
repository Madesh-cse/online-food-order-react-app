import classes from './ExolorePage.module.css'
import { NavLink } from 'react-router-dom'
export default function ExplorePage(){

    return(
     <section className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <img src=' https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png' alt='Dining'/>
              <NavLink to='/explore' className={({isActive})=>isActive?classes.active:undefined} end>Dining out</NavLink>
            </li>
            <li>
              <img src='https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png' alt=''/>
              <NavLink to='/explore/Delivery' className={({isActive})=>isActive?classes.active:undefined} end>Delivery</NavLink>
            </li>
            <li>
                <img src='https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png' alt=''/>
              <NavLink to='/explore/NightsOut' className={({isActive})=>isActive?classes.active:undefined} end>Nightlife</NavLink>
            </li>
             {/* <a></a> it held to re-render the react application when  the link is clicked by sending a default http request to the broswer  */}
           {/* To Prevent this use <link to='path'></link> which prevent re-render the react application when  the link is clicked and prevent sending a default http request to the broswer  */}
          </ul>
        </nav>
      </section>
    )
}