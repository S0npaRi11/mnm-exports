import React,{ useState,lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

// import { motion } from 'framer-motion'

import Loader from '../../Components/loader'

const Banner = lazy(() => import('../../Components/_banner')) 
const Footer = lazy(() => import('../../Components/footer')) 
const Navbar = lazy(() => import('../../Components/_navbar')) 


const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [businessName, setBusinessName] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [message, setMessage] = useState('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorName, setErrorName] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorEmail, setErrorEmail] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorBusinessName, setErrorBusinessName] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorMessage, setErrorMessage] = useState('')

    let isNameValid = false,
        isBusinessNameValid = false,
        isEmailValid = false, 
        isMEssageValid = false;

        const validateFrom = () => {

            if(name !== ''){
                let format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
                isNameValid = !format.test(name)
            }
    
            if(businessName !== ''){
                let format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
                isBusinessNameValid = !format.test(businessName)
            }
    
            if(email !== ''){
                const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                isEmailValid  = check.test(email)
            }

            if(message !== ''){
                isMEssageValid = true
            }
    
            return(isNameValid && isBusinessNameValid && isEmailValid && isMEssageValid)
        }

        const submitForm = async (e) => {
            e.preventDefault()
    
            // form validation 
            if(validateFrom()){
                // form submit logic
    
                const URL = process.env.REACT_APP_GOOGLE_SHEET_URI
    
                const data = await fetch(URL, {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify([[name, businessName, email, message, new Date().toLocaleString()],]),
                })
    
                if(data.status === 200){
                    alert('Thank you for your request!! \n We will contact you back via email within a working day.')
                    setName('')
                    setEmail('')
                    setMessage('')
                    setBusinessName('')
                }else{
                    alert('There seems to be a problem with server corrently. Try again after a little while. \n Sorry for the inconvenience')
                }
    
    
            }else{
                if(!isNameValid) setErrorName(`Name can't containt special characters`)
                if(!isEmailValid) setErrorEmail(`Email is not valid`)
                if(!isMEssageValid) setErrorMessage(`Message can't be empty`)
                if(!isBusinessNameValid) setErrorBusinessName(`Busniess name can't containt special characters`)
            }
        }


    return (
        <>
            <Suspense fallback={<Loader />}>

                <Helmet>
                    <title> Contact Us - MNM Exports </title>
                    <meta
                    name="description" 
                    content="You can leave your requirements / quries by filling the given form, email us or follow us on social media for regular updates"
                    />
                </Helmet>

                <Navbar />

                <Banner title="Contact Us"/>

                <div className="text-left p-10">
                <form className="md:mx-20 w-auto md:px-20 font-montserrat" onSubmit={submitForm}>
                    <div className="p-3 md:p-5">
                            <label htmlFor="name"> Name </label> <br />
                            <input type="text" className="border border-black h-10 w-full p-2 mt-2" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                            <span className="text-danger text-sm">{errorName}</span>
                    </div>
                    
                        <div className="p-3 md:p-5">
                            <label htmlFor="business name"> Business Name </label> <br />
                            <input type="text" className="border border-black h-10 w-full p-2 mt-2" value={businessName} onChange={(e) => setBusinessName(e.target.value)}/> <br />
                            <span className="text-danger text-sm"> {errorBusinessName} </span>

                        </div>
                    
                        <div className="p-3 md:p-5">
                            <label htmlFor="email"> Email </label> <br />
                            <input type="email" className="border border-black h-10 w-full p-2 mt-2" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
                            <span className="text-danger text-sm"> {errorEmail} </span>

                        </div>
                        
                        <div className="p-3 md:p-5">
                            <label htmlFor="name"> Message </label> <br />
                            {/* <input type="text"/> <br /> */}
                            <textarea className="border border-black w-full p-2 mt-2" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            <span className="text-danger text-sm"> {errorMessage} </span>

                        </div>

                        <div className="p-3 md:p-5">
                            <button className="p-4 border border-black font-montserrat inline-block transition duration-600 hover:bg-primary" type="submit"> Send Message </button>
                        </div>
                </form>
                </div>

                <Footer />
            </Suspense>

        </>
    )
}

export default index
