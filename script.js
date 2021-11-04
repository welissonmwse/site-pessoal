window.addEventListener('scroll', () => {
    const header = document.querySelector('.container header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.container header nav ul').classList.toggle('active')
})

const links = document.querySelectorAll("header nav ul li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}