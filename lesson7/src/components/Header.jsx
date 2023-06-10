import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { GlobalThemeContext } from '../context/ThemeContext'

import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18'

const Header = () => {
    const { totalItems } = useCart()

    const context = useContext(GlobalThemeContext)

    const { darkMode, toggleTheme, setDarkMode } = useContext(GlobalThemeContext)

    const { t } = useTranslation()

    const handleClick = (lang)=>{
        i18n.changeLanguage(lang)
    }

    return (
        < >

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>{t("header.0")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/about'>{t("home.0")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <button onClick={toggleTheme}>Change Theme</button>
                            </li>

                            <li className="nav-item">
                                <button onClick={()=>handleClick('az')}>Az</button>
                                <button onClick={()=>handleClick('en')}>En</button>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/cart'>Cart</NavLink>
                            </li> <p style={{ color: 'white' }}>{totalItems}</p>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header