export const initSlickSlider = () => {
    if (!window.jQuery) return;
    const $ = window.jQuery;

    if ($('.ori-sponsor-slider').length && !$('.ori-sponsor-slider').hasClass('slick-initialized')) {
        $('.ori-sponsor-slider').slick({
            arrow: false,
            dots: false,
            loop: true,
            infinite: false,
            slidesToShow: 5,
            autoplay: true,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1, infinite: true } },
                { breakpoint: 1000, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                { breakpoint: 800, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1 } }
            ]
        });
    }

    if ($('.ori-testimonial-slider-1').length && !$('.ori-testimonial-slider-1').hasClass('slick-initialized')) {
        $('.ori-testimonial-slider-1').slick({
            arrow: true,
            dots: false,
            slidesToShow: 1,
            autoplay: false,
            prevArrow: ".testi-left_arrow",
            nextArrow: ".testi-right_arrow",
            slidesToScroll: 1,
        });
    }
};

export const initWow = () => {
    if (window.WOW) {
        new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    }
};

export const initMainSlider = () => {
    if (!window.jQuery) return;
    const $ = window.jQuery;

    // Small delay to ensure DOM is fully rendered (especially important on refresh with cached data)
    setTimeout(() => {
        if ($('.ori-slider-wrap-1').length && !$('.ori-slider-wrap-1').hasClass('slick-initialized')) {
            $('.ori-slider-wrap-1').slick({
                arrow: false,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                fade: true,
                autoplay: false,
                slidesToScroll: 1,
                customPaging: function (slider, i) {
                    return '0' + (i + 1);
                },
            });
        }
    }, 100); // 100ms delay to ensure DOM is painted
};

// Note: initKnob and initTextScroll have been removed
// They are now replaced by React components:
// - CircularProgress.jsx (replaces jQuery Knob)
// - Marquee.jsx (replaces jQuery Marquee)

export const initLegacyScripts = () => {
    // Safety check: ensure jQuery is loaded before initializing plugins
    if (!window.jQuery) {
        console.warn('jQuery not loaded yet, deferring legacy scripts initialization');
        // Retry after a short delay
        setTimeout(() => {
            if (window.jQuery) {
                initSlickSlider();
                initMainSlider();
                initWow();
            } else {
                console.error('jQuery failed to load - legacy scripts disabled');
            }
        }, 100);
        return;
    }

    initSlickSlider();
    initMainSlider();
    initWow();
};

