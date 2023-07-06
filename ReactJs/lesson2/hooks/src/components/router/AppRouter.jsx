import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../../pages/Home'
import About from "../../pages/About"
import Menu from '../Menu/Menu'

const AppRouter = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <BrowserRouter>
                <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                {
                    isOpen && <Menu/>
                }
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter