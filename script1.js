// Quand on clique sur le lien "Voir nos produits"
const bouton = document.querySelector('.Accueil a'); // sélectionne le bouton dans la section Accueil

bouton.addEventListener('click', function(event) {
  event.preventDefault(); // empêche le lien d’aller directement
  const sectionProduits = document.querySelector('#Produits'); // sélectionne la section Produits
  sectionProduits.scrollIntoView({ behavior: 'smooth' }); // défilement doux
});