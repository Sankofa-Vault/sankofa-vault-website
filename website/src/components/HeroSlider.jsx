import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

/**
 * HeroSlider - Replaces Slick main slider
 * Full-screen hero carousel with fade effect and pagination
 */
const HeroSlider = ({ slides, className = '' }) => {
    return (
        <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}">0${index + 1}</span>`;
                },
            }}
            className={`ori-hero-swiper ${className}`}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;
