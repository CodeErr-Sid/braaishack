import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

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

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/Place_Order/Place_Order';
import MyOrders from './pages/MyOrders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';
import CursorFollower from './components/cursor/Cursor';
import Menu from './pages/Menu/Menu';
import Events from './pages/Events/Events';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/About/About';
import GiftSection from './pages/GiftSection/GiftSection';
import Preloader from './components/Preloader/Preloader';
import './index.css';
import Shop from './pages/Shop/Shop';
import MiniCart from './components/MiniCart/MiniCart';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <CartProvider>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Preloader /> {/* Consider managing visibility of Preloader */}
      <div className='app'>
        <CursorFollower />
        <MiniCart/>
        <Navbar setShowLogin={setShowLogin} />
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
    </>
  );
};

export default App;
