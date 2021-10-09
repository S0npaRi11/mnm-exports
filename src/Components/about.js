import React from 'react'
// import {Link} from 'react-router-dom'

import Heading from './_heading'
import Button from './_button'

import img from '../Static/about-mnm.jpg'

const about = () => {
    return (
        <section className="h-auto flex flex-wrap p-10 content-around font-montserrat text-primary">

            <div className="grid grid-cols-1 md:grid-rows-1  md:grid-cols-2 gap-10">
                <div className="h-30 md:h-auto" >
                    <img alt="mnm-exports-about-us-img" className="w-full h-full object-cover" src={img}/>
                </div>

                <div className="md:pl-5">
                    <Heading title="About MNM Exports" />
                    <p className="text-xl leading-relaxed tracking-wider">
                        MNM exports is a supplier and exporter of Indian Apparel. We cherry-pick our products from the finest producers in India, to deliver the real quality of the Indian fabrics, without compromising on quality whatsoever.
                    </p>

                    <Button title="About Us" alt="about-us-btn" link="/about"/>
                </div>
            </div>

        </section>
    )
}

export default about
