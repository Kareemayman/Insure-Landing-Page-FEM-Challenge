const burgerIcon = document.querySelector('.burger-icon')

const mobileMenu = document.querySelector('.mobile-menu')

burgerIcon.addEventListener('click', e => {

    mobileMenu.classList.toggle('invisible')

    burgerIcon.classList.toggle('rotate')

    document.body.classList.toggle('toggle-scroll')
})

mobileMenu.addEventListener('click', e => {

    if (e.target.matches("a")) {

        mobileMenu.classList.toggle("invisible")

        burgerIcon.classList.toggle("rotate")

        document.body.classList.toggle("toggle-scroll")
    }
})