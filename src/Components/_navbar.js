import React, { useState } from 'react'
import {FaBars, FaPhoneAlt, FaEnvelopeOpen, FaAngleDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SideNav from './_sidenav'

import logoImg from '../Static/mnm-exports-logo.png'

const navbar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    const closeNav = (e) => {
        e.preventDefault()

        setIsOpen(false)
    }

    return (
        <>
        {isOpen && <SideNav  closeNav={closeNav}/>}
            <div className="flex flex-row flex-wrap justify-around text-xs content-center z-10 font-montserrat text-primary">
                <span className="flex flex-row justify-start content-center hidden md:inline py-3">
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="tel:7057634075"> <FaPhoneAlt className="inline"/> +91&nbsp;7057634075 </a>
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="mailto:mnmexports01@gmail.com"> <FaEnvelopeOpen className="inline"/> mnmexports01@gmail.com </a>
                </span>

                <div className="hidden md:inline">
                    {/**
                     * Translate website dropdown here
                     */}
                     <div id="google_translate_element"></div>
                </div>
            </div>
            <nav className="flex flex-row flex-wrap justify-around content-center z-10 sticky top-0 bg-primary font-montserrat text-white">
                <span className="md:px-5 py-3 inline">
                   <Link to="/"> <img src={logoImg} alt="MNM-exports-logo" width="80" className="inline"/> </Link>
                </span>
                <div className="flex flex-row justify-start content-center hidden md:inline py-5">
                    <div className="group inline-block relative">
                        <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/products"> Products <FaAngleDown className="inline"/> </Link>
                        <ul className="absolute hidden w-full md:px-3 py-3 mt-2 transition duration-600 bg-white text-primary group-hover:block" style={{width:'max-content'}}>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/t-shirts"> T-shirts </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/sweatshirts"> Sweatshirts </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/track-pants"> Track Pants </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/hoodies"> Hoodies </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/polo"> Polo </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/tank-tops"> Tank Tops </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/long-dress"> Long Dress </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/crop-tops"> Crop Tops </Link> </li>
                        </ul>
                    </div>
                    <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/about"> About </Link>
                    <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/contact"> Contact </Link>
                    <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/certificates"> Certificates </Link>
                </div>

                <span className="py-5 block md:hidden" onClick={e => setIsOpen(true)}>
                    <FaBars className="text-2xl"/>
                </span>
            </nav>
        </>
    )
}

export default navbar
