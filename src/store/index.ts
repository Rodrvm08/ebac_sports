import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducer/carrinhoSlice'
import favReducer from './reducer/fav'
import { apiSlice } from './apiSlice'

export const store = configureStore({
  reducer: {
    fav: favReducer,
    carrinho: carrinhoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
