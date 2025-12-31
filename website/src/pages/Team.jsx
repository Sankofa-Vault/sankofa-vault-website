import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentData } from '../hooks/useContentData';
import LoadingSpinner from '../components/LoadingSpinner';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { initLegacyScripts } from '../utils/legacyScripts';

const Team = () => {
    // Fetch page content
    const { data: pageData, loading, error } = useContentData('team');

    useEffect(() => {
        // Only initialize scripts after data is loaded
        if (!loading) {
            initLegacyScripts();
        }
    }, [loading]);

    // Show loading spinner while data is being fetched
    if (loading) {
        return <LoadingSpinner message="Loading team members..." />;
    }

    // Handle error state
    if (error) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
                <h2>Unable to load team content</h2>
                <p>{error}</p>
            </div>
        );
    }

    // Guard against undefined data
    if (!pageData) return null;

    // Extract data from API response
    const { breadcrumbs, teamMembers, testimonialSection } = pageData;
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

            {/* Start of Team post feed section */}
            <section id="ori-team-post-feed" className="ori-team-post-feed-section position-relative">
                <div className="container">
                    <div className="ori-team-post-feed-content">
                        <div className="row">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="col-lg-4">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to={member.link}>{member.name}</Link></h3>
                                            <span>{member.role}</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            {member.socials.map((social, idx) => (
                                                <a key={idx} href={social.url}><i className={social.icon}></i></a>
                                            ))}
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
            {/* End of Team post feed section */}

            {/* Start of Testimonial section */}
            <section id="ori-testimonial-1" className="ori-testimonial-section-1 position-relative">
                <div className="ori-vector-bg position-absolute">
                    <img src={testimonialSection.backgroundVector} alt="" />
                </div>
                <div className="container">
                    <div className="ori-testimonial-content-1 position-relative">
                        <div className="ori-testimonial-title text-center text-uppercase">
                            <h3>{testimonialSection.title}</h3>
                        </div>
                        <TestimonialCarousel testimonials={testimonialSection.testimonials} />
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Testimonial section */}
        </div>
    );
};

export default Team;
