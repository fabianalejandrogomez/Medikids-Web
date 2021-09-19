import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blog from '../../data/blog.json'

class Canvas extends Component {
    render() {
        return (
            <Fragment>
                <div className="widget recent-post">
                    <h4 className="widget-title">Ultimos Articulos</h4>
                    <ul>
                        {blog.slice(0, 4).map((item, i) => (
                            <li key={i}>
                                <div className="post-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.image[0] + ")" }}>
                                </div>
                                <div className="post-content">
                                    <h6>
                                        <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                    </h6>
                                    <span className="time"><i className="far fa-clock" />{item.postdate}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget contact-widget">
                    <h4 className="widget-title">Para Contactarse</h4>
                    <ul>
                        <li>
                            <i className="far fa-map-marker-alt" />
                            Lima 775, C1073 CABA, Argentina
                  </li>
                        <li>
                            <i className="far fa-phone" />
                            <Link to="#">+54 1134569876</Link>
                        </li>
                        <li>
                            <i className="far fa-envelope-open" />
                            <Link to="#">fakemail@mail.com</Link>
                        </li>
                    </ul>
                </div>


            </Fragment>
        );
    }
}

export default Canvas;