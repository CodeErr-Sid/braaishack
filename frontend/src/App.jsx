import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/Place_Order/Place_Order'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import Cursor from './components/cursor/Cursor'
import Menu from './pages/Menu/Menu'
import Events from './pages/Events/Events'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/About/About';


const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        {/* <Cursor/> */}
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/PlaceOrder' element={<PlaceOrder />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
