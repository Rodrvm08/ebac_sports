import type { Produto } from '../../App'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface carrinhoState {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.find((p: Produto) => p.id === action.payload.id)) {
        state.itens.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p: Produto) => p.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer
