import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';
import { useContentData } from '../hooks/useContentData';
import { usePreloader } from '../contexts/PreloaderContext';
import LoadingSpinner from '../components/LoadingSpinner';
import SponsorCarousel from '../components/SponsorCarousel';
import VideoModal from '../components/VideoModal';

// Sponsor data now comes from API (common.json)

const Mission = () => {
    // Fetch page content and common data from API
    const { data: pageData, loading: pageLoading, error: pageError } = useContentData('mission');
    const { isAppLoading, commonData } = usePreloader();

    useEffect(() => {
        // Only initialize scripts after data is loaded
        if (!pageLoading && !isAppLoading) {
            initLegacyScripts();
        }
    }, [pageLoading, isAppLoading]);

    // Wait for app preloader
    if (isAppLoading) return null;

    // Show loading spinner while page data is being fetched
    if (pageLoading) {
        return <LoadingSpinner message="Loading page content..." />;
    }

    // Handle error state
    if (pageError) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
                <h2>Unable to load page content</h2>
                <p>{pageError}</p>
            </div>
        );
    }

    // Guard against undefined data
    if (!pageData || !commonData) return null;

    // Extract data from API response
    const { breadcrumbs, philosophy, accordion, vision, sponsorSection } = pageData;
    const { sponsors } = commonData;

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

            {/* Start of Mission Accordion section */}
            <section id="ori-mission" className="ori-mission-section position-relative">
                <div className="container">
                    <div className="ori-mission-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ori-mission-title-text">
                                    <div className="ori-inner-section-title">
                                        <span className="sub-title text-uppercase">{philosophy.subtitle}</span>
                                        <h2>{philosophy.title}</h2>
                                        <p>{philosophy.description}</p>
                                    </div>
                                    <div className="ori-btn-1 text-uppercase">
                                        <Link to={philosophy.buttonLink}>{philosophy.buttonText}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-mission-accordion position-relative">
                                    <div className="accordion" id="accordionExample">
                                        {accordion.map((item, index) => (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header" id={item.id}>
                                                    <button
                                                        className={`accordion-button ${!item.show ? 'collapsed' : ''}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${item.collapseId}`}
                                                        aria-expanded={item.show ? "true" : "false"}
                                                        aria-controls={item.collapseId}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={item.collapseId}
                                                    className={`accordion-collapse collapse ${item.show ? 'show' : ''}`}
                                                    aria-labelledby={item.id}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        {item.content}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
            {/* End of Mission Accordion section */}

            {/* Start of Vission section */}
            <section id="ori-vission" className="ori-vission-section position-relative">
                <div className="container">
                    <div className="ori-vission-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ori-vission-text-area">
                                    <div className="ori-service-why-choose-text">
                                        <div className="ori-inner-section-title">
                                            <h2>{vision.title.split('Go Forward')[0]}</h2>
                                            <h2>Go Forward</h2>
                                        </div>
                                        <div className="ori-service-why-choose-list-item ul-li-block">
                                            <ul>
                                                {vision.listItems.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="ori-vission-more-btn text-uppercase">
                                            <Link to={vision.buttonLink}>{vision.buttonText} <i className="fal fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-about-play-area position-relative">
                                    <div className="ori-about-play-img">
                                        <img src={vision.image} alt="" />
                                    </div>
                                    <div className="about-play-btn position-absolute">
                                        <VideoModal videoId={vision.videoId} className="text-uppercase video_box d-flex align-items-center justify-content-center">Play</VideoModal>
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
            {/* End of Vission section */}

            {/* Start of Sponsor section */}
            <section id="ori-sponsor-1" className="ori-sponsor-section-1 inner-sponsor position-relative">
                <div className="container">
                    <div className="ori-sponsor-title text-uppercase text-center">
                        <h3><i></i> <span>{sponsorSection.title}</span> <i></i> </h3>
                    </div>
                    <div className="ori-sponsor-content">
                        <SponsorCarousel sponsors={sponsors} />
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Sponsor section */}
        </div>
    );
};

export default Mission;
