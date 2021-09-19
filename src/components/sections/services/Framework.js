import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap'

class Framework extends Component {
    render() {
        return (
            <section className="framework-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="framework-img">
                                <img src={process.env.PUBLIC_URL + "/assets/img/framework.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="framework-text pl-20">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">framework</span>
                                    <h2>We are expert teams for all Consultant work platfrom.</h2>
                                </div>
                                <Tab.Container defaultActiveKey="tab1">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab1">
                                            <p>
                                                Over the years, a wide range of developments and innovations in the global IT arena have led to many new IT-enabled devices and services being produced. Moreover, there is need for IT today, not just in urban areas but rural regions as well.
              </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <p>
                                                Over the years, a wide range of developments and innovations in the global IT arena have led to many new IT-enabled devices and services being produced. Moreover, there is need for IT today, not just in urban areas but rural regions as well.
              </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            <p>
                                                Over the years, a wide range of developments and innovations in the global IT arena have led to many new IT-enabled devices and services being produced. Moreover, there is need for IT today, not just in urban areas but rural regions as well.
              </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab4">
                                            <p>
                                                Over the years, a wide range of developments and innovations in the global IT arena have led to many new IT-enabled devices and services being produced. Moreover, there is need for IT today, not just in urban areas but rural regions as well.
              </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <Nav variant="tabs" className="framework-list nav nav-pills mt-25">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab1">
                                                <span className="icon">
                                                    <i className="fas fa-tooth" />
                                                </span>
                                                Dental
                      </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab2">
                                                <span className="icon">
                                                    <i className="far fa-eye" />
                                                </span>
                                                Eyecare
                      </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">
                                                <span className="icon">
                                                    <i className="fas fa-diagnoses" />
                                                </span>
                                                Diagnostic
                      </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab4">
                                                <span className="icon">
                                                    <i className="fas fa-lungs" />
                                                </span>
                                                Lungs
                      </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Framework;