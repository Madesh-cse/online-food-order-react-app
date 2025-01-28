import { createSlice } from "@reduxjs/toolkit";
import { DeliveryFoodList } from "../../explore/DeliveryData";

const productSlice = createSlice({

    name:'products',
    initialState:DeliveryFoodList,
    reducers:{}
})

export default productSlice.reducer;