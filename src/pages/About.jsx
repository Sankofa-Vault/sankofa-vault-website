import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';
import CircularProgress from '../components/CircularProgress';
import SponsorCarousel from '../components/SponsorCarousel';

// Sponsor data for About page
const sponsors = [
    { image: 'assets/img/sponsor/sp1.png', alt: 'Sponsor 1' },
    { image: 'assets/img/sponsor/sp2.png', alt: 'Sponsor 2' },
    { image: 'assets/img/sponsor/sp3.png', alt: 'Sponsor 3' },
    { image: 'assets/img/sponsor/sp4.png', alt: 'Sponsor 4' },
    { image: 'assets/img/sponsor/sp5.png', alt: 'Sponsor 5' },
    { image: 'assets/img/sponsor/sp1.png', alt: 'Sponsor 1' },
    { image: 'assets/img/sponsor/sp2.png', alt: 'Sponsor 2' },
    { image: 'assets/img/sponsor/sp3.png', alt: 'Sponsor 3' },
];

const About = () => {
    useEffect(() => {
        initLegacyScripts();
    }, []);
    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>About Us</h1>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li>About Us</li>
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
                            <span className="sub-title text-uppercase">About us</span>
                            <h2>Bridging the Past, Present & Future through Multimedia & Technology</h2>
                        </div>
                        <div className="ori-about-play-top-text">
                            Sankofa Vault is a creative initiative that blends cultural heritage with modern technology to inspire, educate, and empower. Rooted in the Sankofa principle—looking back to retrieve what is valuable—the project uses multimedia tools such as digital storytelling and video to preserve tradition while embracing innovation. It seeks to amplify voices, celebrate history, and build a legacy for future generations. More than a brand, Sankofa Vault is a movement inviting creatives to use today’s technology to tell timeless stories and shape a meaningful future.
                        </div>
                    </div>
                    <div className="ori-about-play-area position-relative">
                        <div className="ori-about-play-img">
                            <img src="assets/img/about/play-bg.png" alt="" />
                        </div>
                        <div className="about-play-btn position-absolute">
                            <a className="text-uppercase video_box d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=bIoPkZRVll">Play</a>
                        </div>
                    </div>
                    <div className="ori-about-counter-area">
                        <div className="ori-about-counter-item-wrap d-flex justify-content-between">
                            <div className="ori-about-counter-item pera-content">
                                <h3><span className="counter">15</span>+</h3>
                                <p className="text-uppercase"><span>//</span> YEARS EXPERIENCE</p>
                            </div>
                            <div className="ori-about-counter-item pera-content">
                                <h3><span className="counter">800&nbsp;</span>+</h3>
                                <p className="text-uppercase"><span>//</span> PROJECT FINISHED</p>
                            </div>
                            <div className="ori-about-counter-item pera-content">
                                <h3><span className="counter">3000&nbsp;</span>+</h3>
                                <p className="text-uppercase"><span>//</span> social media RECOGNITION</p>
                            </div>
                            <div className="ori-about-counter-item pera-content">
                                <h3><span className="counter">500</span>+</h3>
                                <p className="text-uppercase"><span>//</span> HAPPY CLIENTS</p>
                            </div>
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
                            <span className="sub-title text-uppercase">why choose us</span>
                            <h2>Unlock Revenue Growth for Your Business</h2>
                        </div>
                        <div className="ori-circle-progress-btn">
                            <Link to="/service">See Our Service<i className="fal fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="ori-about-circle-progress-item-wrap d-flex align-items-center justify-content-between">
                        <div className="ori-about-circle-progress-item">
                            <CircularProgress value={85} label="Frontend" />
                        </div>
                        <div className="ori-about-circle-progress-item">
                            <CircularProgress value={90} label="Backend" />
                        </div>
                        <div className="ori-about-circle-progress-item">
                            <CircularProgress value={94} label="Mobile Development" />
                        </div>
                        <div className="ori-about-circle-progress-item">
                            <CircularProgress value={92} label="Web Development" />
                        </div>
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
                                <h2>Meet our team of <span>professional</span></h2>
                            </div>
                            <div className="ori-btn-1 text-uppercase">
                                <Link to="/team">all Team Member</Link>
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
                        <h3><i></i> <span>Trusted by</span><i></i></h3>
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
