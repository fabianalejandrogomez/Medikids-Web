import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Cta from './Cta';
import Services from './Services';
import Whyus from './Whyus';
import Testimonials from './Testimonials';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return ( 
            <Fragment>
                <Banner />
                <About />
                <Services />
                <Cta />
                <Whyus />
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;