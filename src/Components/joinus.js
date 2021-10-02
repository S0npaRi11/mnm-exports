import React from 'react'
import Card from './_card'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const joinus = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, inView, entry] = useInView()

    const varients = {
        initial:{y: 50, opacity: 0},
        animate:{y: 0, opacity: 1}
    }


    const locationArray = [
        {
            address: 'some complex, some office',
            city: 'San Fransisco',
            openPositions: 'No Open Positions'
        },
        {
            address: 'some complex, some office',
            city: 'New York',
            openPositions: 'No Open Positions'
        },
        {
            address: 'some complex, some office',
            city: 'Los Angeles',
            openPositions: 'No Open Positions'
        }
    ]

    return (
        <section className="h-auto md:h-screen flex flex-wrap px-10 py-10 content-around text-center font-andadaPro text-primary">
            <div className="w-full">
                <motion.h2 className="text-4xl leading-relaxed tracking-wider my-14"
                    variants={varients}
                    animate={inView ? 'animate' : 'initial'}
                    transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                    ref={ref}
                > 
                    Join Us
                </motion.h2>

                <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-5">
                    {locationArray.map(loc => (
                        <Card  key={locationArray.indexOf(loc)} title={loc.city} position={loc.address} desc={loc.openPositions} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default joinus
