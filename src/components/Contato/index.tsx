import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'

import { useDispatch } from 'react-redux'
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineSave,
  AiOutlineClose
} from 'react-icons/ai'

// import { remover, editar, alteraStatus } from '../../store/Reducers/tarefas'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/Reducers/contatos'
// import { Botao, BotaoSalvar } from '../../styles'
// import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [telefoneOriginal, emailOriginal])
  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Infos>
        <S.Nome>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Nome>

        <ul>
          <li>
            <S.CampoTelefone
              disabled={!estaEditando}
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </li>
          <li>
            <S.CampoEmail
              disabled={!estaEditando}
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </li>
        </ul>
      </S.Infos>{' '}
      <S.Acoes>
        {!estaEditando ? (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <AiOutlineEdit size={20} />
            </S.Botao>
            <S.BotaoDeletar onClick={() => dispatch(remover(id))}>
              <AiOutlineDelete size={20} />
            </S.BotaoDeletar>
          </>
        ) : (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              <AiOutlineSave size={20} />
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>
              <AiOutlineClose size={20} />
            </S.BotaoCancelar>
          </>
        )}
      </S.Acoes>
    </S.Card>
  )
}

export default Contato
