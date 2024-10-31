// ########## Globals ##########
const typeAssetsPath = '../assets/images/game-logos/';
const types = [
  { type: 'Bug', color: '#A8B820', textColor: '#333333' },
  { type: 'Dark', color: '#705848', textColor: '#FFFFFF' },
  { type: 'Dragon', color: '#7038F8', textColor: '#FFFFFF' },
  { type: 'Electric', color: '#F8D030', textColor: '#333333' },
  { type: 'Fairy', color: '#EE99AC', textColor: '#333333' },
  { type: 'Fighting', color: '#C03028', textColor: '#FFFFFF' },
  { type: 'Fire', color: '#F08030', textColor: '#FFFFFF' },
  { type: 'Flying', color: '#A890F0', textColor: '#333333' },
  { type: 'Ghost', color: '#705898', textColor: '#FFFFFF' },
  { type: 'Grass', color: '#78C850', textColor: '#333333' },
  { type: 'Ground', color: '#E0C068', textColor: '#333333' },
  { type: 'Ice', color: '#98D8D8', textColor: '#333333' },
  { type: 'Normal', color: '#A8A878', textColor: '#333333' },
  { type: 'Poison', color: '#A040A0', textColor: '#FFFFFF' },
  { type: 'Psychic', color: '#F85888', textColor: '#FFFFFF' },
  { type: 'Rock', color: '#B8A038', textColor: '#333333' },
  { type: 'Steel', color: '#B8B8D0', textColor: '#333333' },
  { type: 'Water', color: '#6890F0', textColor: '#FFFFFF' },
];

// ########## Types Container ##########
const typesContainer = document.querySelector('#typesContainer');
for (let i = 0; i < types.length; i++) {
  // Container
  const typeContainer = document.createElement('div');
  typeContainer.classList.add('typeContainer', 'col-xs-6', 'col-sm-3', 'col-lg-2');
  typeContainer.style.backgroundColor = types[i].color;
  typeContainer.id = types[i].type;

  // Text
  const typeText = document.createElement('p');
  typeText.innerText = types[i].type;
  typeText.style.color = types[i].textColor;

  // Image
  const typeImage = document.createElement('img');
  typeImage.src = `${typeAssetsPath}${types[i].type}.png`;

  // Append
  typeContainer.appendChild(typeImage);
  typeContainer.appendChild(typeText);
  typesContainer.appendChild(typeContainer);
}

// ########## Battle ##########
const battleContainer = document.querySelector('#battleContainer');
const vsElement = document.querySelector('#vs');
const playerElement = document.querySelector('#playerType');
const enemyElement = document.querySelector('#enemyType');
const typeContainers = document.querySelectorAll('.typeContainer');
const alertElement = document.querySelector('#alert');
const alertText = document.querySelector('#alertText');
const alertButton = document.querySelector('#alertButton');

typeContainers.forEach((element) => {
  element.addEventListener('click', () => {
    animateFight(element.id);
  });
});

// Alert Button
alertButton.addEventListener('click', () => {
  clearBattleContainer();

  alertElement.classList.remove('alertAppearAnimation');
  alertElement.classList.add('alertDisappearAnimation');

  setTimeout(() => {
    alertElement.classList.add('invisible');
    alertElement.classList.remove('alertDisappearAnimation');
  }, 500);
});

// Battle Animation in Battle Container
function animateFight(playerType) {
  battleContainer.classList.remove('invisible');
  playerElement.src = `${typeAssetsPath}${playerType}.png`;

  setTimeout(() => {
    vsElement.classList.remove('invisible');
  }, 1000);

  setTimeout(() => {
    const enemyType = types[Math.floor(Math.random() * 18)].type;
    enemyElement.src = `${typeAssetsPath}${enemyType}.png`;
  }, 2000);

  setTimeout(() => {
    checkResult(playerType, enemyType);
  }, 3000);
}

function clearBattleContainer() {
  battleContainer.classList.add('invisible');
  vsElement.classList.add('invisible');
  playerElement.src = '';
  enemyElement.src = '';
}

// Check Results
function checkResult(playerType, enemyType) {
  drawAlert();
}

function winAlert() {
  alertElement.style.backgroundColor = 'green';
  alertText.innerText = 'You Won !';
  alertElement.classList.remove('invisible');
  alertElement.classList.add('alertAppearAnimation');
}

function lossAlert() {
  alertElement.style.backgroundColor = 'brown';
  alertText.innerText = 'You Lost !';
  alertElement.classList.remove('invisible');
  alertElement.classList.add('alertAppearAnimation');
}

function drawAlert() {
  alertElement.style.backgroundColor = 'gold';
  alertText.innerText = 'Draw !';
  alertElement.classList.remove('invisible');
  alertElement.classList.add('alertSlideAnimation');

  setTimeout(() => {
    clearBattleContainer();
  }, 750);

  setTimeout(() => {
    alertElement.classList.add('invisible');
    alertElement.classList.remove('alertSlideAnimation');
  }, 1500);
}
