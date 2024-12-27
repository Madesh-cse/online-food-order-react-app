import { useState } from 'react'
import classes from './Accordion.module.css'
export default function Accordion({title,content,id}){

    const[open,setopen] = useState(false)

    function HandleClick(){

        setopen((prevState)=>!prevState)
    }
    return(
        <div className={classes.accordionbox}>
            <div className={classes.accordionContent} key={id}>
                 <h3>{title}</h3>
                 <div onClick={HandleClick} className={classes.btn}>{open?'-':'+'}</div>
            </div>
            {open&&<div className={classes.contentTopic}>{content}</div>}
        </div> 
    )
}