import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';

const Team = () => {
    useEffect(() => {
        initLegacyScripts();
    }, []);
    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>Team</h1>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li>Team members</li>
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
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm1.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Adu Samuel</Link></h3>
                                            <span>CEO & MULTIFACETED CREATIVE PROFESSIONAL</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
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
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm3.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Geroge</Link></h3>
                                            <span>GRAPHIC DESIGNER</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm3.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Emmanuel Addo</Link></h3>
                                            <span>GRAPHIC DESIGNER</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm4.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Emmanuel Arthur</Link></h3>
                                            <span>GRAPHIC DESIGNER</span>
                                        </div>
                                        <div className="ori-team-social text-center position-absolute">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ori-team-inner-item position-relative">
                                        <div className="ori-team-img">
                                            <img src="assets/img/team/tm5.png" alt="" />
                                        </div>
                                        <div className="ori-team-text text-center position-absolute">
                                            <h3><Link to="/team-single">Sameem Raqueeb&nbsp;</Link></h3>
                                            <span>GRAPHIC DESIGNER</span>
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
            {/* End of Team post feed section */}

            {/* Start of Testimonial section */}
            <section id="ori-testimonial-1" className="ori-testimonial-section-1 position-relative">
                <div className="ori-vector-bg position-absolute">
                    <img src="assets/img/vector/tst-vector1.png" alt="" />
                </div>
                <div className="container">
                    <div className="ori-testimonial-content-1 position-relative">
                        <div className="ori-testimonial-title text-center text-uppercase">
                            <h3>What our Client say</h3>
                        </div>
                        <div className="ori-testimonial-slider-1">
                            <div className="ori-testimonial-item-area">
                                <div className="ori-testimonial-item-1">
                                    <div className="ori-testimonial-text text-center pera-content">
                                        <p>“They brought fresh ideas to the table and executed them flawlessly. We finally feel like we're reaching the right audience.”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ori-testimonial-item-area">
                                <div className="ori-testimonial-item-1">
                                    <div className="ori-testimonial-text text-center pera-content">
                                        <p>“They completely reimagined our website and branding — and the results speak for themselves. We’ve seen a huge boost in engagement and sales.”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ori-testimonial-item-area">
                                <div className="ori-testimonial-item-1">
                                    <div className="ori-testimonial-text text-center pera-content">
                                        <p>“Our campaigns have never performed better. The content was sharp, on-brand, and delivered results beyond our targets.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_nav">
                            <button type="button" className="testi-left_arrow"><img src="assets/img/vector/prev.png" alt="" /></button>
                            <button type="button" className="testi-right_arrow"><img src="assets/img/vector/next.png" alt="" /></button>
                        </div>
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
