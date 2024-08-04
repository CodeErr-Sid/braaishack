import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/Place_Order/Place_Order';
import MyOrders from './pages/MyOrders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';
import Menu from './pages/Menu/Menu';
import Events from './pages/Events/Events';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/About/About';
import GiftSection from './pages/GiftSection/GiftSection';
import Preloader from './components/Preloader/Preloader';
import './index.css';
import Shop from './pages/Shop/Shop';
import AnimatedCursor from "react-animated-cursor"

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Preloader />
      <div className='app'>
        {/* <CursorFollower /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode:'difference',
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)',
            mixBlendMode:'difference',
            background:'transparent'

          }}
        />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/GiftSection' element={<GiftSection />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
