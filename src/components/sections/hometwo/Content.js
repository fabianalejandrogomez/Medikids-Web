import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Blocks from './Blocks';
import Blogpost from './Blogpost';
import Categories from './Categories';
import Cta from './Cta';
import Features from './Features';
import Portfolioslider from './Portfolioslider';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <section className="about-section about-style-two">
                    <Blocks />
                    <About />
                </section>
                <Features />
                <Categories />
                <Cta />
                <Portfolioslider />
                <Testimonials />
                <Blogpost />
            </Fragment>
        );
    }
}

export default Content;