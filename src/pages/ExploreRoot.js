import { Outlet } from "react-router-dom";
import ExplorePage from "../explore/ExplorePage";
export default function ExploreRoot(){

    return(
        <>
        <ExplorePage/>
        <Outlet/>
        </>
    )
}