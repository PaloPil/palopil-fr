window.onload = function () {
    document.querySelector("nav").addEventListener("click", scrollDown);
    window.addEventListener("scroll", updateButtonVisibility);
    updateButtonVisibility();
}

function scrollDown() {
    window.scrollTo({
        top: window.innerHeight*0.9,
        behavior: 'smooth'
    });
}

function updateButtonVisibility() {
    const button = document.querySelector("nav");
    if (window.scrollY > 0) {
        button.style.opacity = "0";
        button.style.pointerEvents = "none";
    } else {
        button.style.opacity = "1";
        button.style.pointerEvents = "auto";
    }
}