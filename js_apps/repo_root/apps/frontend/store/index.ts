import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux'
import userModule from './modules/userModule'

const rootReducer = combineReducers({
  user: userModule.reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

export default store