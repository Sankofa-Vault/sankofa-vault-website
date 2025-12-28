import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';
import SponsorCarousel from '../components/SponsorCarousel';
import VideoModal from '../components/VideoModal';

// Sponsor data for Mission page
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

const Mission = () => {
    useEffect(() => {
        initLegacyScripts();
    }, []);
    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>Our Mission</h1>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li>Our Mission</li>
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
                                        <span className="sub-title text-uppercase">OUR PHILOSOPHY</span>
                                        <h2>Create Brand Identities & Digital Experiences</h2>
                                        <p>Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod temporRorem ipsum dolor</p>
                                    </div>
                                    <div className="ori-btn-1 text-uppercase">
                                        <Link to="/contact">GET IN TOUCH</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-mission-accordion position-relative">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Heritage &amp; Identity</button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    At Sankofa Vault, we honor the wisdom of our ancestors and cultural heritage by reclaiming and preserving the stories, symbols, and values that have shaped our identity. Inspired by the Sankofa philosophy, we believe in retrieving what is valuable from the past to enrich the present and inform the future. Our mission is rooted in celebrating the richness of African and diasporic traditions through intentional, meaningful, and respectful storytelling.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Creative Technology
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We leverage cutting-edge technology and multimedia tools—audio, video, graphics, animation, web, and mobile solutions—to craft experiences that are as engaging as they are impactful. From immersive storytelling to innovative digital platforms, our approach merges creativity with code, design with purpose, and culture with computation. Technology becomes our canvas for cultural expression.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Empowerment & Storytelling</button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We believe that every individual and community has a story worth telling. Through strategic media production, digital marketing, and content creation, we amplify voices that are often unheard and elevate narratives that inspire transformation. Whether you're a creative, an entrepreneur, or a community leader, Sankofa Vault provides the tools, platforms, and support to help you share your journey with authenticity and clarity.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Legacy & Innovation
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Our mission is future-facing. By intertwining cultural memory with innovation, we aim to build digital legacies that last—preserving knowledge, empowering future generations, and shaping narratives that transcend time.
                                                    We don’t just adopt new technologies; we redefine their purpose through the lens of culture, education, and impact. Sankofa Vault is a bridge: between timelines, disciplines, and dreams.
                                                </div>
                                            </div>
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
                                            <h2> To Move Back we must</h2>
                                            <h2>Go Forward</h2>
                                        </div>
                                        <div className="ori-service-why-choose-list-item ul-li-block">
                                            <ul>
                                                <li>Honouring the Past to Shape the Future</li>
                                                <li>Building the Future with Purpose</li>
                                            </ul>
                                        </div>
                                        <div className="ori-vission-more-btn text-uppercase">
                                            <Link to="/about">Read More <i className="fal fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ori-about-play-area position-relative">
                                    <div className="ori-about-play-img">
                                        <img src="assets/img/about/v-play.png" alt="" />
                                    </div>
                                    <div className="about-play-btn position-absolute">
                                        {/* Replaced invalid ID 'bIoPkZRVll' with working Home page video 'EmQDa99KC0c' for testing */}
                                        <VideoModal videoId="EmQDa99KC0c" className="text-uppercase video_box d-flex align-items-center justify-content-center">Play</VideoModal>
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
        </div>
    );
};

export default Mission;
