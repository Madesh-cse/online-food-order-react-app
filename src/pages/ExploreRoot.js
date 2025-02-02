import { Outlet } from "react-router-dom";
import ExplorePage from "../explore/ExplorePage";
import { TabTitle } from "../components/GeneralFunction";
export default function ExploreRoot(){

    TabTitle("Explore")
    return(
        <>
        <ExplorePage/>
        <Outlet/>
        </>
    )
}