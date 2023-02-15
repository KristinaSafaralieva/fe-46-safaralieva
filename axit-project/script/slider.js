const sliderCardsElement = document.querySelector('.reviews_cards')
const sliderButtons = document.querySelectorAll('.slider_controls_button');

const onDotClick = (el) => {
    sliderButtons.forEach(btn => btn.classList.remove('slider_controls_button-active'));
    el.classList.add('slider_controls_button-active');
    const sliderPosition = el.getAttribute('data-slider-position') || '0';
    sliderCardsElement.setAttribute('style', `transform: translateX(${sliderPosition})`);
}