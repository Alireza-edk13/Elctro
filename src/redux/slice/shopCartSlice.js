import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShopCartOpen: false,
}

export const shopCartSlice = createSlice({
  name: 'shopCartSlice',
  initialState,
  reducers: {
   
    openShopCart:(state,action)=>{
        state.isShopCartOpen = true
    },
    closeShopCart:(state,action)=>{
        state.isShopCartOpen = false
    }
  },
})
// Action creators are generated for each case reducer function
export const { openShopCart, closeShopCart } = shopCartSlice.actions
