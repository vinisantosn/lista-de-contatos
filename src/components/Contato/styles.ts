import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  display: flex;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Infos = styled.div`
  flex: 1; /* Ocupa a maior parte da largura */
  margin-right: 34px;
`
export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`
export const Campo = styled.input`
  border: none;
  cursor: pointer;
`
export const CampoTelefone = styled(Campo)`
  margin-bottom: 8px;
`
export const CampoEmail = styled(Campo)``

export const Botao = styled.button`
  display: inline-block;

  justify-content: center;
  background-color: #007bff; /* Cor de fundo do botão */
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: white; /* Cor do ícone */

  &:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
  }

  &:focus {
    outline: none;
  }
`
export const BotaoDeletar = styled(Botao)`
  margin-left: 8px;
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: #5cb85c;
  color: white;

  &:hover {
    background-color: #4cae4c;
  }
`
export const BotaoCancelar = styled(BotaoDeletar)``

export const Acoes = styled.div`
  display: inline-block;
`
