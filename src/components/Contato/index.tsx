import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'

import { useDispatch } from 'react-redux'
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineSave,
  AiOutlineClose
} from 'react-icons/ai'

import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/Reducers/contatos'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
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
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal])
  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Infos>
        {estaEditando && <em>Editando: </em>}
        <S.CampoNome
          ativo={!estaEditando}
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        ></S.CampoNome>

        <ul>
          <li>
            <S.CampoTelefone
              ativo={!estaEditando}
              disabled={!estaEditando}
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </li>
          <li>
            <S.CampoEmail
              ativo={!estaEditando}
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
            <Botao onClick={() => setEstaEditando(true)}>
              <AiOutlineEdit size={20} />
            </Botao>
            <S.BotaoDeletar onClick={() => dispatch(remover(id))}>
              <AiOutlineDelete size={20} />
            </S.BotaoDeletar>
          </>
        ) : (
          <>
            <BotaoSalvar
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
            </BotaoSalvar>
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
