import './App.css'
// import { RouterProvider  } from 'react-router-dom'
// import { router } from './app/configs/router.config'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import Routes from './app/configs'


function App() {

  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App
