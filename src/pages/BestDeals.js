import { Outlet } from "react-router-dom";
import BestCoupons from "../BestDeals/NewCoupons";
import Footer from "../components/Footer";
import AccordionContent from "../components/AccordionContent";

export default function BestDeals(){

    return(
        <>
        <BestCoupons/>
        <Outlet/>
        <AccordionContent/>
        <Footer/>
        </>
    )
}