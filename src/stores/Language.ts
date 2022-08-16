import { createSlice } from '@reduxjs/toolkit'
import { SimpleModel } from '../models'

const initialState: SimpleModel = new SimpleModel()

export const language = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languageChange: (state: SimpleModel, value: any) => {
      return value.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { languageChange } = language.actions

export default language.reducer
