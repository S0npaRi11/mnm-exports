import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../Components/loader'

import imgParag from '../../Static/teams-parag.avif'
import imgManish from '../../Static/teams-default.avif'
import Heading from '../../Components/_heading'

const Navbar = lazy(() =>import('../../Components/_navbar'))
const Banner = lazy(() =>import('../../Components/_banner'))
const Card = lazy(() =>import('../../Components/_card'))
const Footer = lazy(() =>import('../../Components/footer'))

const index = () => {

    const teamsArray = [
        {
            name: 'Mr. Manish Mahale',
            image: imgManish
        },
        {
            name: 'Mr. Parag Mahale',
            image: imgParag
        }
    ]

    return (
        <>
            <Suspense fallback={<Loader />}>

            <Helmet>
                <title> About Us - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is an apparel exporter based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

                <Navbar />
                <Banner title="About Us" />

                <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <p>
                        MNM exports is an export company situated in Dhule, Maharashtra, India.
                        Our founder, Mr Manish Mahale, comes from a family of farmers. After seeing and experiencing all the opportunities that the apparel industry has to offer, decided to found MNM exports.
                    </p>

                    <p>
                        MNM exports have been founded with the vision of helping and encouraging the local small manufacturers to produce high quality products and by introducing them to the wider market via exports.
                    </p>

                    <p>
                        MNM exports values quality products and quality services above everything else. MNM exports ensure the quality of your product through rigorous quality checks with international quality standards.
                    </p>

                    {/* <p>
                        MNM exports also strive to help other farmers get their crops recognized internationally.
                    </p> */}
                </section>

                {/**
                 * TODO: ADD STATISTICS SECTION HERE
                */}


                <section className="p-10 text-center">

                    <Heading title="Our Team"/>

                    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-10 md:p-20">
                        {teamsArray.map(member => (
                            <Card key={member.name} title={member.name} image={member.image} />
                        ))}
                    </div>
                </section>

                <Footer />
            </Suspense>
        </>
    )
}

export default index
