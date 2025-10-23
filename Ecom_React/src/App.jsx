import React from 'react'
import { Routes,Route} from 'react-router'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { HomePage } from './pages/home/HomePage'
import { CheckOutPage } from './pages/checkout/CheckOutPage'
import { Orders } from './pages/orders/Orders'
import './App.css'

function App() {

  const [cart,setCart] = useState([])

  const loadCartItems = async () => {
      const response = await axios.get('api/cart-items?expand=product');
      setCart(response.data);
    };

  useEffect(()=>{
    
    loadCartItems();
  },[])

  return (
    <Routes>
          <Route index element={<HomePage cart = {cart} loadCartItems={loadCartItems} />} />
          <Route path='/checkout' element={<CheckOutPage cart={cart} loadCartItems={loadCartItems} />} />
          <Route path='/orders' element={<Orders cart={cart}  />} />
    </Routes>
  )
}

export default App
