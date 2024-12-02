import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import app from "./Firebase.config"
import Ragister from './Ragister'
import { ToastContainer } from 'react-toastify';
function App() {
  const myroute =createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Ragister/>}/>
      </>
    )
  )

  return (
    <>
     <RouterProvider router={myroute}/>
     <ToastContainer/>
    </>
  )
}

export default App
