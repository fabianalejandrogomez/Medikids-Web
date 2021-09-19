import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const bannerPost = [
    {
      title: "CUIDAMOS LA SALUD DE TUS HIJOS",
      subtitle: "Utiliza nuestra App de Controles Pediatricos"
    },
    {
      title: "REGISTRA TODOS LOS CONTROLES PEDIATRICOS",
      subtitle: "Utiliza nuestra App de Controles Pediatricos"
    },
    {
      title: "MANTENE AL DIA EL CALENDARIO DE VACUNACION",
      subtitle: "Utiliza nuestra App de Controles Pediatricos"
    }
  ]

class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    },
                },
            ]
        }
        return (
            <section className="banner-section" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/01.jpg)" }}>
                <Slider className="slider-active" id="bannerSliderOne" {...settings}>
                    {bannerPost.map((item, i) => (
                        <div key={i} className="single-banner">
                            <div className="container container-custom">
                                <div className="row extra-left">
                                    <div className="col-lg-8">
                                        <div className="banner-text">
                                            <h1>{item.title}</h1>
                                            <p>{item.subtitle}</p>
                                            <div className="btn-wrap">
                                                <a rel={'external'} className="main-btn btn-filled" href="http://192.168.0.64:3001" >Comienza ahora</a>
                                                <Link to="/blog-details/1" className="main-btn btn-borderd">Aprende como funciona</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="banner-shape-one" />
                <div className="banner-shape-two" />
            </section>
        );
    }
}

export default Banner;