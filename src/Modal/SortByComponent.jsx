import classes from './Modal.module.css'

export default function SortBy({HandleClick}){

    return(
        <div className={classes.SortBy}>
            <div className={classes.SortByBtn}>
                <label htmlFor="">
                   <input type="radio" id='Popularity' name='Popularity' value='Popularity' defaultChecked  onChange={HandleClick} />  Popularity
                </label>
            </div>
            <div className={classes.SortByBtn}>
                <label htmlFor="">
                  <input type="radio" id='Rating : High to Low' name='Popularity' value='Rating : High to Low' onChange={HandleClick}   />  Rating : High to Low
                </label>
            </div>
            <div className={classes.SortByBtn}>
                <label htmlFor="">
                  <input type="radio" id='Cost : High to Low' name='Popularity' value='Cost : High to Low' onChange={HandleClick}  />   Cost : High to Low
                </label>
            </div >
            <div className={classes.SortByBtn}>
                <label htmlFor="">
                   <input type="radio" id=' Cost : Low to High' name='Popularity' value='Cost : Low to High' onChange={HandleClick}  />   Cost : Low to High
                </label>
            </div>
            <div className={classes.SortByBtn}>
                <label htmlFor="">
                  <input type="radio" id=' Distance' name='Popularity' value='Distance' onChange={HandleClick}  />  Distance
                </label>
            </div>
            {/* <h6> the value is:{Value}</h6> */}
        </div>


)



}


