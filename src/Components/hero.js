import React from 'react'
import { motion } from 'framer-motion'
import Heading from './_heading'
import Button from './_button'

import HeroImage from '../Static/hero.jpg'

const hero = () => {
    return (
        <section className="h-screen md:h-96 text-primary overflow-hidden">
            <motion.img src={HeroImage} alt={'MNM-exports-hero-image'} className="relative object-cover w-full h-full filter opacity-50"
                initial={{scale:1.2}}
                animate={{scale: 1}}
                transition={{ease: "easeOut", duration: 2,}}
            />
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '98vw', textAlign: 'center'}}>
                
                <Heading title="An International Merchant of Apparel from India" />

                <Button title="Know More" link="/about" />
            </div>
        </section>
    )
}

export default hero
