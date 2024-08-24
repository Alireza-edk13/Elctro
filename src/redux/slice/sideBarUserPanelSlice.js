import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSideBarOpen: false,
}

export const sideBarUserPanelSlice = createSlice({
  name: 'sideBarUserPanelSlice',
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
export const { openSideBar, closeSideBar } = sideBarUserPanelSlice.actions
