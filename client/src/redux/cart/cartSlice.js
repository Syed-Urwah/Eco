import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart : (state, action)=>{

        let exist = false;
        state.products.map((e)=>{
         
          if(e.id == action.payload){
            e.quantity++;
            exist = true
            return
          }
          
        })

        console.log("new")
        if(!exist){
          state.products = state.products.concat({
            id: action.payload,
            quantity: 1
          })
        }
          

       
       
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer