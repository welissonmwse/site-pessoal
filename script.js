window.addEventListener('scroll', () => {
    const header = document.querySelector('.container header')
    header.classList.toggle('sticky', window.scrollY > 0)
})