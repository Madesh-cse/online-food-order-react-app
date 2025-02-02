import { Outlet } from "react-router-dom"
import { TabTitle } from "../components/GeneralFunction"
export default function RestaruntPageRoot(){

    TabTitle("Time BreakFast")

    return(
        <>
         <Outlet/>
        </>
    )
}