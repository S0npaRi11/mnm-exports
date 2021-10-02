import React, { lazy, Suspense } from 'react'

import Loader from '../../../Components/loader'

import img from '../../../Static/about-turmeric.jpg'

const Navbar =  lazy(() => import('../../../Components/_navbar')) 
const Banner =  lazy(() => import('../../../Components/_banner')) 
const Footer =  lazy(() => import('../../../Components/footer')) 
const Heading =  lazy(() => import('../../../Components/_heading')) 


const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>
            <Navbar />
            <Banner title="Turmeric Powder" />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:p-10 gap-10">
                    <div>
                            <p>
                                Turmeric is the spice that gives curry its yellow colour.
                                It has been used in India for thousands of years as both a spice and medicinal herb. Recently, science has started to back up traditional claims that turmeric contains compounds with medicinal properties.
                                <br />
                                <br />
                                Turmeric powder, especially curcumin present in the turmeric powder has major health benefits.
    
                                It can be used as an anti-oxidant, as an anti-inflammatory compound to even reducing the risk of heart disease. <a href="https://www.healthline.com/nutrition/top-10-evidence-based-health-benefits-of-turmeric" target="_blank" rel="noreferrer noopener" className="underline">Here</a> is an article discussing the health benefits of turmeric powder


                            </p>
                        </div>
                        <div>
                            <img src={img} alt="turmeric" className="object-cover overflow-hidden" />
                        </div>
                </div>
                
            </section>

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="How do we select our turmeric powder?" />
                    <p>
                        We carefully select our turmeric from the states like Kerala and Maharashtra, which are famous to produce high-quality turmeric.
                        We then sort, grind and pack the selected turmeric from fully-automated factories, without any human interaction and deliver it to you.
                    </p>
            </section>

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
                    <Heading title="We value quality above everything else" />
                    <p>
                        The world of spices has changed over the last decade from a flavour industry to an industry also requiring a detailed understanding of the product profiles of developed markets. This includes an understanding of the physical, microbiological and toxic profiles of the food products along with conformation to the regulations of advanced markets in Europe and the USA.
                        <br />
                        <br />
                        We are one of the few spice exporters in India to offer and export to buyers spices conforming to the important physical and microbiological parameters as per international standards.

                    </p>
            </section>

            <Footer /> 
        </Suspense>
        </>
    )
}

export default index
