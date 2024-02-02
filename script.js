let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide the slide
    }

    // Increment index
    slideIndex++;

    // Reset index if needed
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; // Show the slide

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);
}

// Run the showSlides function when the page loads
window.onload = function () {
    showSlides();
};

