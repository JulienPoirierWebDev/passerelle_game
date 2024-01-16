import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {store} from './store/store.js'
import {Provider} from 'react-redux'


const router = createBrowserRouter([
  {  
  // errorElement: <ErrorPage />,
  children: [
    { path: "/", element: <App /> },
  ],
    
    

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}>
        <BrowserRouter>
    <App />
      </RouterProvider>
    </Provider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
)



