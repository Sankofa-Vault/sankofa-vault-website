import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

/**
 * SponsorCarousel - Replaces Slick sponsor slider
 * Auto-scrolling logo carousel with responsive breakpoints
 */
const SponsorCarousel = ({ sponsors, className = '' }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                500: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                800: { slidesPerView: 4 },
                1000: { slidesPerView: 5 },
            }}
            className={`ori-sponsor-swiper ${className}`}
        >
            {sponsors.map((sponsor, index) => (
                <SwiperSlide key={index}>
                    <div className="ori-sponsor-item">
                        <div className="ori-sponsor-img">
                            <a href={sponsor.link || '#'}>
                                <img src={sponsor.image} alt={sponsor.alt || 'Sponsor'} />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SponsorCarousel;
