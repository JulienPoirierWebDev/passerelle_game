import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter([
  {  
  // errorElement: <ErrorPage />,
  children: [
    { path: "/", element: <App /> },
 
  ],
    
    

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
)



