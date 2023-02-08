function tabsFunction() {
    const tabRadios = document.querySelectorAll('.tab_radio');
    const tabRectangles = document.querySelectorAll('.rectangle');
    tabRadios.forEach((tabRadio, radioIndex) => {
        tabRadio.addEventListener('change', () => {
            tabRectangles.forEach((tabRectangle, rectangleIndex) => {
                if (radioIndex === rectangleIndex) {
                    tabRectangle.classList.add('rectangle-active');
                } else {
                    tabRectangle.classList.remove('rectangle-active');
                }
            });
        });
    })
}
tabsFunction();