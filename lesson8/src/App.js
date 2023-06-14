import React from 'react'
import AppRouter from './router/AppRouter'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'
const App = () => {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </WishlistProvider>
    </>
  )
}

export default App