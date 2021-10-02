import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import img from '../../../Static/about-t-shirt.jpg'

const Navbar =  lazy(() => import('../../../Components/_navbar')) 
const Banner =  lazy(() => import('../../../Components/_banner')) 
const Footer =  lazy(() => import('../../../Components/footer')) 
const Heading =  lazy(() => import('../../../Components/_heading')) 
const Button = lazy(() => import('../../../Components/_button'))


const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

            <Helmet>
                <title> T-shirts - Products - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is a International Merchant of Apparel based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

            <Navbar />
            <Banner title="T-shirts" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:p-10 gap-10">
                    <div>
                        <p>
                            India has been an exporter of a good quality fabric and apparel for a long time. <br />
                            Indian apparel have always offered great quality with reasonable price. <br />
                            Keeping this trend alive, India is emerging as a big t-shirt exporter in recent years. <br />
                            MNM Exports promices to deliver you t-shirts with best quality fabric at a cometative price.
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="t-shirts" className="object-cover overflow-hidden" />
                    </div>
                </div>
                
            </section>

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">
                    <Heading title="Specification" />
                    <table className="text-left table-auto text-md md:text-xl">
                        <tbody>
                        <tr>
                            <th className="border border-black p-3"> Color </th>
                            <td className="border border-black p-3"> Red / Pink / White </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Variety </th>
                            <td className="border border-black p-3"> Small and Big </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Size </th>
                            <td className="border border-black p-3"> 30mm to 40mm, 45mm+, 55mm+ </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Shelf Life </th>
                            <td className="border border-black p-3"></td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Packing </th>
                            <td className="border border-black p-3"> 10kgs/ 18kgs/ 25kgs Red Mesh & Jute Bags </td>
                        </tr>
                        </tbody>
                    </table>

                    <Button title="Download Broucher" link="/"/>

            </section>

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
