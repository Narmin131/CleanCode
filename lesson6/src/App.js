import React from 'react'
import AppRouter from './router/AppRouter'
import { CartProvider } from 'react-use-cart'
const App = () => {
  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  )
}

export default App