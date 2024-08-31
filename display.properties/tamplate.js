let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides (n) {
    showSlides(slideIndex += n);
}

// Show slides
function showSlides (n) {
    let slides = document.getElementsByClassName("slides");
    if (n === undefined) {
        slideIndex++;
    } else {
        slideIndex = n;
    }
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    if (n === undefined) {
        setTimeout(showSlides, 2000); 
    }
}