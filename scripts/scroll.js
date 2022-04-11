let header = document.querySelector(".header");

window.addEventListener('scroll', function (event) {
    if (document.documentElement.getBoundingClientRect().top <= -60)
        header.style.height = "40px";
    else header.style.height = "60px";
});