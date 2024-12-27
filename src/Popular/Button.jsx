import { NavLink } from "react-router-dom"
export default function Dining(){

    return(
        <nav>
        <ul >
          <li>
            <NavLink to='popular'>Dining</NavLink>
          </li>
           {/* <a></a> it held to re-render the react application when  the link is clicked by sending a default http request to the broswer  */}
         {/* To Prevent this use <link to='path'></link> which prevent re-render the react application when  the link is clicked and prevent sending a default http request to the broswer  */}
        </ul>
      </nav>
    )
}