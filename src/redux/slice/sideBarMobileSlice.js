import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSideBarOpen: false,
}

export const sideBarMobileSlice = createSlice({
  name: 'sideBarMobileSlice',
  initialState,
  reducers: {
   
    openSideBar:(state,action)=>{
        state.isSideBarOpen = true
    },
    closeSideBar:(state,action)=>{
        state.isSideBarOpen = false
    }
  },
})
// Action creators are generated for each case reducer function
export const { openSideBar, closeSideBar } = sideBarMobileSlice.actions
