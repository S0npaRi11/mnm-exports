import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'

import Loader from '../../Components/loader'

const Hero = lazy(() => import('../../Components/hero')) 
const Navbar = lazy(() => import('../../Components/_navbar')) 
const About = lazy(() => import('../../Components/about')) 
const Portfolio = lazy(() => import('../../Components/portfolio')) 
const Footer = lazy(() => import('../../Components/footer')) 

const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

          <Helmet>
            <title> Home - MNM Exports </title>
            <meta
             name="description" 
              content="MNM Exports is a International Merchant of Indian Agricultural comodities based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh onion, pomegranate, spices like ginger, turmeric and many more"
            />
          </Helmet>

          <Navbar />

          <Hero />

          <Portfolio />

          <About />

          <Footer />
          
        </Suspense>
      </>
    )
}

export default index
