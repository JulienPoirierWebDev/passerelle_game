import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {store} from './store/store.js'
import {Provider} from 'react-redux'
import HomePage from './pages/home/index.jsx'


const router = createBrowserRouter([
  {  
  // errorElement: <ErrorPage />,
  children: [
    { path: "/", element: <HomePage/> },
  ],
    
    

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)



