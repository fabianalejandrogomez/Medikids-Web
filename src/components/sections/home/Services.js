import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <section className="services-secton pt-120 pb-200">
                <div className="container">
                    <div className="section-title mb-80 text-center both-border">
                        <span className="title-tag">Servicios</span>
                        <h2>Que Datos Pueden Cargarse en Medikids App</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center white-bg">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-1.png"} alt="icon" />
                                    </div>
                                    <h4>Carga de mediciones de Estudios de Salud</h4>
                                    <p>Resultados de Análisis Clínicos y de Laboratorio.</p>
                                    <Link to="/blog-details/1" className="service-link">Conoce mas!</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center secondary-bg doted mt-60">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-2.png"} alt="icon" />
                                    </div>
                                    <h4>Turnos y Calendario de Vacunación</h4>
                                    <p>Se Pueden Registrar todos los Eventos de Aplicación con sus detalles Técnicos.</p>
                                    <Link to="/blog-details/1" className="service-link">Conoce mas!</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center primary-bg mt-120">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-3.png"} alt="icon" />
                                    </div>
                                    <h4>Mediciones Pediatricas</h4>
                                    <p>Todos los parametros de crecimiento de tus hijos, percentiles, circunferencia encefálica, etc.</p>
                                    <Link to="/blog-details/1" className="service-link">Conoce mas!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;