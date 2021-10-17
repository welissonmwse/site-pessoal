window.addEventListener('scroll', () => {
    const header = document.querySelector('.container header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.container header nav ul').classList.toggle('active')
})