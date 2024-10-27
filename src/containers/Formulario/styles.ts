import styled from 'styled-components'
import { BotaoSalvar } from '../../styles'

export const Form = styled.form`
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CampoCadastro = styled.input`
  padding: 8px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid rgba(102, 102, 102, 0.5);
  border-radius: 0;
  font-weight: bold;
  color: #666666;
  display: block;
  width: 70%;
  margin: 0 auto 8px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-bottom-color: rgba(51, 51, 51, 0.8);
  }
`

export const BotaoCadastrar = styled(BotaoSalvar)`
  justify-content: right;
  border-radius: 8px;

  height: 40px;
  margin-top: 40px;
  width: 70%;
`
