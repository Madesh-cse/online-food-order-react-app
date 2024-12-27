import { useParams } from "react-router-dom"
import Dining from "./Button"
import classes from './content1.module.css'
export default function Content(){

    const params = useParams()

    // useParams gives a params object it is simple javascript object which contain  dyanamic path segement(actual value )
    //Dynamic routing

    return(
     <section className={classes.section}>
        <Dining/>
        <h1>Content</h1>
        <p>content{params.id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim sed fugit accusamus quo aut cumque dolorum error a aliquam?</p>
     </section>
       
    )
}