const sidebar = document.querySelector(".sidebar_menu");
const sidebarBtn = document.querySelector('.sidebar_btn');

const onBurgerClick = () => {
    sidebar.classList.toggle("sidebar_menu_active");
    sidebarBtn.classList.toggle('sidebar_btn-close');
}