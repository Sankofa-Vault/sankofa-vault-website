import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="ori-footer" className="ori-footer-section footer-style-one">
            <div className="container">
                <div className="ori-footer-title text-center text-uppercase">
                    <h2>Get In <span>Touch</span> <i className="fas fa-arrow-right"></i></h2>
                </div>
                <div className="ori-footer-widget-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="logo-widget">
                                    <Link to="/"><img src="assets/img/logo/logo1.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="menu-location-widget ul-li-block">
                                    <h2 className="widget-title text-uppercase">Our Location</h2>
                                    <ul>
                                        <li><a href="#">London</a></li>
                                        <li><a href="#">Birmingham</a></li>
                                        <li><a href="#">District Of Colombia</a></li>
                                        <li><a href="#">Ghana</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="contact-widget ul-li-block">
                                    <h2 className="widget-title text-uppercase">Contact info</h2>
                                    <div className="contact-info">
                                        <span>(+44) 079 507 13320</span>
                                        <a href="mailto:info@sankofavault.click">info@sankofavault.click</a>
                                        <span>Office Hours: 24 Hours Online Service</span>
                                        <span>Monday - Friday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="newslatter-widget ul-li-block">
                                    <h2 className="widget-title text-uppercase">News letter</h2>
                                    <div className="newslatter-form">
                                        <form action="#" method="get">
                                            <input type="email" name="email" placeholder="Enter mail" />
                                            <button type="submit">Subscribe <i className="fas fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ori-footer-copyright d-flex justify-content-between">
                    <div className="ori-copyright-text">
                        © 2025 All Right Reserved - Sankofa Vault
                    </div>
                    <div className="ori-copyright-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
