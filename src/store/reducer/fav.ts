import type { Produto } from '../../App'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface favState {
  itens: Produto[]
}

const initialState: favState = {
  itens: []
}

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const jaExiste = state.itens.find((p) => p.id === produto.id)

      if (!jaExiste) {
        state.itens.push(produto)
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p: Produto) => p.id !== action.payload)
    }
  }
})

export const { addFavorite, removeFavorite } = favSlice.actions
export default favSlice.reducer
