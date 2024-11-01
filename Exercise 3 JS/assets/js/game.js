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
const typeEffectiveness = {
  normal: { rock: 0, ghost: 0, steel: 0 },
  fire: { grass: 1, ice: 1, bug: 1, steel: 1, fire: 0, water: 0, rock: 0, dragon: 0 },
  water: { fire: 1, ground: 1, rock: 1, water: 0, grass: 0, dragon: 0 },
  electric: { water: 1, flying: 1, ground: 0, grass: 0, dragon: 0, electric: 0 },
  grass: { water: 1, ground: 1, rock: 1, fire: 0, grass: 0, poison: 0, flying: 0, bug: 0, dragon: 0, steel: 0 },
  ice: { grass: 1, ground: 1, flying: 1, dragon: 1, fire: 0, water: 0, ice: 0, steel: 0 },
  fighting: { normal: 1, ice: 1, rock: 1, dark: 1, steel: 1, ghost: 0, fairy: 0 },
  poison: { grass: 1, fairy: 1, steel: 0 },
  ground: { fire: 1, electric: 1, poison: 1, rock: 1, grass: 0, flying: 0 },
  flying: { grass: 1, fighting: 1, bug: 1, electric: 0, rock: 0, steel: 0 },
  psychic: { fighting: 1, poison: 1, dark: 0, steel: 0 },
  bug: { grass: 1, psychic: 1, dark: 1, fire: 0, fighting: 0, poison: 0, flying: 0, ghost: 0, steel: 0, fairy: 0 },
  rock: { fire: 1, ice: 1, flying: 1, bug: 1, fighting: 0, ground: 0, steel: 0 },
  ghost: { psychic: 1, ghost: 1, normal: 0, dark: 0 },
  dragon: { dragon: 1, fairy: 0, steel: 0 },
  dark: { psychic: 1, ghost: 1, fighting: 0, fairy: 0 },
  steel: { ice: 1, rock: 1, fairy: 1, fire: 0, water: 0, electric: 0 },
  fairy: { fighting: 1, dragon: 1, dark: 1, fire: 0, poison: 0, steel: 0 },
};

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
let lockInput = true;
let attacker = false;
const battleContainer = document.querySelector('#battleContainer');
const vsElement = document.querySelector('#vs');
const playerElement = document.querySelector('#playerType');
const enemyElement = document.querySelector('#enemyType');
const typeContainers = document.querySelectorAll('.typeContainer');
const alertElement = document.querySelector('#alert');
const alertText = document.querySelector('#alertText');
const alertButton = document.querySelector('#alertButton');
const turnElement = document.querySelector('#turn');
const turnText = document.querySelector('#turnText');
const turnButton = document.querySelector('#turnButton');

// Type Containers Click
typeContainers.forEach((element) => {
  element.addEventListener('click', () => {
    if (!lockInput) {
      animateFight(element.id);
    }
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

    chooseAttacker();
  }, 500);
});

// Battle Animation in Battle Container
function animateFight(playerType) {
  lockInput = true;
  battleContainer.classList.remove('invisible');
  playerElement.src = `${typeAssetsPath}${playerType}.png`;
  const enemyType = types[Math.floor(Math.random() * 18)].type;

  setTimeout(() => {
    vsElement.classList.remove('invisible');
  }, 1000);

  setTimeout(() => {
    enemyElement.src = `${typeAssetsPath}${enemyType}.png`;
  }, 2000);

  setTimeout(() => {
    checkResult(playerType, enemyType);
  }, 3000);
}

// Clear Battle Container
function clearBattleContainer() {
  battleContainer.classList.add('invisible');
  vsElement.classList.add('invisible');
  playerElement.src = '';
  enemyElement.src = '';
}

// Results
function checkResult(playerType, enemyType) {
  playerType = playerType.toLowerCase();
  enemyType = enemyType.toLowerCase();

  if (attacker) {
    switch (typeEffectiveness[playerType][enemyType]) {
      case 1:
        winAlert();
        break;
      case 0:
        lossAlert();
        break;
      default:
        drawAlert();
        break;
    }
  } else {
    switch (typeEffectiveness[enemyType][playerType]) {
      case 1:
        lossAlert();
        break;
      case 0:
        winAlert();
        break;
      default:
        drawAlert();
        break;
    }
  }
}

// Win
function winAlert() {
  alertElement.style.backgroundColor = 'green';
  alertText.innerText = 'You Won !';
  alertElement.classList.remove('invisible');
  alertElement.classList.add('alertAppearAnimation');
}

// Loss
function lossAlert() {
  alertElement.style.backgroundColor = 'brown';
  alertText.innerText = 'You Lost !';
  alertElement.classList.remove('invisible');
  alertElement.classList.add('alertAppearAnimation');
}

// Draw
function drawAlert() {
  alertElement.style.backgroundColor = 'gold';
  alertText.innerText = 'Draw !';
  alertButton.classList.add('invisible');
  alertElement.classList.remove('invisible');
  alertElement.classList.add('alertSlideAnimation');

  setTimeout(() => {
    clearBattleContainer();
  }, 750);

  setTimeout(() => {
    alertButton.classList.remove('invisible');
    alertElement.classList.add('invisible');
    alertElement.classList.remove('alertSlideAnimation');
    chooseAttacker();
  }, 1500);
}

// Select Attacker
function chooseAttacker() {
  if (Math.floor(Math.random() * 2) === 0) {
    attacker = true;
  } else {
    attacker = false;
  }

  if (attacker) {
    turnText.innerText = 'You are the attacker';
    turnElement.style.backgroundColor = 'red';
  } else {
    turnText.innerText = 'You are the defender';
    turnElement.style.backgroundColor = 'blue';
  }

  turnElement.classList.remove('invisible');
}

turnButton.addEventListener('click', () => {
  turnElement.classList.add('invisible');
  lockInput = false;
});

chooseAttacker();
