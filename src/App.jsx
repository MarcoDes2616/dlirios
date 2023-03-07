import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from './store/slices/isLoading.slice'
import Loadder from './components/Loadder'
import Products from './components/products/Products'

function App() {
  const isLoading = useSelector(state => state.isLoadign);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true))
    const interval = setInterval(() => {
      dispatch(setIsLoading(false))
    }, 2500)
  }, [])

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <Loadder />}
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </HashRouter>
    </div>

  )
}

export default App
