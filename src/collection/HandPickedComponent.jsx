import classes from './CollectionLocation.module.css'
import { collectionData } from './ExploreData'
import { Link } from 'react-router-dom'
export default function HandPickedComponent(){

    return(
        <div className={classes.HandPicked}>
            <div className={classes.collectionList}>
                {collectionData.map((item)=>(
                    <Link to='' className={classes.collectionLink}>
                    <div className={classes.CollectionBlock}>
                      <img src ={item.img} alt={''}/>
                        <div className={classes.collectionTitle}>
                            <h3>{item.des}</h3>
                            <p>13 places</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        
    )
}