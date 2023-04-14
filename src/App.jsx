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
import axios from 'axios'
import getConfig from './Utils/getConfig'

function App() {
  const isLoading = useSelector(state => state.isLoadign);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(setIsLoading(true))
    if (token) {
      getDataByToken()
    }
    dispatch(setIsLoading(false))
  }, [])

  const getDataByToken = () => {
    axios.get("https://dliriosback-production.up.railway.app/api/v1/users", getConfig())
      .then(res => {
        dispatch(setUser(res.data))
        localStorage.setItem("token", res.data.token)
      })
      .catch(error => alert(error.name))
  }


  return (
      <HashRouter>
        {isLoading && <Loadder /> }
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
