import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {


  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </HashRouter>
    </div>

  )
}

export default App
