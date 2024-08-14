import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Cart from './pages/cart/Cart'

function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element ={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App