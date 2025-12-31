import React from 'react';
import { Link } from 'react-router-dom';
import { useCommonData } from '../hooks/useContentData';
import LoadingSpinner from './LoadingSpinner';

const Footer = () => {
    const { data, loading, error } = useCommonData();

    if (loading) return <LoadingSpinner message="Loading footer..." />;
    if (error) return null; // Gracefully fail
    if (!data) return null; // Guard against undefined data

    const { footer } = data;

    return (
        <footer id="ori-footer" className="ori-footer-section footer-style-one">
            <div className="container">
                <div className="ori-footer-title text-center text-uppercase">
                    <h2>{footer.title.split(' ').slice(0, 2).join(' ')} <span>{footer.title.split(' ')[2]}</span> <i className="fas fa-arrow-right"></i></h2>
                </div>
                <div className="ori-footer-widget-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="logo-widget">
                                    <Link to="/"><img src={footer.logo} alt="Sankofa Vault" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="menu-location-widget ul-li-block">
                                    <h2 className="widget-title text-uppercase">Our Location</h2>
                                    <ul>
                                        {footer.locations.map((location, index) => (
                                            <li key={index}><a href={location.url}>{location.label}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="contact-widget ul-li-block">
                                    <h2 className="widget-title text-uppercase">Contact info</h2>
                                    <div className="contact-info">
                                        <span>{footer.contact.phone}</span>
                                        <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
                                        <span>{footer.contact.hours}</span>
                                        <span>{footer.contact.schedule}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ori-footer-widget">
                                <div className="newslatter-widget ul-li-block">
                                    <h2 className="widget-title text-uppercase">{footer.newsletter.title}</h2>
                                    <div className="newslatter-form">
                                        <form action="#" method="get">
                                            <input type="email" name="email" placeholder={footer.newsletter.placeholder} />
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
                        {footer.copyright}
                    </div>
                    <div className="ori-copyright-social">
                        {footer.socials.map((social, index) => (
                            <a key={index} href={social.url}><i className={social.icon}></i></a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
