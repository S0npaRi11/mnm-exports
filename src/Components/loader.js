import React from 'react'

import loaderImg from '../Static/mnm-exports-logo.png'

const loader = () => {
    return (
        <section className="bg-white">
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '98vw', textAlign: 'center'}}>
                <img src={loaderImg} alt="loader" className="inline"/>
                <p className="text-xl leading-relaxed tracking-wider font-montserrat"> Loading, please wait... </p>
            </div>
        </section>
    )
}

export default loader
