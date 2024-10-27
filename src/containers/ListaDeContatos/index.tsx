import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'
import Contato from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <MainContainer>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeContatos
