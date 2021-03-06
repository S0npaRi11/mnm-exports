import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedinIn, FaMapMarkerAlt,FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa'
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
                   <Heading title="Let's Talk" color="white"/>

                   <Button title="Contact Us" link="/contact" color="white" />
                </div>
                <div className="h-full md:h-full md:my-16 font-montserrat text-white">
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

                <div  className="md:my-16 font-montserrat text-white">
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
                            <a href="mailto:mnmexports01@gmail.com">
                                <FaRegEnvelope  className="inline" /> mnmexports01@gmail.com
                            </a> 
                        </motion.li>

                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        >
                            <a href="tel:9765130460">
                                <FaPhoneAlt className="inline" /> +91&nbsp;9765130460
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
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="https://www.facebook.com/MNM-Exports-107592501697087/"> <FaFacebook className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="https://twitter.com/mnmexports01"> <FaTwitter className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="https://www.linkedin.com/company/76517960"> <FaLinkedinIn className="text-xl" /> </a>
            </span>
        </div>

        <div className="text-center px-10 bg-tertiory text-watermark">
            <p className='text-md p-2'> Designed & Developed by <a className='underline' href='https://s0npari11.github.io/'> Parag Mahale </a> </p>    
        </div>        
        </>
    )
}

export default footer
