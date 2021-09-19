import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Serviceblock from './Serviceblock';
import Services from './Services';
import Portfolioslider from '../hometwo/Portfolioslider';
import Cta from './Cta';
import Team from './Team';
import Contact from './Contact';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner /> 
                <Services />
                <About />
                <Serviceblock />
                <Portfolioslider />
                <Cta/>
                <Team/>

                <Contact/>
            </Fragment>
        );
    }
}

export default Content;