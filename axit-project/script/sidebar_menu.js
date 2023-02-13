const sidebar = document.querySelector(".sidebar_menu");
const openBtn = document.querySelector('.sidebar_open-btn');
const closeBtn = document.querySelector('.sidebar_close-btn');

const onBurgerClick = () => {
    sidebar.classList.toggle("sidebar_menu_active");
    openBtn.classList.toggle('sidebar_button-active');
    closeBtn.classList.toggle('sidebar_button-active');
}