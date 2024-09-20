import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false,
    user:null
  },
  reducers: {
    changeloginStatus :(state, action)=> {
        state.loggedIn = action.payload.loggedIn
        state.user = action.payload.user
    }
    },
  },
)

// Action creators are generated for each case reducer function
export const { changeloginStatus } = loginSlice.actions

export default  loginSlice.reducer