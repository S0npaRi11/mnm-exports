import React from 'react'
import {Link} from 'react-router-dom'

const button = ({ title, link,color="primary" }) => {
    return (
        <Link
            className={`p-4 my-5 border border-${color === "primary" ? "black" :"white"} font-montserrat text-${color} inline-block transition duration-600 hover:bg-primary hover:text-white`} 
            to={link}

        >
            {title}
        </Link>
    )
}

export default button
