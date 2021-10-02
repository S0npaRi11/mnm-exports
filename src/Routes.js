import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './Hooks/ScrollToTop'
import Loader from './Components/loader'

const Home = lazy(() => import('./pages/Home')) 
const About = lazy(() => import('./pages/About')) 
const Contact = lazy(() => import('./pages/Contact')) 
const Products = lazy(() => import('./pages/Products')) 
// const Turmeric = lazy(() => import('./pages/Products/Turmeric')) 
const Onion = lazy(() => import('./pages/Products/Onion'))
const Pomegranate = lazy(() => import('./pages/Products/Pomegranate'))
const Ginger = lazy(() => import('./pages/Products/Ginger'))
const Terms = lazy(() => import('./pages/Terms'))


const Routes = () => {
    return (
        <>
            <ScrollToTop />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/about" exact>
                        <About />
                    </Route>

                    <Route path="/contact" exact>
                        <Contact />
                    </Route>

                    <Route path="/products" exact>
                        <Products />
                    </Route>

                    <Route path="/terms" exact>
                        <Terms />
                    </Route>

                    {/* <Route path="/products/turmeric" exact>
                        <Turmeric />
                    </Route> */}

                    <Route path="/products/onion" exact>
                        <Onion />
                    </Route>

                    <Route path="/products/pomegranate" exact>
                        <Pomegranate />
                    </Route>

                    <Route path="/products/ginger" exact>
                        <Ginger />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
}

export default Routes
