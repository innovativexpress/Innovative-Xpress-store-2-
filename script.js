// Smooth scrolling effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation when scrolling
document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight / 1.3;
        if (position < screenHeight) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
