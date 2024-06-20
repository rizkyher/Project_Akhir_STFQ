import LiveChat from './components/LiveChat';
import { Beranda } from './pages/Beranda';
import Login from './pages/Login'
import EditProfile from './pages/Profile';
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Beranda />} />
        <Route path='/livechat' element={<LiveChat />} />
        <Route path='/profile' element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
