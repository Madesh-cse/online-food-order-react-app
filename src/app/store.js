import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../features/AddToCart/ProductSlice'
import CartReducer from '../features/AddToCart/CartSlice'
import DeliveryProductReducer from '../features/AddToCart/DeliveryProudctSlice';
import FavoriteReducer from '../features/AddToCart/FavoriteSlice'

export const store = configureStore({

    reducer:{
        FoodItems:ProductReducer,
        Cart:CartReducer,
        products:DeliveryProductReducer,
        favorites:FavoriteReducer
    }
})  