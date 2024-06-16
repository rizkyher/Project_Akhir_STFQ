import { Header } from './components/Header';
import { Beranda } from './pages/Beranda';
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Beranda />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
