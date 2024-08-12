document.addEventListener('DOMContentLoaded', function () {
    // Fonctionnalité de message de confirmation lors de l'envoi du formulaire
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Merci pour votre message! Nous vous répondrons bientôt.');
            contactForm.reset(); // Réinitialise le formulaire après l'envoi
        });
    }

    // Fonctionnalité d'animation des sections lors du défilement
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Fonctionnalité de menu déroulant et sélection de menu
    const servicesToggle = document.getElementById('services-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuItems = document.querySelectorAll('nav ul li a');

    if (servicesToggle && dropdownMenu) {
        servicesToggle.addEventListener('click', function (event) {
            event.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            servicesToggle.parentElement.classList.toggle('dropdown-open');
            window.location.href = 'services.html'; // Redirection vers la page des services
        });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(item => item.classList.remove('selected'));
            item.classList.add('selected');
        });
    });

    // Fonctionnalité de menu hamburger pour mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});
