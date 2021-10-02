import React, { useState } from 'react'
import {FaBars, FaPhoneAlt, FaEnvelopeOpen, FaAngleDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SideNav from './_sidenav'

import logoImg from '../Static/mnm-export-logo.jpg'

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
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="mailto:contact@mnmexports.com"> <FaEnvelopeOpen className="inline"/> contact@mnmexports.com </a>
                </span>

                <div>
                    {/**
                     * Translate website dropdown here
                     */}
                </div>
            </div>
            <nav className="flex flex-row flex-wrap justify-around content-center z-10 sticky top-0 bg-primary font-montserrat text-white">
                <span className="md:px-5 py-5 inline">
                   <Link to="/"> <img src={logoImg} alt="MNM-exports-logo" width="20" className="inline"/> </Link>
                </span>
                <div className="flex flex-row justify-start content-center hidden md:inline py-5">
                    <div className="group inline-block relative">
                        <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/products"> Collection <FaAngleDown className="inline"/> </Link>
                        <ul className="absolute hidden w-full md:px-3 py-3 mt-2 transition duration-600 bg-white text-primary group-hover:block">
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/onion"> Men </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/pomegranate"> Women </Link> </li>
                            <li className="text-primary p-2 transition duration-600 hover:bg-primary hover:text-white"> <Link to="/products/ginger"> Kids </Link> </li>
                        </ul>
                    </div>
                    <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/about"> About </Link>
                    <Link className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white hover:text-primary" to="/contact"> Contact </Link>
                </div>

                <span className="py-5 block md:hidden" onClick={e => setIsOpen(true)}>
                    <FaBars className="text-2xl"/>
                </span>
            </nav>
        </>
    )
}

export default navbar
