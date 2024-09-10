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
const DotNetDev = lazy(() => import("./pages/Courses/DotNetDev"));
const ExpressPugDev = lazy(() => import("./pages/Courses/ExpressPugDev"));
const FlutterDev = lazy(() => import("./pages/Courses/FlutterDev"));
const GitGithub = lazy(() => import("./pages/Courses/GitGithub"));
const HtmlCssJsDev = lazy(() => import("./pages/Courses/HtmlCssJsDev"));
const JsTsDev = lazy(() => import("./pages/Courses/JsTsDev"));
const MernDev = lazy(() => import("./pages/Courses/MernDev"));
const MervDev = lazy(() => import("./pages/Courses/MervDev"));
const NextDev = lazy(() => import("./pages/Courses/NextDev"));
const NodeDev = lazy(() => import("./pages/Courses/NodeDev"));
const PhpDev = lazy(() => import("./pages/Courses/PhpDev"));
const PhpLaravelDev = lazy(() => import("./pages/Courses/PhpLaravelDev"));
const Postman = lazy(() => import("./pages/Courses/Postman"));
const PythonDev = lazy(() => import("./pages/Courses/PythonDev"));
const ReactDev = lazy(() => import("./pages/Courses/ReactDev"));
const ReactNativeDev = lazy(() => import("./pages/Courses/ReactNativeDev"));
const VueDev = lazy(() => import("./pages/Courses/VueDev"));
const FullReactDev = lazy(() => import("./pages/Courses/FullReactDev"));


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
                        <Route path="/services/metorship-programme/mobile" element={<MobileLab />}></Route>
                        <Route path="/services/metorship-programme/backend" element={<BackendLab />}></Route>
                        <Route path="/services/metorship-programme/frontend" element={<FrontendLab />}></Route>
                        <Route path="/services/metorship-programme/fullstack" element={<FullstackLab />}></Route>

                        {/* COURSES */}
                        <Route path="/services/metorship-programme/mobile/react-native-dev" element={<ReactNativeDev />}></Route>
                        <Route path="/services/metorship-programme/mobile/flutter-dev" element={<FlutterDev />}></Route>

                        <Route path="/services/metorship-programme/backend/node-dev" element={<NodeDev />}></Route>
                        <Route path="/services/metorship-programme/backend/php-dev" element={<PhpDev />}></Route>
                        <Route path="/services/metorship-programme/backend/dotnet-dev" element={<DotNetDev />}></Route>
                        <Route path="/services/metorship-programme/backend/postman" element={<Postman />}></Route>
                        <Route path="/services/metorship-programme/backend/python-dev" element={<PythonDev />}></Route>

                        <Route path="/services/metorship-programme/frontend/git-github" element={<GitGithub />}></Route>
                        <Route path="/services/metorship-programme/frontend/html-css-js-dev" element={<HtmlCssJsDev />}></Route>
                        <Route path="/services/metorship-programme/frontend/js-ts-dev" element={<JsTsDev />}></Route>
                        <Route path="/services/metorship-programme/frontend/next-dev" element={<NextDev />}></Route>
                        <Route path="/services/metorship-programme/frontend/react-dev" element={<ReactDev />}></Route>
                        <Route path="/services/metorship-programme/frontend/vue-dev" element={<VueDev />}></Route>
                        <Route path="/services/metorship-programme/frontend/complete-frontend-react-dev" element={<FullReactDev />}></Route>

                        <Route path="/services/metorship-programme/fullstack/express-pug-dev" element={<ExpressPugDev />}></Route>
                        <Route path="/services/metorship-programme/fullstack/mern-dev" element={<MernDev />}></Route>
                        <Route path="/services/metorship-programme/fullstack/merv-dev" element={<MervDev />}></Route>
                        <Route path="/services/metorship-programme/fullstack/php-laravel-dev" element={<PhpLaravelDev />}></Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>

            {/* Whatsapp Widget */}
            {width >= 450 && (
                <div class="elfsight-app-c3877b3a-571c-4ee0-b2cc-5ff2a1573ae3" data-elfsight-app-lazy></div>
            )}

            {showArrowToTop && (
                <ArrowToTop y={y} />
            )}
        </>
    )
}


export default App;