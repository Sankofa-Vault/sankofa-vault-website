import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { initLegacyScripts } from '../utils/legacyScripts';
import Marquee from '../components/Marquee';
import SponsorCarousel from '../components/SponsorCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';

// Sponsor data
const sponsors = [
    { image: 'assets/img/sponsor/sp1.png', alt: 'Sponsor 1' },
    { image: 'assets/img/sponsor/sp2.png', alt: 'Sponsor 2' },
    { image: 'assets/img/sponsor/sp3.png', alt: 'Sponsor 3' },
    { image: 'assets/img/sponsor/sp4.png', alt: 'Sponsor 4' },
    { image: 'assets/img/sponsor/sp5.png', alt: 'Sponsor 5' },
    { image: 'assets/img/sponsor/sp6.png', alt: 'Sponsor 6' },
    { image: 'assets/img/sponsor/sp10.png', alt: 'Sponsor 10' },
    { image: 'assets/img/sponsor/sp11.png', alt: 'Sponsor 11' },
    { image: 'assets/img/sponsor/sp12.png', alt: 'Sponsor 12' },
    { image: 'assets/img/sponsor/sp7.png', alt: 'Sponsor 7' },
    { image: 'assets/img/sponsor/sp20.png', alt: 'Sponsor 20' },
    { image: 'assets/img/sponsor/sp14.png', alt: 'Sponsor 14' },
];

