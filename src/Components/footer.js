import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt,FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import logoImg from '../Static/mnm-exports-logo.png'

import Heading from './_heading'
import Button from './_button'

const footer = () => {
    return (
        <>
            <section className="h-auto px-10 font-andadaPro bg-secondary">
            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-5 md:justify-items-center py-5">
                <div className="md:h-auto">
                   <Heading title="Let's Talk" color="black"/>

                   <Button title="Contact Us" link="/contact" />
                </div>
                <div className="h-full md:h-full md:my-16 font-montserrat">
                    <ul>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        >
                            <Link to="/">
                                 Home
                            </Link> 
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > 
                            <Link to="/about">
                                About 
                            </Link>
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > 
                            <Link to="/contact">
                                Contact 
                            </Link> 
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        >
                            <Link to="/products">
                                Products
                            </Link> 
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > 
                            <Link to="/terms"> 
                                Terms 
                            </Link>
                        </motion.li>
                    </ul>
                </div>

                <div  className="md:my-16 font-montserrat">
                    <ul>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20, cursor: "pointer"}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > 
                           
                            <FaMapMarkerAlt className="inline" /> 33/A, Sonchapha Colony, Sakri Road, Dhule
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        >
                            <a href="mailto:contact@mnmexports.com">
                                <FaRegEnvelope  className="inline" /> contact@mnmexports.com
                            </a> 
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        >
                            <a href="tel:7057634075">
                                <FaPhoneAlt className="inline" /> +91&nbsp;7057634075
                            </a> 
                        </motion.li>
                    </ul>
                </div>
            </div>
        </section>

        <div className="flex flex-row flex-wrap justify-around content-center bg-tertiory text-white">
            <span className="px-5 py-5 hidden md:block">
               <a href="/" className="transition duration-600 hover:text-secondary"> <img src={logoImg} alt="logo" width="80" className="inline"/> </a>
            </span>

            <span className="flex flex-row justify-between p-2">
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaFacebook className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaTwitter className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaInstagram className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaLinkedinIn className="text-xl" /> </a>
            </span>
        </div>
        </>
    )
}

export default footer
