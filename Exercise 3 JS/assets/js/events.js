// Exercise 1
var button = document.querySelector('#click');
var iterations = document.querySelector('#iterations');
var clicks = 0;
iterations.innerText = clicks;

button.addEventListener('click', () => {
  clicks++;
  console.log(clicks);
  iterations.innerText = clicks;
});

// Exercise 2
var submitButton = document.querySelector('#sendForm');
var formFirstName = document.querySelector('#firstName');
var formLastName = document.querySelector('#lastName');
var formBirthday = document.querySelector('#birthday');
var submitResults = document.querySelector('#results');
var resFirstName = document.querySelector('#resFirstName');
var resLastName = document.querySelector('#resLastName');
var resAge = document.querySelector('#resAge');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  submitResults.classList.remove('invisible');
  resFirstName.innerText = `First Name: ${formFirstName.value}`;
  resLastName.innerText = `Last Name: ${formLastName.value}`;

  // I still hate that Date class has no date calculation
  var ageInMilliseconds = new Date() - new Date(formBirthday.value);
  var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  resAge.innerText = `Age: ${ageInYears}`;
});

// Exercise 3
var cube = document.querySelector('#cube');
var cubeHeight = 50;
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (cube.offsetTop > 0) {
        cube.style.top = `${cube.offsetTop - cubeHeight}px`;
      }
      break;
    case 'ArrowDown':
      if (cube.offsetTop < window.innerHeight - cube.offsetHeight) {
        cube.style.top = `${cube.offsetTop + cubeHeight}px`;
      }
      break;
    case 'ArrowLeft':
      if (cube.offsetLeft > 0) {
        cube.style.left = `${cube.offsetLeft - cubeHeight}px`;
      }
      break;
    case 'ArrowRight':
      if (cube.offsetLeft - cubeHeight < window.innerWidth) {
        cube.style.left = `${cube.offsetLeft + cubeHeight}px`;
      }
      break;
  }

  // Check if cube touches border
  if (
    cube.offsetTop === 0 ||
    cube.offsetTop === cube.offsetTop < window.innerHeight - cube.offsetHeight ||
    cube.offsetLeft === 0 ||
    cube.offsetLeft === cube.offsetTop < window.innerHeight - cube.offsetHeight
  ) {
    cube.style.backgroundColor = 'red';
  } else {
    cube.style.backgroundColor = 'black';
  }
});

// Exercise 4
var showRed = document.querySelector('#showRed');
var showGreen = document.querySelector('#showGreen');
var showBlue = document.querySelector('#showBlue');
var colorButton = document.querySelector('#colorButton');
var colorButtonNotRandom = document.querySelector('#colorButtonNotRandom');
var inputs = [showRed, showGreen, showBlue];

colorButton.addEventListener('click', (event) => {
  event.preventDefault();

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = Math.floor(Math.random() * 256);
  }

  applyColors();
});

colorButtonNotRandom.addEventListener('click', (event) => {
  event.preventDefault();

  applyColors();
});

function applyColors() {
  ex4.style.backgroundColor = `rgb(${showRed.value}, ${showGreen.value}, ${showBlue.value})`;
}

// Exercise 5
var title1 = document.querySelector('#title1');
var title2 = document.querySelector('#title2');
var title3 = document.querySelector('#title3');
var content1 = document.querySelector('#content1');
var content2 = document.querySelector('#content2');
var content3 = document.querySelector('#content3');

title1.addEventListener('click', () => {
  accordion(content1);
});
title2.addEventListener('click', () => {
  accordion(content2);
});
title3.addEventListener('click', () => {
  accordion(content3);
});

function accordion(contentToShow) {
  content1.classList.add('invisible');
  content2.classList.add('invisible');
  content3.classList.add('invisible');

  contentToShow.classList.remove('invisible');
}
