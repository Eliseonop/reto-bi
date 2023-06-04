import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { MyRoutesFaq } from './app/configs/miRoutes'

function App() {

  return (
    <Provider store={store}>
      <MyRoutesFaq />
    </Provider>
  )
}

export default App
