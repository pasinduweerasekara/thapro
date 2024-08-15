import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Cart from './pages/cart/Cart'
import Wallets from './pages/wallets/Wallets'
import Belts from './pages/belts/Belts'
import Accessories from './pages/accessories/Accessories'
import ForHer from './pages/women/ForHer'
import ForHim from './pages/men/FoHim'

function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element ={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='wallets' element={<Wallets/>}/>
        <Route path='belts' element={<Belts/>}/>
        <Route path='accessories' element={<Accessories/>}/>
        <Route path='women' element={<ForHer/>}/>
        <Route path='men' element={<ForHim/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App