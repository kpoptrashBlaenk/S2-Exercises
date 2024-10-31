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
