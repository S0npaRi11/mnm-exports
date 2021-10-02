import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import img from '../../../Static/about-pome.jpg'

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
                <title> Pomegranate - Products - MNM Exports </title>
                <meta
                name="description" 
                content="India is one of the largest producers of pomegranate in the world. MNM Exports selects best quality pomegranate for its customers."
                />
            </Helmet>


            <Navbar />
            <Banner title="Fresh Pomegranate" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:p-10 gap-10">
                    <div>
                            <p>
                                Pomegranate is a sweet fruit packed with nutrients, such as Fiber, Protein, Vitamin C, Vitamin K, etc. <br />
                                Because of its rich flavour and health benifits, Pomegranate demand is growing steadily. <br /> <br />
                                India is one of the largest producers of pomegranate in the world. Pomegranate is produced throughout the year in India, with the peak season from February to May. <br />

                            </p>
                        </div>
                        <div>
                            <img src={img} alt="pomegranate" className="object-cover overflow-hidden" />
                        </div>
                </div>
                
            </section>

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">
                    <Heading title="Specification of Pomegranate" />
                    <table className="text-left table-auto text-md md:text-xl">
                        <tbody>
                        <tr>
                            <th className="border border-black p-3"> Color </th>
                            <td className="border border-black p-3"> Red / Pale Orange (Bhagwa) </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Quality </th>
                            <td className="border border-black p-3"> Bhagwa </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Packing </th>
                            <td className="border border-black p-3"> As per Buyer Requirement </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Size </th>
                            <td className="border border-black p-3"> 180gms+ / 200gms+ / 300gms + (9/10/12/14 Dana) </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Origin </th>
                            <td className="border border-black p-3"> Maharashtra, India </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Shelf Life </th>
                            <td className="border border-black p-3"> 40 to 45 Days </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Units Per Carton </th>
                            <td className="border border-black p-3"> Net weight 2.5 kgs / Gross weight 3.3kg / As Per Buyer requirement </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Secondary Packing </th>
                            <td className="border border-black p-3"> Butter Paper / Cutting Paper </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Box of 1*20 FLC </th>
                            <td className="border border-black p-3"> 1540 Box </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Box of 1*40 FLC </th>
                            <td className="border border-black p-3"> 4600 Box </td>
                        </tr>

                        </tbody>
                    </table>

                    <Button title="Download Broucher" link="/"/>

            </section>

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="How do we select our Pomegranate?" />
                    <p>
                        Fruits are graded on the basis of their weight, size and colour. We select fruits as mentioned in the specification above.
                        We source all our pomegranate from Maharashtra.
                    </p>
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
