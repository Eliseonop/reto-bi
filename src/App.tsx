import './App.css'
import { RouterProvider,redirect  } from 'react-router-dom'
import { router } from './app/configs/router.config'
import { Provider } from 'react-redux'
import { store } from './app/store/store'


function App() {

  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
      ></RouterProvider>
    </Provider>
  )
}

export default App
