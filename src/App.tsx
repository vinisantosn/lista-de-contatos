import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
