import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';

const Contact = () => {
    useEffect(() => {
        initLegacyScripts();
    }, []);
    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>Contact Us</h1>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Breadcrumbs section */}

            {/* Start of google map section */}
            <div className="ori-google-map">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6209.242755903148!2d-77.04363602434464!3d38.90977276948481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394992895496"
                    height="865"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
            {/* End of google map section */}

            {/* Start of Contact form section */}
            <section id="ori-contact-form" className="ori-contact-form-section position-relative">
                <div className="container">
                    <div className="ori-contact-form-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ori-contact-form-text-info pera-content">
                                    <h3>Let’s create something Unforgettable</h3>
                                    <p>Request your free quote now!</p>
                                    <div className="ori-contact-form-item-info">
                                        <div className="ori-contact-info d-flex align-items-center">
                                            <div className="info-icon d-flex align-items-center justify-content-center">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="info-text pera-content">
                                                <h4>Phone</h4>
                                                <p>(+44) 079507 13320</p>
                                            </div>
                                        </div>
                                        <div className="ori-contact-info d-flex align-items-center">
                                            <div className="info-icon d-flex align-items-center justify-content-center">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="info-text pera-content">
                                                <h4>Email</h4>
                                                <p>info@sankofavault.click</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-contact-form-wrap">
                                    <form action="#" method="get">
                                        <label>Name *</label>
                                        <input type="text" name="name" />
                                        <label>Email *</label>
                                        <input type="text" name="email" placeholder="" />
                                        <label>Phone Number *</label>
                                        <input type="text" name="number" placeholder="" />
                                        <label>Subject *</label>
                                        <input type="text" name="subject" placeholder="Example (Videography Quote)" />
                                        <label>Message *</label>
                                        <textarea name="message" placeholder="Your text here "></textarea>
                                        <button type="submit">submit now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Contact Form section */}
        </div>
    );
};

export default Contact;
