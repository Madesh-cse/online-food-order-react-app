import { Outlet } from "react-router-dom";
import BestCoupons from "../BestDeals/NewCoupons";
import { TabTitle } from "../components/GeneralFunction";

export default function BestDeals(){

    TabTitle("Best Deals")
    return(
        <>
        <BestCoupons/>
        <Outlet/>
        </>
    )
}