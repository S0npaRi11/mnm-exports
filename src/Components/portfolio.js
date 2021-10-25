import React from 'react'
import Card from './_card'
import Heading from './_heading'
import Button from './_button'

// import img from '../Static/mnm-exports-hero.jpg'
// import imgOnion from '../Static/card-img-men.avif'
// import imgPomo from '../Static/card-img-women.avif'
// import imgGinger from '../Static/card-img-kids.avif'

import tShirtImg from '../Static/CardImages/opt/t-shirts.webp'
import sweatShirtImg from '../Static/CardImages/opt/sweatshirts.webp'
import trackPantsImg from '../Static/CardImages/opt/track-pants.webp'
import hoodiesImg from '../Static/CardImages/opt/hoodies.webp'
import poloImg from '../Static/CardImages/opt/polo.webp'
import tankTopsImg from '../Static/CardImages/opt/tank-tops.webp'
import longDressImg from '../Static/CardImages/opt/long-dress.webp'
import cropTopsImg from '../Static/CardImages/opt/crop-tops.webp'

const portfolio = () => {
    const projectArray = [
        {
            name: `Round Neck T-shirts`,
            image: tShirtImg,
            link: '/products/t-shirts'
        },
        {
            name: 'Sweatshirts',
            image: sweatShirtImg,
            link: '/products/sweatshirts'
        },
        {
            name: 'Track Pants/Joggers',
            image: trackPantsImg,
            link: '/products/track-pants'
        },
        {
            name: 'Hoodies',
            image: hoodiesImg,
            link: '/products/hoodies'
        },
        {
            name: 'Polo',
            image: poloImg,
            link: '/products/polo'
        },
        {
            name: 'Vests/Panels/Tank Tops',
            image: tankTopsImg,
            link: '/products/tank-tops'
        },
        {
            name: 'Long Dress',
            image: longDressImg,
            link: '/products/long-dress'
        },
        {
            name: 'Crop Tops',
            image: cropTopsImg,
            link: '/products/crop-tops'
        }
    ]

    return (
        <section className="h-auto text-center pb-20 md:py-20 px-10">
        
            <Heading title="Our Products" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 gap-y-10 my-10">
                {projectArray.map(project => (
                    <Card key={project.name} title={project.name} position={project.role} image={project.image} link={project.link}/>
                ))}
            </div>
            <Button title="View All Products" link="/products" />

        </section>
    )
}

export default portfolio
