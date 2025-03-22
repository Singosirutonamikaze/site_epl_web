// animation.js
document.addEventListener('DOMContentLoaded', () => {
    // Configuration de base
    const animationSettings = {
        rootMargin: '0px',
        threshold: 0.2,
        defaultDelay: 200,
        defaultDuration: 800
    };

    // Types d'animations disponibles
    const animationPresets = {
        fade: { opacity: 0, transform: 'none' },
        'fade-up': { opacity: 0, transform: 'translateY(50px)' },
        'fade-down': { opacity: 0, transform: 'translateY(-50px)' },
        'fade-left': { opacity: 0, transform: 'translateX(50px)' },
        'fade-right': { opacity: 0, transform: 'translateX(-50px)' },
        'zoom-in': { opacity: 0, transform: 'scale(0.95)' },
        'zoom-out': { opacity: 0, transform: 'scale(1.05)' }
    };

    // Fonction d'initialisation
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.dataset.animate || 'fade-up';
                    const delay = element.dataset.delay || animationSettings.defaultDelay;
                    const duration = element.dataset.duration || animationSettings.defaultDuration;

                    // Applique le style initial
                    Object.assign(element.style, {
                        opacity: 0,
                        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
                        ...animationPresets[animationType]
                    });

                    // Déclenche l'animation après le rendu initial
                    requestAnimationFrame(() => {
                        Object.assign(element.style, {
                            opacity: 1,
                            transform: 'none'
                        });
                    });

                    // Cesse d'observer après l'animation
                    observer.unobserve(element);
                }
            });
        }, {
            rootMargin: animationSettings.rootMargin,
            threshold: animationSettings.threshold
        });

        animatedElements.forEach(element => observer.observe(element));
    }

    // Gestion du chargement des images
    function handleImageAnimations() {
        const images = document.querySelectorAll('img[data-animate]');

        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            }
        });
    }

    // Initialisation des animations
    initScrollAnimations();
    handleImageAnimations();

    // Animation au chargement pour les éléments principaux
    gsap.from('.main-header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power4.out'
    });

    gsap.from('.section-one h1', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'expo.out'
    });

    gsap.from('.section-one p', {
        duration: 1,
        opacity: 0,
        delay: 0.8,
        ease: 'sine.inOut'
    });
});