window.onload = function () {
    document.querySelector("nav").addEventListener("click", scrollDown);
    document.querySelector("header select").addEventListener("change", languageChange);
    window.addEventListener("scroll", updateButtonVisibility);
    updateButtonVisibility();

    const projects = document.querySelectorAll("b a");
    projects.forEach(project => {
        project.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path d=\"M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z\"/></svg> " + project.textContent;
        project.style.fill = "var(--main-text-color)";
    });
}

function scrollDown() {
    window.scrollTo({
        top: window.innerHeight*0.9,
        behavior: 'smooth'
    });
}

function languageChange() {
    const selector = document.querySelector("header select");
    window.location.href = '../'+selector.value;
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