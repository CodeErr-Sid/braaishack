import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext';
import { CartProvider } from './Context/CartContexts'; // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <CartProvider> {/* Add CartProvider here */}
        <App className={'app-style'} />
      </CartProvider>
    </StoreContextProvider>
  </BrowserRouter>
);

