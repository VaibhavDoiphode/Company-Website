// Function to animate count numbers
function animateCountUp(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer to trigger animation when the section comes into view
const countBoxes = document.querySelectorAll('.count-number');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countNumberElement = entry.target;
            const targetValue = +countNumberElement.getAttribute('data-target');
            animateCountUp(countNumberElement, 0, targetValue, 2000); // Animate over 2 seconds
            observer.unobserve(countNumberElement); // Stop observing after animation
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Observe each count-box
countBoxes.forEach(countBox => {
    observer.observe(countBox);
});
