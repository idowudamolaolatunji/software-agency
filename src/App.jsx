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
const MetorshipService = lazy(() => import('./pages/services/MetorshipService'));
const MobileLab = lazy(() => import('./pages/services/MetorshipService/MobileLab'));
const BackendLab = lazy(() => import('./pages/services/MetorshipService/BackendLab'));
const FrontendLab = lazy(() => import('./pages/services/MetorshipService/FrontendLab'));
const FullstackLab = lazy(() => import('./pages/services/MetorshipService/FullstackLab'));

import {
    ConsultingService, 
    AnalyticService, 
    WireframeService, 
    GraphicsServices, 
    SoftwareServices, 
    IdentificationServices
} from './pages/services/servicesSubPages';


// COURSES
import DotNetDev from "./pages/Courses/DotNetDev";
import ExpressPugDev from "./pages/Courses/ExpressPugDev";
import FlutterDev from "./pages/Courses/FlutterDev";
import GitGithub from "./pages/Courses/GitGithub";
import HtmlCssJsDev from "./pages/Courses/HtmlCssJsDev";
import JsTsDev from "./pages/Courses/JsTsDev";
import MernDev from "./pages/Courses/MernDev";
import MervDev from "./pages/Courses/MervDev";
import NextDev from "./pages/Courses/NextDev";
import NodeDev from "./pages/Courses/NodeDev";
import PhpDev from "./pages/Courses/PhpDev";
import PhpLaravelDev from "./pages/Courses/PhpLaravelDev";
import Postman from "./pages/Courses/Postman";
import PythonDev from "./pages/Courses/PythonDev";
import ReactDev from "./pages/Courses/ReactDev";
import ReactNativeDev from "./pages/Courses/ReactNativeDev";
import VueDev from "./pages/Courses/VueDev";


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


                        <Route path="/services/metorship-programme" element={<MetorshipService />}></Route>
                        <Route path="/services/metorship-programme/mobile-lab" element={<MobileLab />}></Route>
                        <Route path="/services/metorship-programme/backend-lab" element={<BackendLab />}></Route>
                        <Route path="/services/metorship-programme/frontend-lab" element={<FrontendLab />}></Route>
                        <Route path="/services/metorship-programme/fullstack-lab" element={<FullstackLab />}></Route>

                        {/* COURSES */}
                        <Route path="/dotnet-dev" element={<DotNetDev />}></Route>
                        <Route path="/express-pug-dev" element={<ExpressPugDev />}></Route>
                        <Route path="/flutter-dev" element={<FlutterDev />}></Route>
                        <Route path="/git-github" element={<GitGithub />}></Route>
                        <Route path="/html-css-js-dev" element={<HtmlCssJsDev />}></Route>
                        <Route path="/js-ts-dev" element={<JsTsDev />}></Route>
                        <Route path="/mern-dev" element={<MernDev />}></Route>
                        <Route path="/merv-dev" element={<MervDev />}></Route>
                        <Route path="/next-dev" element={<NextDev />}></Route>
                        <Route path="/node-dev" element={<NodeDev />}></Route>
                        <Route path="/php-dev" element={<PhpDev />}></Route>
                        <Route path="/php-laravel-dev" element={<PhpLaravelDev />}></Route>
                        <Route path="/postman" element={<Postman />}></Route>
                        <Route path="/python-dev" element={<PythonDev />}></Route>
                        <Route path="/react-dev" element={<ReactDev />}></Route>
                        <Route path="/react-native-dev" element={<ReactNativeDev />}></Route>
                        <Route path="/vue-dev" element={<VueDev />}></Route>
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