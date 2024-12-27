import classes from './ExploreCollection.module.css'
import { exploreData } from './ExploreData'
import { CiStar } from "react-icons/ci";
import { FaPercentage } from "react-icons/fa";
export default function ExploreCollectionPage(){

    return(
        <section>
            <div className={classes.exploreCollectionTitle}>
                <div className={classes.exploreCollectionImg}></div>
                <div className={classes.exploreCollectionContent}>
                    <p>VS CODE COLLECTION </p>
                    <h1>Newly Opened Places</h1>
                    <p>Chic newcomers bringing a gush of newness and aroma of deliciousness. Updated every Thursday!</p>
                    <p>13 Places</p>
                </div>
            </div>

            <article>
                <div className={classes.collection}>
                    {exploreData.map((item)=>(
                        <div className={classes.collectionCard} key={item.id}>
                            <img src={item.img} alt={''}/>
                            <div className={classes.Discount}>
                                <p> <FaPercentage/> Flat 10% OFF</p>
                            </div>
                            <div className={classes.collectionCardContent}>
                                <h4>{item.title}</h4>
                                <p><span>New <CiStar/> </span>{item.status}</p>
                                <p>{item.catagory}</p>
                                <p>{item.add}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}