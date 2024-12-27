
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import AccordionContent from "../components/AccordionContent"
export default function CollectionPage(){

    return(
        <>
         <Outlet/>
         <AccordionContent/>
         <Footer/>
        </>
       
    )
}