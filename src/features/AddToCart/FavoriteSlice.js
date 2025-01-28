import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
    name:'favorites',
    initialState:[],
    reducers:{
        addFavorite:(state,action)=>{
            if(!state.find((item)=>item.id === action.payload.id)){
                state.push(action.payload)
            }
        },
        removeFavorites:(state,action)=>{
           return state.filter((item)=>item.id !== action.payload.id)
        }
    }
})

export const {addFavorite,removeFavorites} = FavoriteSlice.actions

export default FavoriteSlice.reducer;