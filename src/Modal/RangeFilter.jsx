import React from 'react'
import { useState } from 'react'
import classes from './Modal.module.css'

function RangeFilter() {

    const[Value,setValue] = useState(3.5)

    const handleChange = (event)=>{
        setValue(event.target.value)
    }
  return (
    <>
   <div className={classes.rangebox}>
       <div className={classes.RangeTitle}>
          <p>Rating</p>
          <h4>{Value}</h4>
        </div>
        <div className={classes.RangeFilter}>
            <input type='range' onChange={handleChange} min="0" max="5.0" step={0.5}/>
        </div>
    </div>
    </>
  )
}

export default RangeFilter