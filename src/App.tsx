import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { MyRoutes } from './app/configs/router.config'

function App() {

  return (
    <Provider store={store}>
      <MyRoutes></MyRoutes>
    </Provider>
  )
}

export default App
