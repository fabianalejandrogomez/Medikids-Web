import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Backtotop from './Backtotop';
import blog from '../../data/blog.json'

class Footertwo extends Component {
    render() {
        return (
            <Fragment>
                <Backtotop />
                <footer className={this.props.footer.style}>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-4">
                                    <div className="logo text-center text-sm-left">
                                        <Link to="/">
                                            <img src={process.env.PUBLIC_URL + "/" + this.props.footer.logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="social-icon text-center text-sm-right">
                                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link to="#"><i className="fab fa-twitter" /></Link>
                                        <Link to="#"><i className="fab fa-behance" /></Link>
                                        <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        <Link to="#"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* copyright */}
                    <div className="copy-right-area">
                        <div className="container">
                            <div className="copyrigt-text d-sm-flex justify-content-between">
                                <p>Copyright By@<Link to="#"> Gilabert & Gomez</Link> - 2021</p>
                                <p>Design By@<Link to="#"> Gilabert & Gomez</Link> - 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footertwo;