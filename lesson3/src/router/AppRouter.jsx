import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Header from '../components/Header'
const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter