import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Whyus extends Component {
    render() {
        return (
            <section className="features-boxes pt-120 pb-110">
                <div className="container">
                    {/* Section Title */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">Our Feature</span>
                                <h2>Conoce las Ventajas de Medikids App</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="text-right">
                                <Link to="/about" className="main-btn btn-filled">Conoce mas</Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature boxes loop */}
                    <div className="features-boxes-loop mt-100">
                        <div className="row justify-content-center justify-content-md-between">
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="feature-box">
                                    <h4><i className="fal fa-browser" /> Adaptable</h4>
                                    <p>Se puede utilzar en cualquier pantalla de cualquier smartphone, tablet o pc.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-cog" />Flexible a Cualquier Medición</h4>
                                    <p>No importa cuales sean los datos o medicones, todos los formatos pueden ser cargados en Medikids App.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-headphones-alt" /> Soporte Online 24/7</h4>
                                    <p>Nuestros reprsentantes estan esperando su contacto para brindarle el mejor asesoramiento.</p>
                                </div>
                            </div>
                            <div className="gap-for-img" />
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="feature-box">
                                    <h4><i className="fal fa-desktop" /> Información Inteligente</h4>
                                    <p>Compara los resultados de os estudios de tus hijos con las recomendaciones de los organismos de salud</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-globe" /> Agenda las Fechas Importantes</h4>
                                    <p>Lleva un calendario de vacunacion ordenado, para no olvidarse de ninguna aplicación.</p>
                                </div>
                                <div className="feature-box">
                                    <h4><i className="fal fa-lock" /> Seguridad y Privacidad</h4>
                                    <p>Su privacidad familiar están a salvo gracias a las tecnologias de seguridad y encriptación de Medikids App.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* feature-img */}
                    <div className="feature-img">
                        <img src={process.env.PUBLIC_URL + "/assets/img/feature-img.png"} alt="img" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Whyus;