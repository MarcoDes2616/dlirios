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
import LoginV2 from './pages/LoginV2'
import CreateProducts from './pages/CreateProducts'

function App() {
  const isLoading = useSelector(state => state.isLoadign);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([])

  useEffect(() => {
    getStorage()
    dispatch(setIsLoading(true))
    const interval = setInterval(() => {
      dispatch(setIsLoading(false))
    }, 2500)
  }, [])

  const getStorage = () => {
    if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
    } else {
        localStorage.setItem("cart", JSON.stringify([]))
    }
  };

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <Loadder />}
        <Navbar />
        <Routes>
          <Route path='/login' element={<LoginV2 />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/products/viniles' element={<Viniles />}/>
          <Route path='/products/cintas' element={<Cintas />}/>
          <Route path='/products/apliques' element={<Apliques />}/>
          <Route path='/products/decorables' element={<Decorables />}/>
          <Route path='/products/herramientas' element={<Herramientas />}/>
          <Route path='/products/create' element={<CreateProducts />}/>
        </Routes>
      </HashRouter>
    </div>

  )
}

export default App
