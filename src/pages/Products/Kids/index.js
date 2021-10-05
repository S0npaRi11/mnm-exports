import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import img from '../../../Static/about-t-shirt.jpg'

const Navbar = lazy(() => import('../../../Components/_navbar')) 
const Banner = lazy(() => import('../../../Components/_banner')) 
const Footer = lazy(() => import('../../../Components/footer')) 
const Card = lazy(() => import('../../../Components/_card'))



const index = () => {

    const productArray = [
        {
            name: 'Cotton T-shirts',
            image: img,
            link: '/products/cotton-t-shirts'

        },
        {
            name: 'synthetic T-shirts',
            image: img,
            link: '/products/synthetic-t-shirts'

        }
    ]

    return (
        <>
            <Suspense fallback={<Loader />}>

            <Helmet>
                <title> Kids - Category - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is a International Merchant of Apparel based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

            <Navbar />

            <Banner title="Kids Collection" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {productArray.map(product => (
                        <Card  key={product.name} title={product.name} link={product.link} image={product.image} />
                    ))}
                </div>
            </section>

            <Footer />
        </Suspense>
        </>
    )
}

export default index
