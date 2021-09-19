import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
const Whyus = React.lazy(() => import("./components/pages/Whyus"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const About = React.lazy(() => import("./components/pages/About"));
const Team = React.lazy(() => import("./components/pages/Team"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
const Faq = React.lazy(() => import("./components/pages/Faq"));
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Portfoliogrid = React.lazy(() => import("./components/pages/Portfoliogrid"));
const Portfoliomasonry = React.lazy(() => import("./components/pages/Portfoliomasonry"));
const Portfolioslider = React.lazy(() => import("./components/pages/Portfolioslider"));
const Portfoliodetails = React.lazy(() => import("./components/pages/Portfoliodetails"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router basename={'/Users/casa/MisDocumentos/API/Medikids-App/'}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/service-details" component={Servicedetails} />
          <Route path="/whyus" component={Whyus} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route exact path="/team-details/:id" component={props => (<Teamdetails {...props} key={window.location.pathname} />)} />
          <Route path="/faq" component={Faq} />
          <Route path="/blog-standard" exact component={Blogstandard} />
          <Route exact path="/blog/cat/:catId" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/user/:userId" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/tag/:tagId" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />
          <Route path="/blog-grid" component={Bloggrid} />
          <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
          <Route path="/portfolio-grid" component={Portfoliogrid} />
          <Route path="/portfolio-masonary" component={Portfoliomasonry} />
          <Route path="/portfolio-slider" component={Portfolioslider} />
          <Route exact path="/portfolio-details/:id" component={props => (<Portfoliodetails {...props} key={window.location.pathname} />)} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
