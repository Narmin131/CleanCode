import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Header from '../components/Header'
import { ContextProvider } from '../context/GlobalState'
import Cart from '../pages/Cart'
import { ToastContainer } from 'react-toastify'

import { useContext } from 'react'
import { GlobalThemeContext } from '../context/ThemeContext'

const AppRouter = () => {

    const { darkMode } = useContext(GlobalThemeContext)

    return (
        <>
            <main className={darkMode ? 'dark' : 'light'}>
                <ContextProvider>
                    <BrowserRouter>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                            theme="light"
                        />
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/cart' element={<Cart />} />
                        </Routes>
                    </BrowserRouter>
                </ContextProvider>
            </main>


        </>
    )
}

export default AppRouter