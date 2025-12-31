import React from 'react';
import './AppPreloader.css';

/**
 * Full-Screen App Preloader Component
 * Displays while initial content (Header/Footer) is loading
 * Replaces the legacy jQuery preloader for better React integration
 */
const AppPreloader = () => {
    return (
        <div className="app-preloader">
            <div className="preloader-content">
                {/* Original Animated Logo SVG */}
                <img
                    src="/assets/img/loader.svg"
                    alt="Sankofa Vault"
                    className="preloader-logo"
                />
            </div>
        </div>
    );
};

export default AppPreloader;
