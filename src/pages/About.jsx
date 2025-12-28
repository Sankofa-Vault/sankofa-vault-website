import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';
import { useContentData, useCommonData } from '../hooks/useContentData';
import LoadingSpinner from '../components/LoadingSpinner';
import CircularProgress from '../components/CircularProgress';
import SponsorCarousel from '../components/SponsorCarousel';
import VideoModal from '../components/VideoModal';

// Sponsor data now comes from API (common.json)

const About = () => {
    // Fetch page content and common data from API
    const { data: pageData, loading: pageLoading, error: pageError } = useContentData('about');
    const { data: commonData, loading: commonLoading } = useCommonData();

    useEffect(() => {
        // Only initialize scripts after data is loaded
        if (!pageLoading && !commonLoading) {
            initLegacyScripts();
        }
    }, [pageLoading, commonLoading]);

    // Show loading spinner while data is being fetched
    if (pageLoading || commonLoading) {
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

    // Extract data from API response
    const { breadcrumbs, hero, stats, skills, team, sponsorSection } = pageData;
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

            {/* Start of About Play section */}
            <section id="ori-about-play" className="ori-about-play-section position-relative">
                <div className="container">
                    <div className="ori-about-play-top-content d-flex justify-content-between align-items-center">
                        <div className="ori-inner-section-title">
                            <span className="sub-title text-uppercase">{hero.subtitle}</span>
                            <h2>{hero.title}</h2>
                        </div>
                        <div className="ori-about-play-top-text">
                            {hero.description}
                        </div>
                    </div>
                    <div className="ori-about-play-area position-relative">
                        <div className="ori-about-play-img">
                            <img src={hero.image} alt="" />
                        </div>
                        <div className="about-play-btn position-absolute">
                            <VideoModal videoId={hero.videoId} className="text-uppercase video_box d-flex align-items-center justify-content-center">Play</VideoModal>
                        </div>
                    </div>
                    <div className="ori-about-counter-area">
                        <div className="ori-about-counter-item-wrap d-flex justify-content-between">
                            {stats.map((stat, index) => (
                                <div key={index} className="ori-about-counter-item pera-content">
                                    <h3><span className="counter">{stat.value}</span>{stat.suffix}</h3>
                                    <p className="text-uppercase"><span>//</span> {stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of About Play section */}

            {/* Start of About Circle Progress section */}
            <section id="ori-about-circle-progress" className="ori-about-circle-progress-section position-relative">
                <div className="container">
                    <div className="ori-circle-progress-top-content d-flex justify-content-between align-items-center">
                        <div className="ori-inner-section-title">
                            <span className="sub-title text-uppercase">{skills.subtitle}</span>
                            <h2>{skills.title}</h2>
                        </div>
                        <div className="ori-circle-progress-btn">
                            <Link to={skills.buttonLink}>{skills.buttonText}<i className="fal fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="ori-about-circle-progress-item-wrap d-flex align-items-center justify-content-between">
                        {skills.items.map((skill, index) => (
                            <div key={index} className="ori-about-circle-progress-item">
                                <CircularProgress value={skill.value} label={skill.label} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of About Circle Progress section */}

            {/* Start of Team section */}
            <section id="ori-team-1" className="ori-team-section-1 position-relative">
                <div className="ori-team-content-area">
                    <div className="container">
                        <div className="ori-team-top-content-1 d-flex justify-content-between align-items-center">
                            <div className="ori-section-title-1 text-uppercase">
                                <h2 dangerouslySetInnerHTML={{
                                    __html: team.title.replace(/(\w+\s+\w+)$/, '<span>$1</span>')
                                }} />
                            </div>
                            <div className="ori-btn-1 text-uppercase">
                                <Link to={team.buttonLink}>{team.buttonText}</Link>
                            </div>
                        </div>
                        <div className="ori-team-content-1">
                            <div className="row">
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm1.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Adu Samuel</Link></h3>
                                            <span>CEO &amp; MULTIFACETED CREATIVE PROFESSIONAL</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm2.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Emmanuel Kuma</Link></h3>
                                            <span>GRAPHIC DESIGNER</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm3.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Emmanuel Addo</Link></h3>
                                            <span>CYBERSECURITY SPECIALIST</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
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
            {/* End of Team section */}

            {/* Start of Sponsor section */}
            <section id="ori-sponsor-1" className="ori-sponsor-section-1 inner-sponsor position-relative">
                <div className="container">
                    <div className="ori-sponsor-title text-uppercase text-center">
                        <h3><i></i> <span>{sponsorSection.title}</span><i></i></h3>
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

export default About;
