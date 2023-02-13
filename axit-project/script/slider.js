const sliderCards = document.querySelector('.reviews_cards')
const sliderButtons = document.querySelectorAll('.slider_controls_button');

const onLeftArrowClick = (el) => {
    sliderButtons.forEach(btn => btn.classList.remove('slider_controls_button-active'));
    el.classList.add('slider_controls_button-active');
    sliderCards.setAttribute('style', `transform: translateX(0%)`);
}

const onCenterArrowClick = (el) => {
    sliderButtons.forEach(btn => btn.classList.remove('slider_controls_button-active'));
    el.classList.add('slider_controls_button-active');
    sliderCards.setAttribute('style', `transform: translateX(-33.33%)`);
}

const onRightArrowClick = (el) => {
    sliderButtons.forEach(btn => btn.classList.remove('slider_controls_button-active'));
    el.classList.add('slider_controls_button-active');
    sliderCards.setAttribute('style', `transform: translateX(-66.66%)`);
}