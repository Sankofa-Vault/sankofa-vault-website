import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initLegacyScripts } from '../utils/legacyScripts';

const portfolioItems = [
    {
        id: 1,
        categories: [1, 3, 4], // Web design, Web & Apps, Systems
        image: "assets/img/service/ser1.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single" // Or specific link
    },
    {
        id: 2,
        categories: [2, 5, 4], // Media Marketing, Designs, Systems
        image: "assets/img/service/ser4.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 3,
        categories: [3, 4], // Web & Apps, Systems
        image: "assets/img/service/ser3.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 4,
        categories: [2, 4], // Media Marketing, Systems
        image: "assets/img/project/ser6.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 5,
        categories: [1, 3], // Sankofa Moments, Web & Apps
        image: "assets/img/project/pro5.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 6,
        categories: [1, 2], // Sankofa Moments, Media Marketing
        image: "assets/img/project/pro6.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 7,
        categories: [2, 3, 5],
        image: "assets/img/project/pro7.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 8,
        categories: [5, 3, 4],
        image: "assets/img/project/pro8.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
    {
        id: 9,
        categories: [5, 2, 4],
        image: "assets/img/project/pro9.png",
        title: "Effective solution For Your Business",
        link: "/portfolio-single"
    },
];

const filters = [
    { id: 'all', label: 'see all' },
    { id: 1, label: 'Sankofa Moments' },
    { id: 2, label: 'Media Marketing' },
    { id: 3, label: 'Web & Apps' },
    { id: 4, label: 'Systems' },
    { id: 5, label: 'Designs' },
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Derive filtered items directly from activeFilter state
    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.categories.includes(activeFilter));

    useEffect(() => {
        initLegacyScripts();

        // Load Elfsight script
        const scriptId = 'elfsight-platform-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.src = "https://elfsightcdn.com/platform.js";
            script.id = scriptId;
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="content-wrapper" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Start of Breadcrumbs section */}
            <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
                <div className="container">
                    <div className="ori-breadcrumb-content text-center ul-li">
                        <h1>Portfolio</h1>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li>Portfolio Grid</li>
                        </ul>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Breadcrumbs section */}

            {/* Start of Portfolio section */}
            <section id="ori-portfolio-feed" className="ori-portfolio-feed-section position-relative">
                <div className="container">
                    <div className="ori-portfolio-filter-btn ul-li text-center">
                        <ul id="filters" className="nav-gallery">
                            {filters.map(filter => (
                                <li
                                    key={filter.id}
                                    className={`filtr-button ${activeFilter === filter.id ? 'filtr-active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ori-portfolio-feed-item-wrapper filtr-container row">
                        {filteredItems.map(item => (
                            <div key={item.id} className="col-lg-4 col-sm-6 filtr-item">
                                <div className="ori-portfolio-item position-relative">
                                    <div className="portfolio-img">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="portfolio-text">
                                        <span className="port-category text-uppercase"><Link to="/portfolio">Web design</Link></span>
                                        <h3><Link to={item.link}>{item.title}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ori-portfolio-more-btn text-center">
                        <div className="ori-btn-1 text-uppercase">
                            <a href="#">load more projects</a>
                        </div>
                    </div>
                </div>
                <div className="line_animation">
                    {[...Array(8)].map((_, i) => <div className="line_area" key={i}></div>)}
                </div>
            </section>
            {/* End of Portfolio section */}

            {/* Elfsight Instagram Feed */}
            <div className="elfsight-app-833930f2-423e-4655-a78c-b526ff60236f" data-elfsight-app-lazy></div>
        </div>
    );
};

export default Portfolio;
