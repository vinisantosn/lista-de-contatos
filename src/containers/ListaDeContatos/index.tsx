import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MainContainer } from '../../styles'
import Contato from '../../components/Contato'
import { Nome } from '../../components/Contato/styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <MainContainer>
      <h2>Minha lista de contatos</h2>

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