// Testimonial data
const testimonials = [
    { text: '"They completely reimagined our website and branding — and the results speak for themselves. We have seen a huge boost in engagement and sales."' },
    { text: '"They brought fresh ideas to the table and executed them flawlessly. We finally feel like we are reaching the right audience."' },
    { text: '"Our campaigns have never performed better. The content was sharp, on-brand, and delivered results beyond our targets."' },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        // Initialize legacy scripts (Slick slider, Wow.js, etc.)
        initLegacyScripts();

        // Trigger resize and scroll event to force plugins (WOW, Slick) to recalculate
        // layouts after a short delay since React keeps DOM elements in memory
        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
            window.dispatchEvent(new Event('scroll'));
        }, 300);

        // Load Elfsight script
        const scriptId = 'elfsight-platform-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.src = "https://elfsightcdn.com/platform.js";
            script.id = scriptId;
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            clearTimeout(timer);
            // Note: Swiper handles its own cleanup, no manual jQuery cleanup needed
        };
    }, []);

    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Slider section */}
            <section id="ori-slider-1" className="ori-slider-section-1 position-relative">
                <div className="ori-slider-content-wrapper-1 postion-relative">
                    <div className="ori-slider-social position-absolute text-uppercase ul-li">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                            <li><a href="#"><i className="fab fa-tiktok"></i>tiktok</a></li>
                        </ul>
                    </div>
                    <div className="ori-slider-wrap-1">
                        <div className="ori-slider-content-1 position-relative">
                            <div className="ori-slider-text text-center text-uppercase">
                                <h1>WELCOME <span>TO THE</span></h1>
                                <h1>VAULT <i className="fas fa-arrow-right"></i> </h1>
                                <div className="slider-play-btn">
                                    <a className="video_box d-flex align-items-center justify-content-center text-uppercase" href="https://www.youtube.com/watch?v=EmQDa99KC0c">PLAY</a>
                                </div>
                                <div className="ori-slider-img position-absolute">
                                    <img src="assets/img/slider/slider-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="ori-slider-content-1 position-relative">
                            <div className="ori-slider-text text-center text-uppercase">
                                <h1>where <span>heritage meets</span> innovation <i className="fas fa-arrow-right"></i></h1>
                                <div className="slider-play-btn">
                                    <a className="video_box d-flex align-items-center justify-content-center text-uppercase" href="https://www.youtube.com/watch?v=O0pLvLtoESc">PLAY</a>
                                </div>
                                <div className="ori-slider-img position-absolute">
                                    <img src="assets/img/slider/slider-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="ori-slider-content-1 position-relative">
                            <div className="ori-slider-text text-center text-uppercase">
                                <h1>connecting <span>eras</span> with tech and media <i className="fas fa-arrow-right"></i></h1>
                                <div className="slider-play-btn">
                                    <a className="video_box d-flex align-items-center justify-content-center text-uppercase" href="https://www.youtube.com/watch?v=O0pLvLtoESc">PLAY</a>
                                </div>
                                <div className="ori-slider-img position-absolute">
                                    <img src="assets/img/slider/slider-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line_animation">
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                        <div className="line_area"></div>
                    </div>
                </div>
                <div className="ori-slider-scroll position-absolute text-uppercase">
                    <span>SCrool </span>
                    <div className="scroll-mouse">
                        <i className="fal fa-mouse"></i>
                    </div>
                </div>
            </section>
            {/* End of Slider section */}


            {/* Start of Service section */}
            <section id="ori-service-1" className="ori-service-section-1">
                <div className="ori-service-wrapper-1">
                    <div className="container">
                        <div className="ori-service-top-content-1 d-flex justify-content-between align-items-center">
                            <div className="ori-section-title-1 text-uppercase wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <h2>Modern digital <span> design experience</span></h2>
                            </div>
                            <div className="ori-btn-1 text-uppercase wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <Link to="/service">Our services</Link>
                            </div>
                        </div>
                        <div className="ori-service-content-1">
                            <div className="row">
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="ori-service-inner-item position-relative">
                                        <div className="ori-service-more position-absolute">
                                            <Link to="/about"><i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="ori-service-img-title position-relative">
                                            <div className="ori-service-img">
                                                <img src="assets/img/service/ser1.png" alt="" />
                                            </div>
                                            <div className="ori-service-title text-center position-absolute">
                                                <h3>About us <i className="fal fa-arrow-right"></i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="ori-service-inner-item position-relative">
                                        <div className="ori-service-more position-absolute">
                                            <Link to="/mission"><i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="ori-service-img-title position-relative">
                                            <div className="ori-service-img">
                                                <img src="assets/img/service/ser2.jpg" alt="" />
                                            </div>
                                            <div className="ori-service-title text-center position-absolute">
                                                <h3>Our Mission <i className="fal fa-arrow-right"></i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="ori-service-inner-item position-relative">
                                        <div className="ori-service-more position-absolute">
                                            <Link to="/service"><i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="ori-service-img-title position-relative">
                                            <div className="ori-service-img">
                                                <img src="assets/img/service/ser3.png" alt="" />
                                            </div>
                                            <div className="ori-service-title text-center position-absolute">
                                                <h3>Our Approach <i className="fal fa-arrow-right"></i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of Service section */}

            {/* Start of Sponsor section */}
            <section id="ori-sponsor-1" className="ori-sponsor-section-1 position-relative">
                <div className="container">
                    <div className="ori-sponsor-title text-uppercase text-center">
                        <h3><i></i> <span>Trusted by</span> <i></i> </h3>
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

            {/* Start of Project section */}
            <section id="ori-project-1" className="ori-project-section-1 position-relative">
                <div className="container">
                    <div className="ori-project-content-1 position-relative">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="ori-project-tab-btn-content">
                                    <div className="ori-section-title-1 text-uppercase wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <h2>services <span> we offer&nbsp;</span></h2>
                                    </div>
                                    <div className="ori-project-tab-btn ul-li-block text-uppercase wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('home')}
                                                >
                                                    Video & photography (sankofa moments)
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('profile')}
                                                >
                                                    social media marketing
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('contact')}
                                                >
                                                    web & app development
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'interior' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('interior')}
                                                >
                                                    system MANAGE/development
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'construction' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('construction')}
                                                >
                                                    Graphic Design &amp; motion
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="ori-project-tab-content wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                                    <div className="tab-content" id="pills-tabContent">
                                        {/* Home Tab */}
                                        <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/pro1.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Portrait & Landscape Photography</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">Read More</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/service"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/pro2.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Event Photo& Videography</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">Read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/service"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/pro3.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Commercial/Corporate Videography</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">Read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/service"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Profile Tab */}
                                        <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/prol.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/service">Content Creating & Marketing</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/portfolio">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/prok.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/service">Influencer Marketing</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/portfolio">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio-single"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/proj.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/service">Paid Advertising</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Tab (Web & App Development) */}
                                        <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/proi.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/service">Frontend Development</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/portfolio">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio-single"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/proh.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Backend Development</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio-single"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/prog.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">System Improvement/Upgrade</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Interior Tab (System MANAGE/development) */}
                                        <div className={`tab-pane fade ${activeTab === 'interior' ? 'show active' : ''}`}>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/prof.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio-single">Full-Stack Development</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">Read More</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/proe.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio-single">System Development</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/prod.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio-single">System Management/Implementation</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Construction Tab (Graphic Design & motion) */}
                                        <div className={`tab-pane fade ${activeTab === 'construction' ? 'show active' : ''}`}>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/proc.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Static Graphic Design</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/prob.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Motion Graphics</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="ori-project-item-1 position-relative">
                                                <div className="ori-project-img">
                                                    <img src="assets/img/project/proA.png" alt="" />
                                                </div>
                                                <div className="ori-project-text position-absolute">
                                                    <h3><Link to="/portfolio">Visual Effects (VFX) & Animation</Link></h3>
                                                    <span className="text-uppercase project-category"><Link to="/service">read more</Link></span>
                                                </div>
                                                <div className="ori-project-link position-absolute">
                                                    <Link to="/portfolio"><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ori-btn-1 position-absolute text-uppercase wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <Link to="/portfolio">Visit our works</Link>
                        </div>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Project section */}

            {/* Elfsight Instagram Feed */}
            <div className="elfsight-app-833930f2-423e-4655-a78c-b526ff60236f" data-elfsight-app-lazy></div>

            {/* Start of Text scroll section */}
            <section id="ori-text-scroll-1" className="ori-text-scroll-section-1 position-relative">
                <div className="ori-text-scroll-content">
                    <Marquee direction="left" speed={25} className="text-uppercase">
                        <h3>Creative Digital <span>Studio</span></h3>
                        <span className="ori-text-scroll-icon"><i className="fas fa-star"></i></span>
                        <h3>Creative Digital <span>Agency</span></h3>
                        <span className="ori-text-scroll-icon"><i className="fas fa-star"></i></span>
                    </Marquee>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Text scroll section */}

            {/* Start of Team section */}
            <section id="ori-team-1" className="ori-team-section-1 position-relative">
                <div className="ori-team-content-area">
                    <div className="container">
                        <div className="ori-team-top-content-1 d-flex justify-content-between align-items-center">
                            <div className="ori-section-title-1 text-uppercase wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <h2>Meet our team of <span>professional</span></h2>
                            </div>
                            <div className="ori-btn-1 text-uppercase wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
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

            {/* Start of Testimonial section */}
            <section id="ori-testimonial-1" className="ori-testimonial-section-1 position-relative">
                <div className="ori-vector-bg position-absolute wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <img src="assets/img/vector/tst-vector1.png" alt="" />
                </div>
                <div className="container">
                    <div className="ori-testimonial-content-1 position-relative">
                        <div className="ori-testimonial-title text-center text-uppercase">
                            <h3>What our Client say</h3>
                        </div>
                        <TestimonialCarousel testimonials={testimonials} />
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Testimonial section */}

            {/* Start of Text scroll section */}
            <section id="ori-text-scroll-2" className="ori-text-scroll-section-2 position-relative">
                <div className="ori-text-scroll-content">
                    <Marquee direction="right" speed={25} className="text-uppercase">
                        <h3>Creative Digital <span>Studio</span></h3>
                        <span className="ori-text-scroll-icon"><i className="fas fa-star"></i></span>
                        <h3>Creative Digital <span>Agency</span></h3>
                        <span className="ori-text-scroll-icon"><i className="fas fa-star"></i></span>
                    </Marquee>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Text scroll section */}
        </div>
    );
};

export default Home;
