let currentSlide = 0;
const slides = document.querySelectorAll('.investor-ui-slide');
const dots = document.querySelectorAll('.investor-ui-dot');
const profileImg = document.getElementById('investor-ui-profile-img');
const profileName = document.getElementById('investor-ui-profile-name');
const thoughtElement = document.getElementById('investor-ui-thought');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function updateProfile(index) {
    const dot = dots[index];
    profileImg.src = dot.getAttribute('data-img');
    profileName.textContent = dot.getAttribute('data-name');
    thoughtElement.textContent = dot.getAttribute('data-thought');
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    updateProfile(currentSlide);

    // Image slider logic
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        updateProfile(currentSlide);
    }, 3000); // Change image every 3 seconds

    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            updateProfile(currentSlide);
        });
    });
});
