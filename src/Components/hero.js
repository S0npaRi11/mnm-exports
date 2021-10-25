import React from 'react'
import { motion } from 'framer-motion'
import Heading from './_heading'
import Button from './_button'

import HeroImage from '../Static/hero-1.avif'

const hero = () => {
    return (
        <section className="h-screen md:h-96 text-primary overflow-hidden">
            <motion.img src={HeroImage} alt={'MNM-exports-hero-image'} className="relative object-cover w-full h-full filter opacity-50"
                initial={{scale:1.2}}
                animate={{scale: 1}}
                transition={{ease: "easeOut", duration: 2,}}
            />
            <div className="absolute text-center  top-72 md:top-40" style={{left: '50%', transform: 'translateX(-50%)', width: '98vw'}}>
                
                <Heading title="An Apparel Exporter from India" />

                <Button title="Know More" link="/about" />

                <a href="https://drive.google.com/file/d/196NsRJqjNpw_kZbrlObABYe_b9IkBAaE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-2 p-4 my-5 border border-black font-montserrat text-primary inline-block transition duration-600 hover:bg-primary hover:text-white"> View Our Catalogue </a>
            </div>
        </section>
    )
}

export default hero
