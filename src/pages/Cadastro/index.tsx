import { useNavigate } from 'react-router-dom'
import { Botao } from '../../styles'
import Formulario from '../../containers/Formulario'
import { AiOutlineCaretLeft } from 'react-icons/ai'
import BotaoVoltar from './styles'

const Cadastro = () => {
  const navigate = useNavigate()
  return (
    <>
      <BotaoVoltar onClick={() => navigate('/')}>
        <AiOutlineCaretLeft size={20} />
      </BotaoVoltar>
      <Formulario />
    </>
  )
}

export default Cadastro
