import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}
const initialState: ContatoState = {
  itens: [
    {
      nome: 'Ana Carolina Silva',
      email: 'ana.silva@example.com',
      telefone: '(11) 98765-4321',
      id: 1
    },
    {
      nome: 'João Victor Santos',
      email: 'joao.santos@example.org',
      telefone: '(21) 98765-4321',
      id: 2
    },
    {
      nome: 'Maria Eduarda Pereira',
      email: 'maria.pereira@example.net',
      telefone: '(41) 98765-4321',
      id: 3
    },
    {
      nome: 'Pedro Henrique Almeida',
      email: 'pedro.almeida@example.com',
      telefone: '(12) 98765-4321',
      id: 4
    },
    {
      nome: 'Laura Sofia Oliveira',
      email: 'laura.oliveira@example.org',
      telefone: '(19) 98765-4321',
      id: 5
    },
    {
      nome: 'Gabriel Lucas Costa',
      email: 'gabriel.costa@example.net',
      telefone: '(27) 98765-4321',
      id: 6
    },
    {
      nome: 'Sofia Beatriz Fernandes',
      email: 'sofia.fernandes@example.com',
      telefone: '(31) 98765-4321',
      id: 7
    },
    {
      nome: 'Lucas Miguel Gomes',
      email: 'lucas.gomes@example.org',
      telefone: '(16) 98765-4321',
      id: 8
    },
    {
      nome: 'Beatriz Amanda Rodrigues',
      email: 'beatriz.rodrigues@example.net',
      telefone: '(24) 98765-4321',
      id: 9
    },
    {
      nome: 'Miguel Rafael Santos',
      email: 'miguel.santos@example.com',
      telefone: '(51) 98765-4321',
      id: 10
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (contato) => contato.id !== action.payload
        ))
      ]
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (tarefa) => tarefa.id !== action.payload
        ))
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.itens[index] = action.payload // Atualiza o contato com as novas informações
      } else {
        alert('Contato não encontrado para edição!')
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
