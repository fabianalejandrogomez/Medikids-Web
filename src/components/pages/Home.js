import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footertwo';
import Content from '../sections/home/Content';

const pagelocation = 'Homepage'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Medikids App | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer footer={{ style:"", logo:"assets/img/logo-white.png" }}/>
            </Fragment>
        );
    }
}

export default Home;