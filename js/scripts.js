// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Fonctionnalité de message de confirmation lors de l'envoi du formulaire
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Merci pour votre message! Nous vous répondrons bientôt.');
            contactForm.reset(); // Réinitialise le formulaire après l'envoi
        });
    }

    // Fonctionnalité d'animation des sections lors du défilement
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var servicesToggle = document.getElementById('services-toggle');
    var dropdownMenu = document.getElementById('dropdown-menu');
    var menuItems = document.querySelectorAll('nav ul li a');

    servicesToggle.addEventListener('click', function(event) {
        event.preventDefault();
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
            servicesToggle.parentElement.classList.remove('dropdown-open');
        } else {
            dropdownMenu.style.display = 'block';
            servicesToggle.parentElement.classList.add('dropdown-open');
        }
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.forEach(function(item) {
                item.classList.remove('selected');
            });
            item.classList.add('selected');
        });
    });
});

