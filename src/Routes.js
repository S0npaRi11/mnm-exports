import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './Hooks/ScrollToTop'
import Loader from './Components/loader'

const Home = lazy(() => import('./pages/Home')) 
const About = lazy(() => import('./pages/About')) 
const Contact = lazy(() => import('./pages/Contact')) 
const Products = lazy(() => import('./pages/Products')) 
const Tshirts = lazy(() => import('./pages/Products/T-shirts'))
const Sweatshirts = lazy(() => import('./pages/Products/Sweatshirts'))
const TrackPants = lazy(() => import('./pages/Products/Track-Pants'))
const LongDress = lazy(() => import('./pages/Products/Long-Dress'))
const CropTops = lazy(() => import('./pages/Products/Crop-tops'))
const TankTops = lazy(() => import('./pages/Products/Tank-Tops'))
const Hoodies = lazy(() => import('./pages/Products/Hoodies'))
const Polo = lazy(() => import('./pages/Products/Polo'))
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

                    {/* <Route path="/products/men" exact>
                        <Men />
                    </Route>

                    <Route path="/products/women" exact>
                        <Women />
                    </Route>

                    <Route path="/products/kids" exact>
                        <Kids />
                    </Route> */}

                    <Route path="/products/t-shirts" exact>
                        <Tshirts />
                    </Route>

                    <Route path="/products/sweatshirts" exact>
                        <Sweatshirts />
                    </Route>

                    <Route path="/products/track-pants" exact>
                        <TrackPants />
                    </Route>

                    <Route path="/products/long-dress" exact>
                        <LongDress />
                    </Route>

                    <Route path="/products/crop-tops" exact>
                        <CropTops />
                    </Route>

                    <Route path="/products/tank-tops" exact>
                        <TankTops />
                    </Route>

                    <Route path="/products/hoodies" exact>
                        <Hoodies />
                    </Route>

                    <Route path="/products/polo" exact>
                        <Polo />
                    </Route>


                    {/* <Route path="/products/synthetic-t-shirts" exact>
                        <SyntheticTshirts />
                    </Route> */}
                </Switch>
            </Suspense>
        </>
    )
}

export default Routes
