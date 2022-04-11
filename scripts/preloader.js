window.onload = function () {
    document.body.classList.add('loaded_hiding');
    document.body.classList.remove('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
    }, 500);
}