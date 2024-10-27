import BotaoNovoContato from '../../components/BotaoNovoContato'
import ListaDeContatos from '../../containers/ListaDeContatos'
import { Titulo } from '../../styles'

const Home = () => (
  <>
    <Titulo>Contatos</Titulo>
    <ListaDeContatos />
    <BotaoNovoContato />
  </>
)
export default Home
