import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    items:[],
    tempItem:[],
    TotalItemCost:0,
    handlingCharge:5,
    grantTotal:0,
    orderDetails:null,
    value:0

}

const CartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        // create action function
        AddItem(state,action){

            const existingItem = state.items.find((item)=>item.id === action.payload.id);

            if(existingItem){

                existingItem.quantity+=1
            }
            else{
                state.items.push({...action.payload,quantity:1})
            }

            state.tempItem = [{...state.items}]
            state.TotalItemCost = state.items.reduce((sum,item)=>sum+item.caloriesPerServing,0)
            state.grantTotal = state.TotalItemCost + state.handlingCharge

            alert('Item is added')
        },
        removeItem(state,action){
            state.items = state.items.filter((item)=>item.id!==action.payload)
            state.tempItem = [{...state.items}]
            state.TotalItemCost = state.items.reduce((sum,item)=>sum+item.caloriesPerServing,0)
            state.grantTotal = state.TotalItemCost + state.handlingCharge
        },
        setOrderDetails(state,action){
            state.orderDetails = action.payload
        },
    }
})

export default CartSlice.reducer
export const {AddItem,removeItem,setOrderDetails} = CartSlice.actions