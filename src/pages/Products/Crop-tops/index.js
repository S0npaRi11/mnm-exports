import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import cat1 from '../../../Static/Products/Crop-Tops/catalogue/opt/1.webp'

const Navbar =  lazy(() => import('../../../Components/_navbar')) 
const Banner =  lazy(() => import('../../../Components/_banner')) 
const Footer =  lazy(() => import('../../../Components/footer')) 
const Heading =  lazy(() => import('../../../Components/_heading')) 

const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

            <Helmet>
                <title> Crop Tops - Products - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is an Apparel exporter based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

            <Navbar />
            <Banner title="Crop Tops" />

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">

                <div>
                    <Heading title="Catalogue"/>
                    <div>
                        <img src={cat1} alt="crop-top-catalogue" className="max-w-full"/>
                    </div>
                </div>

                <div>
                    <Heading title="Specification" />
                    <table className="text-left table-auto text-md md:text-xl">
                        <tbody>
                        <tr>
                            <th className="border border-black p-3"> Product Type </th>
                            <td className="border border-black p-3"> Crop Tops </td>
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
                            <td className="border border-black p-3"> 100% Cotton,double bio wash and silicone finish </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> GSM </th>
                            <td className="border border-black p-3"> 180 </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Gender </th>
                            <td className="border border-black p-3"> Women </td>
                        </tr>
                        </tbody>
                    </table>

                    <a href="https://drive.google.com/file/d/156A2IAb1k3ZLxSm6tC6jH_kydWMvdSjO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-4 my-5 border border-black font-montserrat text-primary inline-block transition duration-600 hover:bg-primary hover:text-white"> Download Brouchure </a>
                </div>
            </section>

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
