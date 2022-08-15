import { createSlice } from '@reduxjs/toolkit'

const initialState: string = ''

export const token = createSlice({
  name: 'token',
  initialState,
  reducers: {
    handleToken: (state: string, value: any) => {
      return value.payload
    },
    setTokenNull: () => {
      return ''
    }
  }
})

// Action creators are generated for each case reducer function
export const { handleToken, setTokenNull } = token.actions

export default token.reducer
