import React, { lazy, Suspense } from 'react'
import {Helmet} from "react-helmet";

import Loader from '../../Components/loader'

import img from '../../Static/mnm-exports-about.jpg'
import Heading from '../../Components/_heading'

const Navbar = lazy(() =>import('../../Components/_navbar'))
const Banner = lazy(() =>import('../../Components/_banner'))
const Footer = lazy(() =>import('../../Components/footer'))

const index = () => {
    return (
        <>
        <Suspense fallback={<Loader />}>

            <Helmet>
                <title> Terms & Conditions - MNM Exports </title>
                <meta
                name="description" 
                content="MNM Exports is a International Merchant of Apparel based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."
                />
            </Helmet>

            <Navbar />
            <Banner title="Terms & Conditions" image={img} />

            <section className="h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider">
               <p>
                    Welcome to MNMExports.com,
                    The Privacy Policy describes what happens to the information which you provide us with, where
                    the information is personal data (i.e.) data which can be used to identify you, for example, your
                    name, email address and contact number.
               </p>

                <br />
                <Heading title='Information about you'/>
                <p>
                    We will never collect sensitive information about you without your explicit consent. We reserve
                    the right to store a customer’s navigation pattern data in order to provide better service to our
                    customers. We will never release customer information to third parties under any circumstances.
                    Information given voluntarily to help us understand our customer’s; needs also remains
                    confidential and is at all times stored on a secure server.
                </p>
                <ul className="list-disc">
                    <li> Name </li>
                    <li> Phone number </li>
                    <li> Fax </li>
                    <li> Mobile number </li>
                    <li> E-mail address </li>
                    <li> Comments </li>
                </ul>
                <br />

                <Heading title='Privacy, Cookies & Tracking Policy'/>
                <p>
                    MNMExports.com is committed to preserving the privacy of all visitors to our website. Cookies
                    are small amounts of information which we may store on your computer’s browser to help us
                    improve your site experience. Cookies will not contain viruses nor install malware and are
                    commonly used across the internet for analytic purposes. Unless you have indicated your
                    objection when disclosing your details to us, our system will issue cookies to your computer
                    when you log on to the site. Cookies make it easier for you to logon to and use the site during
                    future visits. They also allow us to monitor website traffic and to personalize the content of the
                    site for you.
                </p>
                <br />
                <br />

                <Heading title='Security of Data'/>
                <p>
                    The security of your data is important to us, but remember that no method of transmission over
                    the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                    acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
                <br />
                <br />

                <Heading title='Links to Other Sites'/>
                <p>
                    Our Service may contain links to other sites that are not operated by us. If you click on a third
                    party link, you will be directed to that third party’s site. We strongly advise you to review the
                    Privacy Policy of every site you visit.
                    <br />
                    We have no control over and assume no responsibility for the content, privacy policies or
                    practices of any third party sites or services.
                </p>
                <br />
                <br />

                <Heading title='Children’s Privacy'/>
               <p>
                    We do not knowingly collect personally identifiable information from anyone under the age of 18.
                    If you are a parent or guardian and you are aware that your Children has provided us with
                    Personal Data, please contact us. If we become aware that we have collected Personal Data
                    from children without verification of parental consent, we take steps to remove that information
                    from our servers.
               </p>
                <br />
                <br />

                <Heading title='Changes in Privacy Policy'/>
                <p>
                    Our privacy policy is subject to change, modification, alteration at any time without prior notice to
                    any party. To ensure that you are apprised of any changes made to the privacy policy, you are
                    requested to kindly review the policy along with its terms and conditions periodically.
                </p>
                <br />
                <br />

                <Heading title='Contact Us' />
                <p>
                    If you have any questions or concerns about our use of your personal information, please contact
                    us at <a href="mnmexports01@gmail.com" className="underline"> mnmexports01@gmail.com </a><br />

                    Plot No. 33/A,<br /> Sonchapha Colony, Sakri Road,<br /> Dhule, Maharashtra, India
                    <br /> 
                    <a href="tel:7057634075"> +91&nbsp;7057634075 </a> 
                </p>
            </section>

            <Footer />
        </Suspense>
            
        </>
    )
}

export default index
