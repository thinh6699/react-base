import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {}

export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    saveUserInfo: (state: any, value: any) => {
      return value.payload
    },
    setLoginDefault: (state: any) => {
      if (state.isLoginFB) {
        delete state.isLoginFB
      }
      if (state.isLoginGoogle) {
        delete state.isLoginGoogle
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveUserInfo, setLoginDefault } = userInfo.actions

export default userInfo.reducer
