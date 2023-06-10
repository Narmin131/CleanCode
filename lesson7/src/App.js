import React from 'react'
import AppRouter from './router/AppRouter'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from './context/ThemeContext'
const App = () => {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </ThemeProvider>
    </>
  )
}

export default App