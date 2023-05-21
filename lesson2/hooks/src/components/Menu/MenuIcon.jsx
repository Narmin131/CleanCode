import React from 'react'

const MenuIcon = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <p onClick={() => setIsOpen(!isOpen)}>toggle menu</p>
        </>
    )
}

export default MenuIcon