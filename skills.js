document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    function setProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }

    function checkScroll() {
        const skillsSection = document.querySelector('.skills');
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos) {
            setProgressBars();
            window.removeEventListener('scroll', checkScroll); // Remove scroll event after loading
        }
    }

    checkScroll(); // Call function on page load
    window.addEventListener('scroll', checkScroll);
});
