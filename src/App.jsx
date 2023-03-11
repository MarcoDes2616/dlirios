import './App.css'
import Login from './pages/Login'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from './store/slices/isLoading.slice'
import Loadder from './components/Loadder'
import Viniles from './pages/products/Viniles'
import Cintas from './pages/products/Cintas'
import Apliques from './pages/products/Apliques'
import Decorables from './pages/products/Decorables'
import Herramientas from './pages/products/Herramientas'
import CreateProducts from './pages/CreateProducts'
import { getUserInfo, userExists } from './Utils/fireBase.config'
import { cargarProductosThunk, setCart } from './store/slices/cart.slice'
import { setUser } from './store/slices/users.slice'
import { async } from '@firebase/util'

function App() {
  const isLoading = useSelector(state => state.isLoadign);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const token = localStorage.getItem("token")
  const cartStorage = JSON.parse(localStorage.getItem("cart"))

  useEffect(() => {
    if (token) {
      getStorage()
    }
  }, [])
  
  const getStorage = async () => {
    dispatch(setIsLoading(true))
    getUserLogged()
    dispatch(cargarProductosThunk(token))
    dispatch(setIsLoading(false))
  };
  const getUserLogged = async () => {
    if (token != "") {
      const temp = await getUserInfo(token)
      dispatch(setUser({ ...temp }))
    } else {
      localStorage.setItem("token", JSON.stringify())
    }
  }


  return (
    <div className="App">
      <HashRouter>
        {isLoading && <Loadder />}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/viniles' element={<Viniles />} />
          <Route path='/products/cintas' element={<Cintas />} />
          <Route path='/products/apliques' element={<Apliques />} />
          <Route path='/products/decorables' element={<Decorables />} />
          <Route path='/products/herramientas' element={<Herramientas />} />
          <Route path='/products/create' element={<CreateProducts />} />
        </Routes>
      </HashRouter>
    </div>

  )
}

export default App
