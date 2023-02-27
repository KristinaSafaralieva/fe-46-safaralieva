const filterBtns = document.querySelectorAll('.filter-item');
const portfolioImages = document.querySelectorAll('.portfolio_image > img');

const onFilterBtnClick = (el) => {
    filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
    el.classList.add('active');
    const activeImgClass = el.getAttribute('data-filter');
    portfolioImages.forEach(portfolioImage => {
        if (!activeImgClass || portfolioImage.classList.contains(activeImgClass)) {
            portfolioImage.classList.remove('inactive');
        } else {
            portfolioImage.classList.add('inactive');
        }
    })
};