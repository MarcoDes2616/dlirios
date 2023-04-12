import './App.css'
import Login from './pages/Login'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from './store/slices/isLoading.slice'
import Loadder from './components/loader/Loadder'
import { cargarProductosThunk, setCart } from './store/slices/cart.slice'
import { setUser } from './store/slices/users.slice'
import ProductsCategory from './pages/products/ProductsCategory'
import Contact from './pages/contact/Contact'

function App() {
  const isLoading = useSelector(state => state.isLoadign);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const token = localStorage.getItem("token")
  const cartStorage = JSON.parse(localStorage.getItem("cart"))

  useEffect(() => {
   
  }, [])
  
  


  return (
      <HashRouter>
        {isLoading && <Loadder />}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:category' element={<ProductsCategory />} />
        </Routes>
      </HashRouter>

  )
}

export default App
