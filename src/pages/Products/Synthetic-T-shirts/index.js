import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../../Components/loader'

import img from '../../../Static/about-synthetic-t-shirts-1.avif'

// import cat1 from '../../../Static/cat-t-shirt-1.webp'
import cat2 from '../../../Static/cat-t-shirt-2.webp'
import cat3 from '../../../Static/cat-t-shirt-3.webp'
import cat4 from '../../../Static/cat-t-shirt-4.webp'
import cat5 from '../../../Static/cat-t-shirt-5.webp'
import cat6 from '../../../Static/cat-t-shirt-6.webp'
import cat7 from '../../../Static/cat-t-shirt-7.webp'
import cat8 from '../../../Static/cat-t-shirt-8.webp'
import cat9 from '../../../Static/cat-t-shirt-9.webp'
// import cat10 from '../../../Static/cat-t-shirt-10.webp'

const catalogueImgArray = [
    cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9
]

const Navbar =  lazy(() => import('../../../Components/_navbar')) 
const Banner =  lazy(() => import('../../../Components/_banner')) 
const Footer =  lazy(() => import('../../../Components/footer')) 
const Heading =  lazy(() => import('../../../Components/_heading')) 
// const Button = lazy(() => import('../../../Components/_button'))


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
            <Banner title="Synthetic T-shirts" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:p-10 gap-10">
                    <div>
                        <p>
                            India has been an exporter of a good quality fabric and apparel for a long time. <br />
                            Indian apparel have always offered great quality with reasonable price.<br />
                            Keeping this trend alive, India is emerging as a big t-shirt exporter in recent years.<br />
                            MNM Exports promises to deliver you t-shirts with best quality fabric at a competitive price.
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="t-shirts" className="object-cover overflow-hidden w-full" />
                    </div>
                </div>
                
            </section>

            <section className="h-auto p-10 text-primary font-montserrat leading-relaxed tracking-wider">
                    <Heading title="Specification" />
                    <table className="text-left table-auto text-md md:text-xl">
                        <tbody>
                        <tr>
                            <th className="border border-black p-3"> Product Type </th>
                            <td className="border border-black p-3"> T-shirt </td>
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
                            <td className="border border-black p-3"> Polyester </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Sleve Type </th>
                            <td className="border border-black p-3"> Half Sleeves, Long Sleeves </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Neck </th>
                            <td className="border border-black p-3"> Round </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> GSM </th>
                            <td className="border border-black p-3"> 160 - 180 </td>
                        </tr>

                        <tr>
                            <th className="border border-black p-3"> Gender </th>
                            <td className="border border-black p-3"> Men, Women </td>
                        </tr>
                        </tbody>
                    </table>

                    <a href="https://drive.google.com/file/d/1bf7cATbuZkncd1OGa_F_q4W-j5WMwxJ4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-4 my-5 border border-black font-montserrat text-primary inline-block transition duration-600 hover:bg-primary hover:text-white"> Download Brouchure </a>


                    <div>
                        <Heading title="Catalogue"/>

                        <div className="grid grid-cols-4">
                            {catalogueImgArray.map(img => (
                                <img key={catalogueImgArray.indexOf(img)} src={img} alt="catalogue"/>
                            ))}
                        </div>
                    </div>
            </section>

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
