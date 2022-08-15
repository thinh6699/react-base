import { createSlice } from '@reduxjs/toolkit'
import { Tasks } from '../models'

const initialState: Tasks[] = []

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    handleListTask: (state: Tasks[], value: any) => {
      return value.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { handleListTask } = tasks.actions

export default tasks.reducer
