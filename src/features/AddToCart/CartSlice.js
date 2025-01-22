import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    items:[],
    tempItem:[],
    TotalItemCost:0,
    handlingCharge:5,
    grantTotal:0,
    orderDetails:null

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
        updateTempQuantity(state,action){
            console.log("Action Payload:", action.payload);
            console.log("Before Update:", state.tempItem);

            if (!Array.isArray(state.tempItem)) {
                console.error("tempItem is not an array!");
                return;
            }

            state.tempItem = state.tempItem.map((item) => {
                if (item.id === action.payload.id) {
                  return { ...item, quantity: action.payload.quantity }; // Update the quantity immutably
                }
                return item; // Keep other items unchanged
              });

            console.log("After Updated :", state.tempItem);
            
        },
        removeItem(state,action){
            state.items = state.items.filter((item)=>item.id!==action.payload)
            state.tempItem = [{...state.items}]
            state.TotalItemCost = state.items.reduce((sum,item)=>sum+item.caloriesPerServing,0)
            state.grantTotal = state.TotalItemCost + state.handlingCharge
        },
        setOrderDetails(state,action){
            state.orderDetails = action.payload
        }
    }
})

export default CartSlice.reducer
export const {AddItem,removeItem,setOrderDetails,updateTempQuantity} = CartSlice.actions