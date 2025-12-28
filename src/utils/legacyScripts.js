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

    // Re-init other sliders if needed (extracted from script.js as needed)
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

export const initKnob = () => {
    if (!window.jQuery) return;
    const $ = window.jQuery;
    if ($('.dial').length) {
        $('.dial').knob({
            'format': function (value) {
                return value + '%';
            }
        });
    }
};

export const initMainSlider = () => {
    if (!window.jQuery) return;
    const $ = window.jQuery;
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
};

export const destroyTextScroll = () => {
    if (!window.jQuery) return;
    const $ = window.jQuery;
    // The marquee plugin wraps content in .js-marquee-wrapper
    // We need to unwrap it to restore original state
    $('.ori-text-scroll-item-1, .ori-text-scroll-item-2').each(function () {
        const $el = $(this);
        // Check if marquee was initialized
        if ($el.find('.js-marquee-wrapper').length) {
            // Get original content from first .js-marquee
            const $originalContent = $el.find('.js-marquee').first().children().clone();
            $el.empty().append($originalContent);
        }
    });
};

export const initTextScroll = () => {
    if (!window.jQuery) return;
    const $ = window.jQuery;

    // Only init if marquee plugin exists and element hasn't been initialized
    if (typeof $.fn.marquee === 'undefined') return;

    if ($('.ori-text-scroll-item-1').length && !$('.ori-text-scroll-item-1').find('.js-marquee-wrapper').length) {
        $('.ori-text-scroll-item-1').marquee({
            speed: 50,
            gap: 20,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }

    if ($('.ori-text-scroll-item-2').length && !$('.ori-text-scroll-item-2').find('.js-marquee-wrapper').length) {
        $('.ori-text-scroll-item-2').marquee({
            speed: 50,
            gap: 20,
            delayBeforeStart: 0,
            direction: 'right',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }
};

export const initLegacyScripts = () => {
    initSlickSlider();
    initMainSlider();
    initWow();
    initKnob();
    initTextScroll();
};
