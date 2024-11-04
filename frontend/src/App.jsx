import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

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
import TrackOrder from './pages/TrackOrder/TrackOrder';

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Brailoader from './components/Brailoader/Brailoader';
import MiniCart from './components/MiniCart/MiniCart';
import { CartProvider } from './Context/CartContexts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Reservation from './pages/Reservation/Reservation';
import { StoreContext } from './Context/StoreContext';
import axios from 'axios';
import GiftCheckout from './pages/GiftCheckout/GiftCheckout';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const { url } = useContext(StoreContext);


  // const checkLogin = async () => {
  //   try {

  //     const token = localStorage.getItem("token");

  //     // Assume the token is stored in localStorage or another secure storage method
  //     if (!token) {
  //       // console.log("No token provided. Access denied.");
  //       return;
  //     }

  //     // Make the Axios request with the token in the headers
  //     const response = await axios.post(url + '/api/user/checklogin', null, {
  //       headers: { token }
  //     });

  //     // Handle the response
  //     if (response.data.success) {
  //       // console.log(response.data.message);
  //       setIsLoggedin(true)
  //     } else {
  //       // console.log(response.data.message); // Handle the error message
  //       setIsLoggedin(false)
  //     }
  //     // console.log(isLoggedin)
  //   } catch (error) {
  //     // console.error("Error:", error.response ? error.response.data.message : error.message);
  //   }
  // };

  // useEffect(() => {
  //   checkLogin()
  // }, [])
  return (
    <CartProvider> {/* Wrap your app with CartProvider to provide the cart context */}
      <ToastContainer />
      {/* {showLogin && <LoginPopup setIsLoggedin={setIsLoggedin} setShowLogin={setShowLogin} />} */}
      <Brailoader />
      {/* <Preloader /> Consider managing visibility of Preloader */}
      <div className='app'>
        {/* <div className="custom-animated-cursor">
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
          </div> */}

        {/* <MiniCart /> */}
        <Navbar
          isLoggedin={isLoggedin}
          setShowLogin={setShowLogin}
          setIsLoggedin={setIsLoggedin}
          setShowMiniCart={setShowMiniCart}
        />
        {/* <MiniCart
          setShowMiniCart={setShowMiniCart}
          showMiniCart={showMiniCart}
          isLoggedin={isLoggedin}
          setShowLogin={setShowLogin}
        /> */}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/menu2" element={<Menu2 setShowLogin={setShowLogin} isLoggedin={isLoggedin} />} />
          <Route path='/gift-section' element={<GiftSection />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/order-checkout' element={<Checkout />} />
          <Route path='/checkout' element={<GiftCheckout />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/TrackOrder/:id" element={<TrackOrder />} />

          {/* Add other routes if needed */}
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
