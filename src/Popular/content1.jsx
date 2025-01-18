import { useParams } from "react-router-dom"
import Dining from "./Button"
import classes from './content1.module.css'
import DiningData from "../explore/DiningRestaruntList"
export default function Content(){

    const {productId} = useParams()

    const productDetail = DiningData[productId]
    // useParams gives a params object it is simple javascript object which contain  dyanamic path segement(actual value )
    //Dynamic routing

    return(
     <section className={classes.section}>
        <Dining/>
        <h1>{productDetail.title}</h1>
        <p>content{productDetail.cusine}</p>
        <img src={productDetail.img} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim sed fugit accusamus quo aut cumque dolorum error a aliquam?</p>
     </section>
       
    )
}