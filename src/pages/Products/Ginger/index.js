import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import img from '../../../Static/about-ginger.jpg'

const Navbar =  lazy(() => import('../../../Components/_navbar')) 
const Banner =  lazy(() => import('../../../Components/_banner')) 
const Footer =  lazy(() => import('../../../Components/footer')) 
const Heading =  lazy(() => import('../../../Components/_heading')) 
const Button =  lazy(() => import('../../../Components/_button')) 


const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

            <Helmet>
                <title> Ginger - Products - MNM Exports </title>
                <meta
                name="description" 
                content="Ginger is one of the earliest Known Spices and is being Cultivated in India on large scale. MNM Exports selects best quality ginger for its customers."
                />
            </Helmet>

            <Navbar />
            <Banner title="Fresh Ginger" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:p-10 gap-10">
                    <div>
                            <p>
                                Ginger is one of the earliest Known Spices and is being Cultivated in India on large scale. Ginger also has Many Scientific Uses for medicinal Purpose. There are Many Parts and States in India, which Grows Fresh Gingers.
                            </p>
                        </div>
                        <div>
                            <img src={img} alt="ginger" className="object-cover overflow-hidden" />
                        </div>
                </div>
                
            </section>

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">
                    <Heading title="Specification of Ginger" />
                    <table className="text-left table-auto text-md md:text-xl">
                        <tbody>
                        <tr>
                            <th className="border border-black p-3"> Length / Size </th>
                            <td className="border border-black p-3"> 150 gms above </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Packing </th>
                            <td className="border border-black p-3"> Net Bag (5 kgs and 30 kgs), Corrugated Box Pack (4 Kgs and 5 kgs) </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Colour </th>
                            <td className="border border-black p-3"> Pale Yellow </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Shelf Life </th>
                            <td className="border border-black p-3"> 1 Month to 2 Months </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Origin </th>
                            <td className="border border-black p-3"> Maharashtra, MP, Andhra Pradesh, Tamil Nadu </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Box of 1*40 FLC </th>
                            <td className="border border-black p-3"> 5 kg Net Bag = 29 MTs </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Box of 1*40 FLC </th>
                            <td className="border border-black p-3"> 5 kg Box Pack = 4000 Boxes </td>
                        </tr>

                        </tbody>
                    </table>

                    <Button title="Download Broucher" link="/"/>

            </section>

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="How do we select our Ginger?" />
                    <p>
                        We select ginger as mentioned in the specification above. </p>
            </section>

            {/* <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="We value quality above everything else" />
                    <p>
                        The world of spices has changed over the last decade from a flavour industry to an industry also requiring a detailed understanding of the product profiles of developed markets. This includes an understanding of the physical, microbiological and toxic profiles of the food products along with conformation to the regulations of advanced markets in Europe and the USA.
                        <br />
                        <br />
                        We are one of the few spice exporters in India to offer and export to buyers spices conforming to the important physical and microbiological parameters as per international standards.

                    </p>
            </section> */}

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
