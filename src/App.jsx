import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useWindowScroll, useWindowSize } from 'react-use';
import ArrowToTop from './components/ArrowToTop';
import AnimatedCursor from 'react-animated-cursor';
import Spinner from './components/Spinner';


const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Steps = lazy(() => import('./pages/steps'));
const Contact = lazy(() => import('./pages/contact'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Teams = lazy(() => import('./pages/teams'));
const Career = lazy(() => import('./pages/career'));
const Terms = lazy(() => import('./pages/terms'));

import {
    MetorshipService, 
    ConsultingService, 
    AnalyticService, 
    WireframeService, 
    GraphicsServices, 
    SoftwareServices, 
    IdentificationServices
} from './pages/services/servicesSubPages';


function App() {
    const [showArrowToTop, setShowArrowToTop] = useState(false);
    const {y} = useWindowScroll();
    const { width } = useWindowSize();

    useEffect(function() {
        if(y >= 600) setShowArrowToTop(true);
        else setShowArrowToTop(false);
    }, [y]);

    useEffect(function() {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {width >= 600 && (
                <AnimatedCursor 
                    color='107, 24, 235' 
                    outerAlpha={0.15} 
                    innerSize={5} 
                    innerScale={0.8}
                    outerScale={6.8}
                    showSystemCursor={true} 
                />
            )}

            <Suspense fallback={<Spinner />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/services" element={<Services />}></Route>
                        <Route path="/services/metorship-programme" element={<MetorshipService />}></Route>
                        <Route path="/services/it-consulting-and-supports" element={<ConsultingService />}></Route>
                        <Route path="/services/data-analytics-and-intelligence" element={<AnalyticService />}></Route>
                        <Route path="/services/ui-ux-design-and-wireframe" element={<WireframeService />}></Route>
                        <Route path="/services/graphics-and-logo-design" element={<GraphicsServices />}></Route>
                        <Route path="/services/software-development" element={<SoftwareServices />}></Route>
                        <Route path="/services/tranformation-and-identification" element={<IdentificationServices />}></Route>
                        <Route path="/steps" element={<Steps />}></Route>
                        <Route path="/portfolio" element={<Portfolio />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/teams" element={<Teams />}></Route>
                        <Route path="/terms" element={<Terms />}></Route>
                        <Route path="/career" element={<Career />}></Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>


            {showArrowToTop && (
                <ArrowToTop y={y} />
            )}
        </>
    )
}


export default App;