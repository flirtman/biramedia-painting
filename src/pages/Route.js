import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const CommercialInteriorPainting = lazy(() => import('./Services/CommercialInteriorPainting'));
const ResidentialInteriorPainting = lazy(() => import('./Services/ResidentialInteriorPainting'));
const PlasterAndDrywallServices = lazy(() => import('./Services/PlasterAndDrywallServices'));
const Gallery = lazy(() => import('./Gallery'));
const FAQ = lazy(() => import('./FAQ'));
const GetAQuote = lazy(() => import('./GetAQuote'));
const Contact = lazy(() => import('./Contacts'));

const App = (props) => (
    <Router basename="/painting">
        <Suspense fallback={
            <div id="loading-screen">Loading...</div>
        }>
            <Switch>

                <Route exact path={`/`} component={Home}/>
                <Route path={`/about`} component={About}/>
                <Route path={`/services`} component={Services}/>
                    <Route path={`/service/commercial-interior-painting`} component={CommercialInteriorPainting}/>
                    <Route path={`/service/residential-interior-painting`} component={ResidentialInteriorPainting}/>
                    <Route path={`/service/plaster-and-drywall-services`} component={PlasterAndDrywallServices}/>
                <Route path={`/gallery`} component={Gallery}/>
                <Route path={`/faq`} component={FAQ}/>
                <Route path={`/get-a-quote`} component={GetAQuote}/>
                <Route path={`/contact`} component={Contact}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
