import { Outlet } from "react-router-dom";
import ExplorePage from "../explore/ExplorePage";
import AccordionContent from "../components/AccordionContent";
import Footer from "../components/Footer";
export default function ExploreRoot(){

    return(
        <>
        <ExplorePage/>
        <Outlet/>
        <AccordionContent/>
        <Footer/>
        </>
    )
}