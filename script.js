// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic Text Animation for Hero Section
const heroTitle = document.querySelector('.hero-title');
const messages = ["Nandini's Cafe", "Coding Hub", "Creative Space"];
let messageIndex = 0;

function changeHeroTitle() {
    heroTitle.innerHTML = `Welcome to <span>${messages[messageIndex]}</span>`;
    messageIndex = (messageIndex + 1) % messages.length;
}

setInterval(changeHeroTitle, 3000); // Change every 3 seconds

// Button Animation on Hover
const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.transition = 'transform 0.3s';
    });
});
