import LiveChat from './components/LiveChat';
import { Beranda } from './pages/Beranda';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login'
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
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
