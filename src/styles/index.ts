import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: inline-block;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 64vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  margin-top: 80px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
`
export const Botao = styled.button`
  display: inline-block;

  justify-content: center;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  color: white;

  &:hover {
    background-color: ${variaveis.verdeSecundario};
  }
`

export default EstiloGlobal
