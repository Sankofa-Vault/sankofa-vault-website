import React from 'react';
import './LoadingSpinner.css';

/**
 * Loading Spinner Component
 * Displayed while content is being fetched from API
 * 
 * @param {Object} props
 * @param {string} props.message - Optional loading message to display
 */
const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
            {message && <p className="loading-message">{message}</p>}
        </div>
    );
};

export default LoadingSpinner;
