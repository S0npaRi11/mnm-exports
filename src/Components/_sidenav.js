import React, { useState } from 'react'
import {FaTimes, FaAngleDown, FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelopeOpen} from 'react-icons/fa'
import {motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { delay } from 'q'

const _sidenav = ({ closeNav }) => {

    const [toggle, setToggle] = useState(false)

    const toggleList = () => {
        setToggle(!toggle)
    }

    return (
        <>
        <motion.section className="w-screen h-screen bg-white z-20 fixed px-10 font-andadaPro text-primary"
            initial={{x:"200vw"}}
            animate={{x:0}}
            transition={{ease:"easeOut", duration: 0.6}}
        >
            <span className="flex flex-row justify-end py-5">
                <FaTimes  className="text-3xl" onClick={closeNav}/>
            </span>

            <div>
                <motion.ul
                    initial={{y:50, opacity:0}}
                    animate={{opacity: 1, y:0}}
                    transition={{ease: "easeOut", staggerChildren:0.5, delay: 0.6}}
                >
                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > 
                        <Link to="/products"> 
                            Collection

                            <span className="px-5" onClick={toggleList}>
                                <FaAngleDown className="inline"/>
                            </span>
                        </Link>
                        {
                            toggle && 
                                <ul className="px-5 py-2">
                                    <li className="py-2"> <Link to="/products/men"> Men </Link> </li>
                                    <li className="py-2"> <Link to="/products/women"> Women </Link> </li>
                                    <li className="py-2"> <Link to="/products/kids"> Kids </Link> </li>
                                </ul>
                        }
                    </motion.li>


                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > 
                        <Link to="/about"> 
                            About
                        </Link> 
                    </motion.li>


                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    >
                        <Link to="/contact">
                            Contact
                        </Link>
                    </motion.li>


                </motion.ul>

            

            <span className="flex flex-col justify-between p-2 absolute bottom-0">

                <span className="flex flex-col justify-start content-center text-md">
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="tel:7057634075"> <FaPhoneAlt className="inline"/> +91&nbsp;7057634075 </a>
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="mailto:contact@mnmexports.com"> <FaEnvelopeOpen className="inline"/> contact@mnmexports.com </a>
                </span>

                <span className="flex flex-row justify-between">
                    <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="https://www.facebook.com/MNM-Exports-107592501697087/"> <FaFacebook className="text-xl" /> </a>
                    <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="https://twitter.com/mnmexports01"> <FaTwitter className="text-xl" /> </a>
                    <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="https://www.linkedin.com/company/76517960"> <FaLinkedinIn className="text-xl" /> </a>
                </span>
            </span>
            </div>
        </motion.section>
        </>
    )
}

export default _sidenav
