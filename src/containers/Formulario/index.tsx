import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Form, CampoCadastro, BotaoCadastrar } from './styles'
import { FormEvent, useState } from 'react'
import { adicionar } from '../../store/Reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      adicionar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Criar novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <CampoCadastro
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="NOME COMPLETO"
        />
        <CampoCadastro
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="TELEFONE"
        />
        <CampoCadastro
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="EMAIL"
        />
        <BotaoCadastrar type="submit"> Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
