import React, { Component, Fragment } from 'react';
import Blogpost from '../home/Blogpost'
import Abouttext from './Abouttext';
import Counter from './Counter';
import Services from './Services';
import Portfolioslider from './Portfolioslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext/>
                <Counter/>
                <Services/>
                <Portfolioslider/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;