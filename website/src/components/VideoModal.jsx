import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './VideoModal.css';

/**
 * VideoModal - React component to display YouTube videos in a modal popup
 * Replaces the legacy Magnific Popup jQuery plugin
 * Uses React Portal to render at body level, avoiding z-index/stacking context issues
 * 
 * @param {Object} props
 * @param {string} props.videoId - YouTube video ID
 * @param {string} props.className - Additional CSS classes for the trigger button
 * @param {React.ReactNode} props.children - Content for the trigger button
 */
const VideoModal = ({ videoId, className = '', children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = ''; // Restore scroll
    };

    // Extract video ID from YouTube URL if full URL is passed
    const getVideoId = (idOrUrl) => {
        if (idOrUrl.includes('youtube.com') || idOrUrl.includes('youtu.be')) {
            const match = idOrUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
            return match ? match[1] : idOrUrl;
        }
        return idOrUrl;
    };

    const actualVideoId = getVideoId(videoId);

    return (
        <>
            <a
                href="#"
                className={className}
                onClick={openModal}
            >
                {children}
            </a>

            {isOpen && ReactDOM.createPortal(
                <div className="video-modal-overlay" onClick={closeModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="video-modal-close"
                            onClick={closeModal}
                            aria-label="Close video"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="video-modal-iframe-wrapper">
                            <iframe
                                src={`https://www.youtube.com/embed/${actualVideoId}?autoplay=1&rel=0`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default VideoModal;
