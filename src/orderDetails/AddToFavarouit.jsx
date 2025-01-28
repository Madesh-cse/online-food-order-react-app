import classes from './OrderDetails.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { removeFavorites } from '../features/AddToCart/FavoriteSlice';
import { LiaStarSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
export default function AddToFavarouit(){

    const favorites = useSelector((state)=>state.favorites)

    const dispatch = useDispatch()

    const  handleRemoveFromFavorites = (id)=>{
        dispatch(removeFavorites({id}))
    }

    return(
        <section>
            <div className={classes.OrderSuccessfull}>
                {/* <img src="https://cdn-icons-png.flaticon.com/128/5709/5709755.png" alt="OrderSuccessful" />
                <h1>Delivery Page</h1>
                <h2>Favorites</h2> */}
                <h2>Favourites</h2>
                {favorites.length === 0 ? (
                    <p>No favorite products yet.</p>
                ):(
                    <div className={classes.DeliveryRestarunt}>
                        {
                            favorites.map((item)=>(
                                <Link to={`/ProductDetails/${item.id}`} key={item.id}>
                                <div className={classes.DeliveryDiningCard}>
                                   <img src={item.img} alt = ''/>
                                   <div className={classes.DeliveryDiningTitle}>
                                       <h4>{item.title}</h4>
                                       <p>{item.rating}<span><LiaStarSolid/></span></p>
                                   </div>
                                   <div className={classes.DeliveryDiningCusine}>
                                       <h4>{item.cusine}</h4>
                                       <p>{item.price}</p>
                                   </div>
                                   <div className={classes.DeliveryDiningDestination}>
                                       <h4>{item.address}</h4>
                                       <p>{item.distance}</p>
                                   </div>
                                   <button onClick={()=>handleRemoveFromFavorites(item.id)}>x</button>
                               </div>
                               </Link>
                            ))
                        }
                    </div>
                   
                )}
            </div>
        </section>
    )
}