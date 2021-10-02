import React from 'react'
import {motion} from 'framer-motion'
import {Link } from 'react-router-dom'

const card = ({ title= '', image = '', link=  '' }) => {

    return (
        <Link to={link}>
            <motion.div className="text-center flex flex-col h-auto w-auto pb-5 overflow-hidden font-montserrat"
                whileHover={{cursor: 'pointer'}}
                // transition={{ease: "easeOut", duration: 0.6}}
            >
                { image !== '' && 
                    <motion.img 
                        src={image} alt={image} className="w-full h-96 object-cover object-top overflow-hidden"
                        whileHover={{scale: 1.2, opacity: 0.7}}
                        transition={{ease: "easeOut", duration: 0.6}}
                    />
                }
                <div className="p-2 bg-white" style={{zIndex: 2}}>
                    {title !== '' && <h3 className="text-3xl py-1"> {title} </h3>}
                    {/* {link !== '' && <a href={link}> View More </a>} */}
                </div>
            </motion.div>
        </Link>
    )
}

export default card
