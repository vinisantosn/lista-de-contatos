import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

type Props = {
  ativo?: boolean
}

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
export const Campo = styled.input<Props>`
  border: none;
  cursor: ${(Props) => (Props.ativo ? 'default' : 'pointer')};
`
export const CampoNome = styled(Campo)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`
export const CampoTelefone = styled(Campo)`
  margin-bottom: 8px;
`
export const CampoEmail = styled(Campo)``

export const BotaoDeletar = styled(Botao)`
  margin-left: 8px;
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`

export const BotaoCancelar = styled(BotaoDeletar)``

export const Acoes = styled.div`
  display: inline-block;
`
