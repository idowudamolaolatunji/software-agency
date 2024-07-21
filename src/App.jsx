import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useWindowScroll, useWindowSize } from 'react-use';
import ArrowToTop from './components/ArrowToTop';
import AnimatedCursor from 'react-animated-cursor';


// const name = lazy(() => import('link'));
const Home = lazy(() => import('../src/pages/home'));
const About = lazy(() => import('../src/pages/about'));
const Services = lazy(() => import('../src/pages/services'));
const Steps = lazy(() => import('../src/pages/steps'));
const Contact = lazy(() => import('../src/pages/contact'));
const Portfolio = lazy(() => import('../src/pages/portfolio'));
const Teams = lazy(() => import('../src/pages/teams'));
const Career = lazy(() => import('../src/pages/career'));
const Terms = lazy(() => import('../src/pages/terms'));


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

            <Suspense fallback={<div></div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/services" element={<Services />}></Route>
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