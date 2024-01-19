function getMenu() {
    setIcon()
    const selectMenu = document.getElementById('burger_menu')
    selectMenu.classList.toggle('active')
}

function setIcon() {
    const selectMenu = document.getElementById('burger_icon')
    selectMenu.classList.toggle('logo__icon')
}