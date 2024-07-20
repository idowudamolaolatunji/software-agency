import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import ArrowToTop from './components/ArrowToTop';
import AnimatedCursor from 'react-animated-cursor';


// const name = lazy(() => import('link'));
const Home = lazy(() => import('../src/pages/home'));



function App() {
    const [showArrowToTop, setShowArrowToTop] = useState(false);
    const {y} = useWindowScroll();

    useEffect(function() {
        if(y >= 600) setShowArrowToTop(true);
        else setShowArrowToTop(false);
    }, [y]);

    return (
        <>
            <AnimatedCursor 
                color='107, 24, 235' 
                outerAlpha={0.15} 
                innerSize={5} 
                innerScale={0.8}
                outerScale={6.8}
                showSystemCursor={true} 
            />

            <Suspense fallback={<div></div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
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