import './App.css'
import Login from './pages/Login'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from './store/slices/isLoading.slice'
import Loadder from './components/loader/Loadder'
import ProductsCategory from './pages/products/ProductsCategory'
import Contact from './pages/contact/Contact'
import ProtectedRoutes from './components/ProtectedRoutes'
import MyForm from './pages/admin/MyForm'
import Footer from './components/footer/Footer'
import Resetpassword from './pages/Resetpassword'
import { setUser } from './store/slices/users.slice'
import axios from './Utils/axios'
import getConfig from './Utils/service'

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
    axios.get("/system/me", getConfig())
      .then(res => {
        dispatch(setUser(res.data))
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
          <Route path='/reset_password/:token' element={<Resetpassword />} />
          <Route path='/products/category/:categoriId' element={<ProductsCategory />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/create/products' element={<MyForm />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>

  )
}

export default App
