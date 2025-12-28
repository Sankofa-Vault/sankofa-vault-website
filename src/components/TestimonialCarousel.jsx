import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './TestimonialCarousel.css';

/**
 * TestimonialCarousel - Replaces Slick testimonial slider
 * Single slide carousel with custom prev/next arrows
 */
const TestimonialCarousel = ({ testimonials, className = '' }) => {
    return (
        <div className={`ori-testimonial-carousel-wrapper ${className}`}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: '.testi-prev-btn',
                    nextEl: '.testi-next-btn',
                }}
                className="ori-testimonial-swiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="ori-testimonial-item-area">
                            <div className="ori-testimonial-item-1">
                                <div className="ori-testimonial-text text-center pera-content">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="carousel_nav">
                <button type="button" className="testi-prev-btn testi-left_arrow">
                    <img src="assets/img/vector/prev.png" alt="Previous" />
                </button>
                <button type="button" className="testi-next-btn testi-right_arrow">
                    <img src="assets/img/vector/next.png" alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
