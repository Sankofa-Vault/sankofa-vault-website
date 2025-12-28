import React from 'react';
import './Marquee.css';

/**
 * Pure CSS Marquee component - replaces jQuery Marquee plugin
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to scroll
 * @param {string} props.direction - 'left' or 'right' (default: 'left')
 * @param {number} props.speed - Animation duration in seconds (default: 20)
 * @param {boolean} props.pauseOnHover - Pause on hover (default: true)
 * @param {string} props.className - Additional CSS classes
 */
const Marquee = ({
    children,
    direction = 'left',
    speed = 20,
    pauseOnHover = true,
    className = ''
}) => {
    const animationClass = direction === 'right' ? 'marquee-right' : 'marquee-left';
    const hoverClass = pauseOnHover ? 'marquee-pause-hover' : '';

    return (
        <div className={`marquee-container ${className}`}>
            <div
                className={`marquee-content ${animationClass} ${hoverClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
                {/* Duplicate content for seamless loop */}
                {children}
            </div>
        </div>
    );
};

export default Marquee;
