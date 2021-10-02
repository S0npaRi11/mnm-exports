import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './Hooks/ScrollToTop'
import Loader from './Components/loader'

const Home = lazy(() => import('./pages/Home')) 
const About = lazy(() => import('./pages/About')) 
const Contact = lazy(() => import('./pages/Contact')) 
const Products = lazy(() => import('./pages/Products')) 
// const Turmeric = lazy(() => import('./pages/Products/Turmeric')) 
const Men = lazy(() => import('./pages/Products/Men'))
const Tshirts = lazy(() => import('./pages/Products/T-shirts'))
const Women = lazy(() => import('./pages/Products/Women'))
const Kids = lazy(() => import('./pages/Products/Kids'))
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

                    <Route path="/products/men" exact>
                        <Men />
                    </Route>

                    <Route path="/products/women" exact>
                        <Women />
                    </Route>

                    <Route path="/products/kids" exact>
                        <Kids />
                    </Route>

                    <Route path="/products/t-shirts" exact>
                        <Tshirts />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
}

export default Routes
