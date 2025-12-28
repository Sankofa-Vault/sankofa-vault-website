import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContentData } from '../hooks/useContentData';
import LoadingSpinner from '../components/LoadingSpinner';
import { initLegacyScripts } from '../utils/legacyScripts';

const Portfolio = () => {
    // Fetch page content
    const { data: pageData, loading, error } = useContentData('portfolio');
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        // Only initialize scripts after data is loaded
        if (!loading) {
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
        }
    }, [loading]);

    // Show loading spinner while data is being fetched
    if (loading) {
        return <LoadingSpinner message="Loading portfolio..." />;
    }

    // Handle error state
    if (error) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
                <h2>Unable to load portfolio</h2>
                <p>{error}</p>
            </div>
        );
    }

    // Extract data from API response
    const { breadcrumbs, filters, portfolioItems, loadMoreText } = pageData;

    // Derive filtered items directly from activeFilter state
    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.categories.includes(activeFilter));

    // Helper to get category name
    const getCategoryName = (categoryId) => {
        const category = filters.find(f => f.id === categoryId);
        return category ? category.label : '';
    };

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
                                        <span className="port-category text-uppercase">
                                            {/* Show first category name dynamically */}
                                            <Link to="/portfolio">
                                                {item.categories.length > 0 ? getCategoryName(item.categories[0]) : ''}
                                            </Link>
                                        </span>
                                        <h3><Link to={item.link}>{item.title}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ori-portfolio-more-btn text-center">
                        <div className="ori-btn-1 text-uppercase">
                            <a href="#">{loadMoreText}</a>
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
