import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import cat1 from '../../../Static/Products/Track-Pants/catalogue/opt/1.webp'
import cat2 from '../../../Static/Products/Track-Pants/catalogue/opt/2.webp'
import cat3 from '../../../Static/Products/Track-Pants/catalogue/opt/3.webp'
import cat4 from '../../../Static/Products/Track-Pants/catalogue/opt/4.webp'

const catalogueImgArray = [
    cat1,cat2, cat3, cat4
]

const Navbar =  lazy(() => import('../../../Components/_navbar')) 
const Banner =  lazy(() => import('../../../Components/_banner')) 
const Footer =  lazy(() => import('../../../Components/footer')) 
const Heading =  lazy(() => import('../../../Components/_heading')) 

const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

            <Helmet>
                <title> Track Pants - Products - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is an Apparel exporter based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

            <Navbar />
            <Banner title="Track Pants/Joggers" />

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">
                <div>
                    <Heading title="Catalogue"/>

                    <div className="grid grid-cols-4">
                        {catalogueImgArray.map(img => (
                            <img key={catalogueImgArray.indexOf(img)} src={img} alt="catalogue"/>
                        ))}
                    </div>
                </div>

                <div>
                    <Heading title="Specification" />
                    <table className="text-left table-auto text-md md:text-xl">
                        <tbody>
                        <tr>
                            <th className="border border-black p-3"> Product Type </th>
                            <td className="border border-black p-3"> Track Pants/Joggers </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Brand </th>
                            <td className="border border-black p-3"> Customized </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Size </th>
                            <td className="border border-black p-3"> S to 2XL </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Fabric </th>
                            <td className="border border-black p-3"> 100% Cotton, Bio wash and silicone finish </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> GSM </th>
                            <td className="border border-black p-3"> 265 - 270 </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Gender </th>
                            <td className="border border-black p-3"> Men </td>
                        </tr>
                        </tbody>
                    </table>

                    <a href="https://drive.google.com/file/d/1U20vIadzvLpvVChyxf_yo3ETT3qtLjBB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-4 my-5 border border-black font-montserrat text-primary inline-block transition duration-600 hover:bg-primary hover:text-white"> Download Brouchure </a>
                </div>
            </section>

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
