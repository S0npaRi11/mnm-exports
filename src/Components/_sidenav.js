import React, { useState } from 'react'
import {FaTimes, FaAngleDown, FaFacebook, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelopeOpen} from 'react-icons/fa'
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
        <motion.section className="w-screen h-screen bg-white z-20 fixed px-10 font-montserrat text-primary"
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
                    <motion.li className="my-4 text-xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > 
                        <Link to="/products"> 
                            Products

                            <span className="px-5" onClick={toggleList}>
                                <FaAngleDown className="inline"/>
                            </span>
                        </Link>
                        {
                            toggle && 
                            <div className="grid grid-cols-2">
                                <ul className="text-lg">
                                    <li className="py-2"> <Link to="/products/t-shirts"> T-shirts </Link> </li>
                                    <li className="py-2"> <Link to="/products/sweatshirts"> Sweatshirts </Link> </li>
                                    <li className="py-2"> <Link to="/products/track-pants"> Track Pants </Link> </li>
                                    <li className="py-2"> <Link to="/products/hoodies"> Hoodies </Link> </li>
                                </ul>

                                <div className="text-lg">
                                <li className="py-2"> <Link to="/products/polo"> Polo </Link> </li>
                                    <li className="py-2"> <Link to="/products/tank-tops"> Tank Tops </Link> </li>
                                    <li className="py-2"> <Link to="/products/long-dress"> Long Dress </Link> </li>
                                    <li className="py-2"> <Link to="/products/crop-tops"> Crop Tops </Link> </li>
                                </div>

                            </div>
                        }
                    </motion.li>


                    <motion.li className="my-4 text-xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > 
                        <Link to="/about"> 
                            About
                        </Link> 
                    </motion.li>


                    <motion.li className="my-4 text-xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    >
                        <Link to="/contact">
                            Contact
                        </Link>
                    </motion.li>

                    <motion.li className="my-4 text-xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    >
                        <Link to="/certificates">
                            Certificates
                        </Link>
                    </motion.li>


                </motion.ul>

            

            <span className="flex flex-col justify-between p-2 absolute bottom-0">

                <span className="flex flex-col justify-start content-center text-md">
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="tel:7057634075"> <FaPhoneAlt className="inline"/> +91&nbsp;7057634075 </a>
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="mailto:mnmexports01@gmail.com"> <FaEnvelopeOpen className="inline"/> mnmexports01@gmail.com </a>
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
