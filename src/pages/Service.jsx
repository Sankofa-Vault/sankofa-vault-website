import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';

const Service = () => {
    useEffect(() => {
        initLegacyScripts();
    }, []);
    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>Our Services</h1>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li>Services</li>
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
                            <div className="col-lg-3 col-md-6">
                                <div className="ori-service-page-service-inner-item">
                                    <div className="service-icon">
                                        <i className="fal fa-camera"></i>
                                    </div>
                                    <div className="service-text pera-content">
                                        <h3><Link to="/service-single">Sankofa Moments</Link></h3>
                                        <p>Capturing every moment from every angle with stunning visuals, on the ground & from the sky. From weddings to corporate events, we tell your story with clarity, creativity, & cinematic style. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="ori-service-page-service-inner-item">
                                    <div className="service-icon">
                                        <i className="fal fa-analytics"></i>
                                    </div>
                                    <div className="service-text pera-content">
                                        <h3><Link to="/service-single">Social media marketing</Link></h3>
                                        <p>Social media marketing boosts your media handle's reach, Driving traffic with every like, share, and speech. Engaging content builds your brand’s strong voice, Turning followers into customers by choice. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="ori-service-page-service-inner-item">
                                    <div className="service-icon">
                                        <i className="fal fa-globe"></i>
                                    </div>
                                    <div className="service-text pera-content">
                                        <h3><Link to="/service-single">Web & app development</Link></h3>
                                        <p>We craft responsive websites and powerful mobile apps tailored to your vision. From sleek front-ends to robust back-ends. Our solutions are user-focused & optimized for all devices. Partner with us to turn your ideas into reality. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="ori-service-page-service-inner-item">
                                    <div className="service-icon">
                                        <i className="fal fa-phone-laptop"></i>
                                    </div>
                                    <div className="service-text pera-content">
                                        <h3><Link to="/service-single">System Development and management</Link></h3>
                                        <p>This involves designing, building & maintaining both front-end & back-end components to ensure functionality, security & performance. It includes server & database management, regular updates, bug fixes, and monitoring to meet user needs and adapt to new technologies. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="ori-service-page-service-inner-item">
                                    <div className="service-icon">
                                        <i className="fab fa-joomla"></i>
                                    </div>
                                    <div className="service-text pera-content">
                                        <h3><Link to="/service-single">Design & Motion Graphics</Link></h3>
                                        <p>We create visually stunning designs and dynamic motion graphics that bring your brand’s story to life. From eye-catching logos and layouts to engaging animations and video content, our creative solutions help you connect with your audience and stand out in a crowded digital landscape. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="ori-service-page-service-inner-item">
                                    <div className="service-icon">
                                        <i className="fal fa-camcorder"></i>
                                    </div>
                                    <div className="service-text pera-content">
                                        <h3><Link to="/service-single">Video Live Production and Streaming</Link></h3>
                                        <p>Bring your events to life with professional live video production that captivates your audience in real time. From multi-camera setups to seamless switching and graphics, we ensure a polished broadcast-quality experience. We connect you to global audiences across all platforms. Whether it's a concert, conference, or corporate launch, we make every moment unforgettable. </p>
                                    </div>
                                </div>
                            </div>

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
                            <div className="col-lg-4">
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
                            <div className="col-lg-4">
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
                            <div className="col-lg-4">
                                <div className="ori-service-inner-item position-relative">
                                    <div className="ori-service-more position-absolute">
                                        <Link to="/about"><i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                    <div className="ori-service-img-title position-relative">
                                        <div className="ori-service-img"></div>
                                        <div className="ori-service-title text-center position-absolute">
                                            <h3>Our approach <i className="fal fa-arrow-right"></i></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ori-service-why-choose">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ori-service-why-choose-img">
                                    <img src="assets/img/about/ser.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-service-why-choose-text">
                                    <div className="ori-inner-section-title">
                                        <span className="sub-title text-uppercase">Why choose us</span>
                                        <h2>Unlock Revenue Growth for Your Business with:</h2>
                                    </div>
                                    <div className="ori-service-why-choose-list-item ul-li-block">
                                        <ul>
                                            <li>A Mission Beyond Business</li>
                                            <li>Empowerment Through Digital Storytelling & Marketing</li>
                                            <li>Multi- Expertise in Creative Technology</li>
                                            <li>Heritage-Driven Innovation</li>
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
                        <span className="sub-title text-uppercase">WE PROUD THAT</span>
                        <h2>Discover Our Achievement</h2>
                    </div>
                    <div className="ori-achivement-history-content">
                        <div className="ori-achivement-history-item-wrapper position-relative">
                            <div className="ori-achivement-history-item-area">
                                <div className="ori-achivement-history-item pera-content position-relative">
                                    <div className="achive-year position-absolute"><i className="fas fa-flower-tulip"></i> Stage 4</div>
                                    <div className="achivement-text">
                                        <h3>Legacy Growth (Impact & Expansion)</h3>
                                        <p>Empower your business to thrive and leave a lasting legacy.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ori-achivement-history-item-area">
                                <div className="ori-achivement-history-item pera-content position-relative">
                                    <div className="achive-year position-absolute"><i className="fas fa-tree-decorated"></i> Stage 3</div>
                                    <div className="achivement-text">
                                        <h3>Digital Bloom (Execution)</h3>
                                        <p>Bringing your vision to life with tech-driven storytelling.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ori-achivement-history-item-area">
                                <div className="ori-achivement-history-item pera-content position-relative">
                                    <div className="achive-year position-absolute"><i className="fas fa-leaf"></i> Stage 2</div>
                                    <div className="achivement-text">
                                        <h3>Creative Cultivation (Development)</h3>
                                        <p>Shaping your message with powerful multimedia tools.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ori-achivement-history-item-area">
                                <div className="ori-achivement-history-item pera-content position-relative">
                                    <div className="achive-year position-absolute"><i className="fas fa-seedling"></i> Stage 1</div>
                                    <div className="achivement-text">
                                        <h3>Rooted Discovery (Foundation)</h3>
                                        <p>Laying the groundwork by understanding your story and vision.</p>
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
            {/* End of Achievement History section */}
        </div>
    );
};

export default Service;
