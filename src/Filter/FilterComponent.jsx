import classes from "./FilterComponent.module.css";
import { NavLink } from "react-router-dom";

export default function FilterComponent({ props }) {
  return (
    <div className={classes.FilterList}>
      <ul>
        <li> <NavLink className={({isActive})=>isActive?classes.active:undefined}>Offers</NavLink> </li>
        <li> <NavLink>Rating:4.5+</NavLink></li>
        <li> <NavLink>Pet Friendly</NavLink></li>
        <li> <NavLink>Outdoor Seating</NavLink></li>
        <li> <NavLink>Serves Alcohal</NavLink></li>
        <li> <NavLink>Open Now</NavLink></li>
      </ul>
    </div>
  );
}
