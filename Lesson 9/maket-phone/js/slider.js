const sliderControls = document.querySelectorAll('.slider-controls');
const banners = document.querySelectorAll('.banner_slider_item');

const onSliderControlClick = () => {
    banners.forEach(banner => banner.classList.toggle('banner_inactive'));
    sliderControls.forEach(sliderControl => sliderControl.classList.toggle('blue-controls'));
};