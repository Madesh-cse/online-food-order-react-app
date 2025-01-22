import { Outlet } from "react-router-dom";
import BestCoupons from "../BestDeals/NewCoupons";

export default function BestDeals(){

    return(
        <>
        <BestCoupons/>
        <Outlet/>
        </>
    )
}