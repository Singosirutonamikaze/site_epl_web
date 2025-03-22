let sectionOne = document.querySelector('.section-one');

let backgroundImages = [
    'url(../Image/bg-1.jpg)',
    'url(../Image/bg-2.jpg)',
    'url(../Image/bg-3.jpg)'
];

let currentIndexOfBackgroundImages = 0;

setInterval(() => {
    sectionOne.style.backgroundImage = backgroundImages[currentIndexOfBackgroundImages];
    currentIndexOfBackgroundImages = (currentIndexOfBackgroundImages + 1) % backgroundImages.length;
}, 5000);