import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentData } from '../hooks/useContentData';
import { usePreloader } from '../contexts/PreloaderContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { initLegacyScripts } from '../utils/legacyScripts';

const Service = () => {
    // Fetch page content
    const { data: pageData, loading, error } = useContentData('service');
    const { isAppLoading } = usePreloader();

    useEffect(() => {
        // Only initialize scripts after data is loaded
        if (!loading && !isAppLoading) {
            initLegacyScripts();
        }
    }, [loading, isAppLoading]);

    // Wait for app preloader
    if (isAppLoading) return null;

    // Show loading spinner while data is being fetched
    if (loading) {
        return <LoadingSpinner message="Loading services..." />;
    }

    // Handle error state
    if (error) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
                <h2>Unable to load services</h2>
                <p>{error}</p>
            </div>
        );
    }

    // Guard against undefined data
    if (!pageData) return null;

    // Extract data from API response
    const { breadcrumbs, services, serviceInner, achievement } = pageData;
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

            {/* Start of Service section */}
            <section id="ori-service-page-service" className="ori-service-page-service-section">
                <div className="container">
                    <div className="ori-service-page-service-content">
                        <div className="row">
                            {services.map((service, index) => (
                                <div key={index} className="col-lg-3 col-md-6">
                                    <div className="ori-service-page-service-inner-item">
                                        <div className="service-icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="service-text pera-content">
                                            <h3><Link to={service.link}>{service.title}</Link></h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* End of Service section */}

            {/* Start of Service inner section */}
            <section id="ori-service-inner-area" className="ori-service-inner-section position-relative">
                <div className="container">
                    <div className="ori-service-content-1">
                        <div className="row">
                            {serviceInner.cards.map((card, index) => (
                                <div key={index} className="col-lg-4">
                                    <div className="ori-service-inner-item position-relative">
                                        <div className="ori-service-more position-absolute">
                                            <Link to={card.link}><i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="ori-service-img-title position-relative">
                                            <div className="ori-service-img">
                                                {card.image && <img src={card.image} alt="" />}
                                            </div>
                                            <div className="ori-service-title text-center position-absolute">
                                                <h3>{card.title} <i className="fal fa-arrow-right"></i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ori-service-why-choose">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ori-service-why-choose-img">
                                    <img src={serviceInner.whyChoose.image} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-service-why-choose-text">
                                    <div className="ori-inner-section-title">
                                        <span className="sub-title text-uppercase">{serviceInner.whyChoose.subtitle}</span>
                                        <h2>{serviceInner.whyChoose.title}</h2>
                                    </div>
                                    <div className="ori-service-why-choose-list-item ul-li-block">
                                        <ul>
                                            {serviceInner.whyChoose.listItems.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Service inner section */}

            {/* Start of Achievement History section */}
            <section id="ori-achivement-history" className="ori-achivement-history-section position-relative">
                <div className="container">
                    <div className="ori-inner-section-title text-center">
                        <span className="sub-title text-uppercase">{achievement.subtitle}</span>
                        <h2>{achievement.title}</h2>
                    </div>
                    <div className="ori-achivement-history-content">
                        <div className="ori-achivement-history-item-wrapper position-relative">
                            {achievement.stages.map((stage, index) => (
                                <div key={index} className="ori-achivement-history-item-area">
                                    <div className="ori-achivement-history-item pera-content position-relative">
                                        <div className="achive-year position-absolute"><i className={stage.icon}></i> {stage.stage}</div>
                                        <div className="achivement-text">
                                            <h3>{stage.title}</h3>
                                            <p>{stage.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Achievement History section */}
        </div>
    );
};

export default Service;
