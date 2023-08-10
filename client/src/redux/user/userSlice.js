import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser : {}
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action)=>{
        state.currentUser = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess } = counterSlice.actions

export default counterSlice.reducer