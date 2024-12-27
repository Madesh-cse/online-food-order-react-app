import { Outlet } from "react-router-dom";
import CollectionModule from "../collection/CollectionLocation";
export default function CollectLocatioRoot(){

    return(
        <>
        <CollectionModule/>
        <Outlet/>
        </>
    )
}