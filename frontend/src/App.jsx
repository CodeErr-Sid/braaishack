import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import AnimatedCursor from 'react-animated-cursor'

// Pages
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import GiftSection from './pages/GiftSection/GiftSection';
import PlaceOrder from './pages/Place_Order/Place_Order';
import Verify from './pages/Verify/Verify';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import MyOrders from './pages/MyOrders/MyOrders';
import Checkout from './pages/Checkout/Checkout'; // Ensure this component exists
import ShopCart from './pages/ShopCart/ShopCart'; // Ensure this component exists

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
// import CursorFollower from './components/cursor/Cursor';
import Preloader from './components/Preloader/Preloader';
import MiniCart from './components/MiniCart/MiniCart';
import { CartProvider } from './Context/CartContexts'; // Ensure this context exists

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false); // State for MiniCart visibility


  return (
    <CartProvider>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Preloader /> {/* Consider managing visibility of Preloader */}
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
        {/* <MiniCart /> */}
        <Navbar setShowLogin={setShowLogin} setShowMiniCart={setShowMiniCart} />
        {showMiniCart && <MiniCart />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/gift-section' element={<GiftSection />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<ShopCart />} />
          {/* Add other routes if needed */}
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;