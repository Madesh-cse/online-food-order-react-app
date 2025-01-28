import classes from './DeliveryPage.module.css'
import { LiaStarSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../features/AddToCart/FavoriteSlice';
import { useNavigate } from 'react-router-dom';
export default function DeliveryFoodListItem(){

    const Products = useSelector((state)=>state.products)

    const dispatch = useDispatch()

    const navigate =useNavigate()

    const handleFavorite = (item)=>{
        dispatch(addFavorite(item))
        alert('product is added to favorite')
        navigate('/OrderSuccessfull')
    }
    


    // let[data,setdata] = useState(DeliveryFoodList);

    // const Filterresult = (catItem) => {

    //     const result = DeliveryFoodList.filter((item)=>{
    //         return item.category === catItem;
    //     })

    //    setdata(result)
    // }  
return(
    <>
   <div className={classes.FilterList}>
        <ul>
            <li >Offers</li>
            <li >Rating:4.5+</li>
            <li>Pure NonVeg</li>
            <li >Briyani</li>
            <li>Pure Veg</li>
            <li>All</li>
        </ul>
    </div>
    <div className={classes.DeliveryRestarunt}>
        {Products.map((item)=>(
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
                <button className={classes.favorite} onClick={()=>handleFavorite(item)}><FaRegHeart/></button>
            </div>
            </Link>
        ))}
    </div>
    </>
    
)
}