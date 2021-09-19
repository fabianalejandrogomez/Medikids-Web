import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import portfoliocategories from '../../../data/portfoliocategory.json'
import portfolio from '../../../data/portfolio.json'

class Portfolios extends Component {
    render() {
        return (
            <section className="portfolio-section pt-120 pb-90">
                <div className="container">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>Our Portfolios</h2>
                    </div>
                    {/* portfolio loop */}
                    <div className="row portfolio-masonary-loop">
                        {portfolio.slice(0,5).map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="portfolio-box height-extra" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }}>
                                    <div className="portfolio-desc">
                                        {item.category.slice(0, 1).map((category) => (
                                            portfoliocategories.filter(item => {
                                                return item.id === category
                                            }).map((categories, i) => (
                                                <span key={i} className="portfolio-cat">{categories.title}</span>
                                            ))
                                        ))}
                                        <h4><Link to={"/portfolio-details/" + item.id}>{item.title} </Link></h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolios;