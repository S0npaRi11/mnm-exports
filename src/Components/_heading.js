import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const heading = ({title, color="primary"}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, inView, entry] = useInView()

    const varients = {
        initial:{y: 50, opacity: 0},
        animate:{y: 0, opacity: 1}
    }

    return (
        <motion.h2 className={`text-3xl md:text-6xl leading-relaxed tracking-wider py-5 text-${color} font-montserrat`}
                variants={varients}
                animate={inView ? 'animate' : 'initial'}
                transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                ref={ref}
            > 
               {title}
            </motion.h2>
    )
}

export default heading
