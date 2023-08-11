import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
}

interface State {
  users: User[]
}

const initialState: State = {
  users: []
}

const userModule = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userList(state: State) {
      return state.users
    },
    refreshUserList(state: State, action: PayloadAction<User>) {
      state.users.splice(0)
      state.users.push(...action.payload)
    }
  }
})

export const {
  userList,
  refreshUserList
} = userModule.actions

export default userModule