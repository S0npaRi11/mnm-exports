import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../Components/loader'

const Navbar = lazy(() => import('../../Components/_navbar')) 
const Banner = lazy(() => import('../../Components/_banner')) 
const Footer = lazy(() => import('../../Components/footer')) 
const Portfolio = lazy(() => import('../../Components/portfolio')) 

const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

            <Helmet>
                <title> Collection - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is a International Merchant of Apparel based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

            <Navbar />
            <Banner title="Our Collection" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                {/* <p>
                    MNM exports cherry-pick all its products from all over India to ensure quality products for our customers.
                </p> */}
            </section>

            <Portfolio />
            <Footer />
        </Suspense>
        </>
    )
}

export default index
