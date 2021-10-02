import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import img from '../../../Static/about-onion.jpg'

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
                <title> Onion - Products - MNM Exports </title>
                <meta
                name="description" 
                content="India is the second largest onion growing country in the world. MNM Exports selects best quality onion for its customers."
                />
            </Helmet>

            <Navbar />
            <Banner title="Red / Pink Onion" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:p-10 gap-10">
                    <div>
                            <p>
                                Onion is a widely used agricultural comodity all around the globe. <br />
                                Onions are used in many dishes to improve its taste and texture. Not only that, it also contains vitamins, minerals and fiber. <br />
                                <br />
                                India is the second largest onion growing country in the world. Indian onions are famous for their pungency and are available round the year. Because of that, India's share in Onion exports has been steadily growing. <br />

                                <br />
                            </p>
                        </div>
                        <div>
                            <img src={img} alt="red/pink onion" className="object-cover overflow-hidden" />
                        </div>
                </div>
                
            </section>

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">
                    <Heading title="Specification of Onion" />
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

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="How do we select our Onion?" />
                    <p>
                        We carefully select our onions from Lasalgaon & Nasik, Maharashtra, which are famous marketplaces for high-quality onions.
                        We then sort and pack the selected onions and deliver them to you.
                    </p>
            </section>

            {/* <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="We value quality above everything else" />
                    <p>
                        We carefully choose the onions that are fresh and dry. We can also get it treated as per customers' request. 
                    </p>
            </section> */}

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
