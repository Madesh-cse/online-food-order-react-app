import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){

    const pathName = useLocation()

    // This effect runs whenever the path name changes

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[pathName])

    return null
}