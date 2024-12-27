import { AccordionData } from "../HomePageData"
import Accordion from "./Accordion"
import classes from './Accordion.module.css'
export default function AccordionContent(){

    return(
        <section className={classes.accordion} >
         <h1>Explore options near me</h1>
         {AccordionData.map(({title,content,id})=>(
                <Accordion title={title} content ={content} id={id}  key={id}/>
            ))}
        </section>
    )
}