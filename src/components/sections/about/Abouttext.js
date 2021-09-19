import React, { Component } from 'react';

class Abouttext extends Component {
    render() {
        return (
            <section className="about-section about-style-three pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-tile-gallery-two">
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/uade0.jpg"} alt="img" className="image-one" />
                                <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/uade3.jpg"} alt="img" className="image-two" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text pl-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">Sobre Medikids</span>
                                    <h2>Nos Destacamos en tecnologia Medica y Pediatrica</h2>
                                </div>
                                <p>
                                    Nos desarrolllamos en la UADE Universidad Argentina de la Empresa, la Aplicación Medikids surgio como un proyecto de la materia Aplicacione Interactivas, donde se nos proponia y estimulaba a resolver necesidades de los padres con respecto a la salud de sus hijos en esta epoca de exploscion de inovaciones digitales
                                    </p>
                                <div className="about-extra">
                                    "La Experiencia de generar un proyecto real como Medikids nos brinda herramientas para nuestro futuro profesional en grades compañias y start ups."
            <div className="experience-tag">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/experience-tag.jpg"} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Abouttext;