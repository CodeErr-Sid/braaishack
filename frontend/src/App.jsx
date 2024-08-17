import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import AnimatedCursor from 'react-animated-cursor';

// Pages
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Menu2 from './pages/Menu2/Menu2';
import GiftSection from './pages/GiftSection/GiftSection';
import PlaceOrder from './pages/Place_Order/Place_Order';
import Verify from './pages/Verify/Verify';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import MyOrders from './pages/MyOrders/MyOrders';
import Checkout from './pages/Checkout/Checkout';
import ShopCart from './pages/ShopCart/ShopCart';

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Preloader from './components/Preloader/Preloader';
import MiniCart from './components/MiniCart/MiniCart';
import { CartProvider } from './Context/CartContexts';
// index.js or App.js


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false); // State for MiniCart visibility
  const [isLoggedin, setIsLoggedin] = useState(false)
useEffect(()=>{
  const token = localStorage.getItem('token');

  // If token exists, set loggedIn to true; otherwise, set it to false
  if (token) {
      setIsLoggedin(true);
  }
},[])

  return (
    <CartProvider>
      <ToastContainer />
      {showLogin && <LoginPopup setIsLoggedin={setIsLoggedin} setShowLogin={setShowLogin} />}
      <Preloader /> {/* Consider managing visibility of Preloader */}
      <div className='app'>
        <div className="custom-animated-cursor">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: 'var(--cursor-color)',
              zIndex: 9999,
              mixBlendMode: 'difference'
            }}
            outerStyle={{
              zIndex: 9999,
              mixBlendMode: 'difference',
              background: 'transparent',
              border: '3px solid var(--cursor-color)'
            }}
          />
        </div>

        {/* <MiniCart /> */}
        <Navbar isLoggedin={isLoggedin} setShowLogin={setShowLogin} setIsLoggedin={setIsLoggedin} setShowMiniCart={setShowMiniCart} />
         <MiniCart showMiniCart={showMiniCart}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/menu2" element={<Menu2 />} />
          <Route path='/gift-section' element={<GiftSection />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          {/* <Route path='/product' element={<Product />} /> */}
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* <Route path="/orders-braai" element={<MyOrders />} /> */}
          {/* Add other routes if needed */}
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
