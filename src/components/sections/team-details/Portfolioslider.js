import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import portfoliocategories from '../../../data/portfoliocategory.json'
import portfolio from '../../../data/portfolio.json'

class Portfolioslider extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            speed: 900,
            centerPadding: '25%',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: '20%',
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '5%',
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: '0',
                    },
                },
            ]
        }
        return (
            <section className="portfolio-slider-section with-section-bg pt-120 pb-120">
                <div className="container-fluid">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>Our Portfolios</h2>
                    </div>
                    {/* portfolio loop */}
                    <Slider className="row portfolio-slider-loop portfolio-slider" {...settings}>
                        {portfolio.map((item, i) => (
                            <div key={i} className="col-12">
                                <div className="portfolio-box">
                                    <div className="portfolio-img-wrap">
                                        <div className="portfolio-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.slideimg + ")" }}>
                                        </div>
                                    </div>
                                    <div className="portfolio-desc">
                                        {item.category.slice(0, 1).map((category) => (
                                            portfoliocategories.filter(item => {
                                                return item.id === category
                                            }).map((categories, i) => (
                                                <span key={i} className="portfolio-cat">{categories.title}</span>
                                            ))
                                        ))}
                                        <h2><Link to={"/portfolio-details/" + item.id}>{item.title} </Link></h2>
                                        <Link to={"/portfolio-details/" + item.id} className="portfolio-link">
                                            <i className="fal fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

        );
    }
}

export default Portfolioslider;