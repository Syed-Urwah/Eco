import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[
        
    ]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart : (state, action)=>{
        state.products = state.products.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer