// ########## Globals ##########
const typeAssetsPath = '../assets/images/game-logos/';
const types = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];

// ########## Types Container ##########
const typesContainer = document.querySelector('#typesContainer');
for (let i = 0; i < types.length; i++) {
  // Container
  const typeContainer = document.createElement('div');
  typeContainer.classList.add('typeContainer', 'col-xs-6', 'col-sm-3', 'col-lg-2');

  // Image
  const typeImage = document.createElement('img');
  typeImage.src = `${typeAssetsPath}${types[i]}.png`;

  // Append
  typeContainer.appendChild(typeImage);
  typesContainer.appendChild(typeContainer);
}
