document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    let lastScrollPosition = 0;
    let isScrollingDown = true;
    
    // Fonction pour vérifier la position de défilement
    function checkScroll() {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 300; // Hauteur de défilement à partir de laquelle le bouton apparaît
        
        // Détermine si l'utilisateur défile vers le haut ou vers le bas
        isScrollingDown = scrollPosition > lastScrollPosition;
        lastScrollPosition = scrollPosition;
        
        // Affiche le bouton si l'utilisateur a défilé suffisamment vers le bas
        // ET s'il défile actuellement vers le bas 
        if (scrollPosition > scrollThreshold && isScrollingDown) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
    
    // Écouteur d'événement de défilement
    window.addEventListener('scroll', checkScroll);
    
    // Fonctionnalité du bouton
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Animation de défilement fluide vers le haut
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});