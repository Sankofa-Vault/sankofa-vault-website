import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentData } from '../hooks/useContentData';
import LoadingSpinner from '../components/LoadingSpinner';
import { initLegacyScripts } from '../utils/legacyScripts';

const Contact = () => {
    // Fetch page content
    const { data: pageData, loading, error } = useContentData('contact');

    useEffect(() => {
        // Only initialize scripts after data is loaded
        if (!loading) {
            initLegacyScripts();
        }
    }, [loading]);

    // Show loading spinner while data is being fetched
    if (loading) {
        return <LoadingSpinner message="Loading contact info..." />;
    }

    // Handle error state
    if (error) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
                <h2>Unable to load contact info</h2>
                <p>{error}</p>
            </div>
        );
    }

    // Extract data from API response
    const { breadcrumbs, mapUrl, contactSection } = pageData;

    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background={breadcrumbs.background}>
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>{breadcrumbs.title}</h1>
                        <ul>
                            {breadcrumbs.links.map((link, index) => (
                                <li key={index}>
                                    {link.path ? <Link to={link.path}>{link.label}</Link> : link.label}
                                </li>
                            ))}
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
                    src={mapUrl}
                    height="865"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map"
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
                                    <h3>{contactSection.title}</h3>
                                    <p>{contactSection.subtitle}</p>
                                    <div className="ori-contact-form-item-info">
                                        {contactSection.infoItems.map((item, index) => (
                                            <div key={index} className="ori-contact-info d-flex align-items-center">
                                                <div className="info-icon d-flex align-items-center justify-content-center">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="info-text pera-content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-contact-form-wrap">
                                    <form action="#" method="get">
                                        <label>{contactSection.form.nameLabel}</label>
                                        <input type="text" name="name" />

                                        <label>{contactSection.form.emailLabel}</label>
                                        <input type="text" name="email" placeholder="" />

                                        <label>{contactSection.form.phoneLabel}</label>
                                        <input type="text" name="number" placeholder="" />

                                        <label>{contactSection.form.subjectLabel}</label>
                                        <input type="text" name="subject" placeholder={contactSection.form.subjectPlaceholder} />

                                        <label>{contactSection.form.messageLabel}</label>
                                        <textarea name="message" placeholder={contactSection.form.messagePlaceholder}></textarea>

                                        <button type="submit">{contactSection.form.buttonText}</button>
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
