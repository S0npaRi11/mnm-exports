import React from 'react'
import Card from './_card'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const news = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, inView, entry] = useInView()

    const varients = {
        initial:{y: 50, opacity: 0},
        animate:{y: 0, opacity: 1}
    }

    const blogsArray = [
        {
            title: '24895 hours later',
            link: 'Link/to/blog',
            date: 'Aug 13'
        },
        {
            title: "Figma wanted our CEO's insight",
            link: 'Link/to/blog',
            date: 'Aug 9'
        },
        {
            title: "This guy really won't shut up",
            link: 'Link/to/blog',
            date: 'Mar 5'
        },
    ]

    return (
        <section className="h-auto md:h-screen flex flex-wrap px-10 content-around text-center font-andadaPro text-primary">

           <div className="w-full">
                <motion.h2 className="text-4xl leading-relaxed tracking-wider my-14"
                    variants={varients}
                    animate={inView ? 'animate' : 'initial'}
                    transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                    ref={ref}
                > 
                    Blog and News
                </motion.h2>

                <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-5">
                { blogsArray.map(blog => (
                        <Card  key={blog.title} title={blog.title} link={blog.link} position={blog.date}/>
                    ))}
                </div>
           </div>

        </section>
    )
}

export default news
