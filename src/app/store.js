import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../features/AddToCart/ProductSlice'
import CartReducer from '../features/AddToCart/CartSlice'

export const store = configureStore({

    reducer:{
        FoodItems:ProductReducer,
        Cart:CartReducer
    }
})  