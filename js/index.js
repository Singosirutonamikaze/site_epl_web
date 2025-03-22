// script.js

// Gestion des onglets de la section Estudiantisme
const tabItems = document.querySelectorAll('#estudiantisme-tabs .tab-item');
const tabContents = document.querySelectorAll('#estudiantisme-content .tab-content');

tabItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');
    tabItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    tabContents.forEach(content => {
      if (content.id === target) {
        content.classList.remove('hidden');
        content.classList.add('block');
      } else {
        content.classList.remove('block');
        content.classList.add('hidden');
      }
    });
  });
});

// Gestion des onglets pour Bourses
const bourseTabButtons = document.querySelectorAll('.tab-button');
const bourseTabContents = document.querySelectorAll('#concours-bourses .tab-content');

bourseTabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    bourseTabButtons.forEach(btn => btn.classList.remove('active', 'border-b-4', 'border-blue-500', 'text-blue-900'));
    button.classList.add('active', 'border-b-4', 'border-blue-500', 'text-blue-900');
    bourseTabContents.forEach(content => {
      if (content.id === target) {
        content.classList.remove('hidden');
        content.classList.add('block');
      } else {
        content.classList.remove('block');
        content.classList.add('hidden');
      }
    });
  });
});
