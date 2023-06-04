import './App.css'
import { Provider } from 'react-redux'
import  store  from './app/store/store'
import { MyRoutesFaq } from './app/configs/miRoutes'
import { Principal } from './app/configs/Principal'


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
