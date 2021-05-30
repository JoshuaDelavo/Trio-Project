import React, { useState } from 'react'
import NavbarRightLeft from '../components/NavbarRightLeft'
import Sidebar from '../components/Sidebar'

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggle = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <div>
            <NavbarRightLeft hamburgerOpen={hamburgerOpen} toggle={toggle}></NavbarRightLeft>
            <Sidebar hamburgerOpen={hamburgerOpen} toggle={toggle}></Sidebar>
        </div>
    )
}

export default Header
