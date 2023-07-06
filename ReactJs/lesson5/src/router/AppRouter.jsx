import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Header from '../components/Header'
import { ContextProvider } from '../context/GlobalState'
const AppRouter = () => {
    // State management - Context, Redux

    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </BrowserRouter>
            </ContextProvider>

        </>
    )
}

export default AppRouter