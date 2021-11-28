import React,{ lazy, Suspense } from 'react'
import {motion} from 'framer-motion'
import {Helmet} from "react-helmet";

import Loader from '../../Components/loader'
// import Card from '../../Components/_card'

import IEC from '../../Static/Certificates/IEC.webp'
import AEPC from '../../Static/Certificates/AEPC-reg.webp'

const Banner = lazy(() => import('../../Components/_banner')) 
const Footer = lazy(() => import('../../Components/footer')) 
const Navbar = lazy(() => import('../../Components/_navbar')) 

const certs = [
    {
        title: 'IEC Certificate',
        image: IEC,
        link: 'https://drive.google.com/file/d/1JLANBELj1KziDU3LAJf0NJZsQFpunAz1/view?usp=sharing'
    },
    {
        title: 'AEPC Registration',
        image: AEPC,
        link: 'https://drive.google.com/file/d/1sfHtoSPD0AO7KWwK9Tts_1GKxP5MQHRd/view?usp=sharing'
    }
]


const index = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>

                <Helmet>
                    <title> Certifications - MNM Exports </title>
                    <meta
                    name="description" 
                    content="These are all the certifications and registrations."
                    />
                </Helmet>

                <Navbar />

                <Banner title="Certifications"/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-10 my-10">
                    {certs.map(project => (
                        <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
                            {/* <Card title={project.title} image={project.image} link={'#'}/> 
                            */}
                             <motion.div className="text-center flex flex-col h-auto w-auto pb-5 overflow-hidden font-montserrat"
                                whileHover={{cursor: 'pointer'}} 
                            >
                                <motion.img 
                                    src={project.image} alt={project.image} className="w-full h-96 object-cover object-top overflow-hidden"
                                    whileHover={{scale: 1.2, opacity: 0.7}}
                                    transition={{ease: "easeOut", duration: 0.6}}
                                />


<                               div className="p-2 bg-white" style={{zIndex: 2}}>
                                    <h3 className="text-2xl py-1"> {project.title} </h3>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>

                <Footer />
            </Suspense>
            
        </>
    )
}

export default index
