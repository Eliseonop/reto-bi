import { Provider } from 'react-redux'
import store from './store/store'
import { MyRoutesFaq } from './configs/miRoutes'
import { Principal } from './configs/Principal'


function App() {

  return (
    <Provider store={store}>
      <Principal>

        <MyRoutesFaq></MyRoutesFaq>
      </Principal>

    </Provider>
  )
}

export default App
