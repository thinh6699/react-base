import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {}

export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    saveUserInfo: (state: any, value: any) => {
      return value.payload
    },
    setLoginFbDefault: (state: any) => {
      state.isLoginFB = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveUserInfo, setLoginFbDefault } = userInfo.actions

export default userInfo.reducer
