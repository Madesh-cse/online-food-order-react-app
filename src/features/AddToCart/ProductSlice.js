import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchFoodItem = createAsyncThunk('FoodItems/fetchFoodItems',async()=>{

    const fetch_URL = await axios.get('https://dummyjson.com/recipes');

    return fetch_URL.data.recipes
    // fetching a data from recipes which is a nested object and return as a array to a item=[]
})

const ProductSlice = createSlice({

    name:'FoodItems',
    initialState:{
        item:[],
        status:'idle'
    },
    reducers:{
},
    extraReducers(builder){
        builder
          .addCase(fetchFoodItem.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchFoodItem.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            // action.payload is to have a data to a item[]
            state.item = action.payload
            // return { ...state, item: action.payload, status: "success" };
        })
        .addCase(fetchFoodItem.rejected,(state)=>{
            state.status = 'failed'
        })
    }
})

export default ProductSlice.reducer
