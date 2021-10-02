import React from 'react'
import Heading from './_heading'

const banner = ({title, image}) => {
    return (
        <>
            <section className="bg-secondary h-auto px-10 font-montserrat bg-secondary text-white">
                {/* <img  src={image} alt="banner" className="relative object-cover w-full h-full filter blur-sm" /> */}
                    <Heading title={title} color="black" />
            </section>
        </>
    )
}

export default banner
