import React, { useState, useEffect, useRef } from 'react';
import './CircularProgress.css';

/**
 * Pure SVG Circular Progress component - replaces jQuery Knob
 * @param {Object} props
 * @param {number} props.value - Progress value (0-100)
 * @param {number} props.size - Size in pixels (default: 180)
 * @param {string} props.strokeColor - Progress stroke color (default: '#FF7425')
 * @param {string} props.bgColor - Background stroke color (default: '#fff')
 * @param {number} props.strokeWidth - Stroke width (default: 10)
 * @param {string} props.label - Label text below percentage
 */
const CircularProgress = ({
    value = 0,
    size = 180,
    strokeColor = '#FF7425',
    bgColor = '#fff',
    strokeWidth = 10,
    label = ''
}) => {
    const [displayValue, setDisplayValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (displayValue / 100) * circumference;
    const center = size / 2;

    // Intersection Observer for scroll-triggered animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    // Animate value when visible
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setDisplayValue(value);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible, value]);

    return (
        <div className="circular-progress-wrapper" ref={ref}>
            <svg
                width={size}
                height={size}
                className="circular-progress"
            >
                {/* Background circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={bgColor}
                    strokeWidth={strokeWidth}
                    opacity="0.2"
                />
                {/* Progress circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="circular-progress-bar"
                    transform={`rotate(-90 ${center} ${center})`}
                />
                {/* Percentage text */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="circular-progress-text"
                >
                    {displayValue}%
                </text>
            </svg>
            {label && <h3 className="circular-progress-label text-uppercase">{label}</h3>}
        </div>
    );
};

export default CircularProgress;
