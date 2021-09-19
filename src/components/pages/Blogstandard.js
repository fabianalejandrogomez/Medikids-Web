import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footertwo';
import Content from '../sections/blog-standard/Content';

const pagelocation = 'Noticias e Información'

class Blogstandard extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Medikids | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content catId={this.props.match.params.catId} tagId={this.props.match.params.tagId} userId={this.props.match.params.userId}/>
                <Footer footer={{ style:"footer-style-three", logo:"assets/img/logo.png" }}/>
            </Fragment>
        );
    }
}

export default Blogstandard;