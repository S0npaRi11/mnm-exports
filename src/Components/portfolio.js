import React from 'react'
import Card from './_card'
import Heading from './_heading'

// import img from '../Static/mnm-exports-hero.jpg'
import imgOnion from '../Static/card-img-men.jpg'
import imgPomo from '../Static/card-img-women.jpg'
import imgGinger from '../Static/card-img-kids.jpg'

const portfolio = () => {
    const projectArray = [
        {
            name: `Men`,
            image: imgOnion,
            link: '/products/men'
        },
        {
            name: 'Women',
            image: imgPomo,
            link: '/products/women'
        },
        {
            name: 'Kids',
            image: imgGinger,
            link: '/products/kids'
        },

    ]

    return (
        <section className="h-auto text-center pb-20 md:py-20 px-10">
        
            <Heading title="Our Collection" />

            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-10 gap-y-10 my-10">
                {projectArray.map(project => (
                    <Card key={project.name} title={project.name} position={project.role} image={project.image} link={project.link}/>
                ))}
            </div>
        </section>
    )
}

export default portfolio
