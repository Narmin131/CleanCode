import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Admin from "../pages/Admin"
import Header from '../components/Header'
import PrivateRoute from "../routes/PrivateRoute"
import { ContextProvider } from '../context/GlobalState'

const AppRouter = () => {
    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route element={<PrivateRoute/>}>
                            <Route path='/admin' element={<Admin />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ContextProvider>

        </>
    )
}

export default AppRouter