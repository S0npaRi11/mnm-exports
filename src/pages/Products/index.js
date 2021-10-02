import React, { lazy, Suspense } from 'react'

import Loader from '../../Components/loader'

const Navbar = lazy(() => import('../../Components/_navbar')) 
const Banner = lazy(() => import('../../Components/_banner')) 
const Footer = lazy(() => import('../../Components/footer')) 
const Portfolio = lazy(() => import('../../Components/portfolio')) 

const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>
            <Navbar />
            <Banner title="Our Products" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <p>
                    MNM exports cherry-pick all its products from all over India to ensure quality products for our customers.
                </p>
            </section>

            <Portfolio />
            <Footer />
        </Suspense>
        </>
    )
}

export default index
