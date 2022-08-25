import { createSlice } from '@reduxjs/toolkit'

const initialState: string = 'Light'

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    handleTheme: (state: string, value: any) => {
      return value.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { handleTheme } = theme.actions

export default theme.reducer
