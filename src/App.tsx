import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './app/main/Main'
import { ProtectedRoute } from './app/configs/ProtectedRoute'
import { MyRoutesFaq } from './app/configs/miRoutes'

function App() {

  return (
    <Provider store={store}>
      <MyRoutesFaq />
    </Provider>
  )
}

export default App
