// Exercise 1
// WHY PROMPT, THIS IS SO ANNOYING
var firstNumber = +prompt('Enter a number');
var secondNumber = +prompt('Enter another one');

var addition = firstNumber + secondNumber;
alert(`${firstNumber} + ${secondNumber} = ` + addition);
addition = firstNumber - secondNumber;
alert(`${firstNumber} - ${secondNumber} = ` + addition);
addition = firstNumber * secondNumber;
alert(`${firstNumber} * ${secondNumber} = ` + addition);
addition = firstNumber / secondNumber;
alert(`${firstNumber} / ${secondNumber} = ` + addition);

// Exercise 2
var priceTax = +prompt('A price before tax');
priceTax = 1 + priceTax * 0.196 + 5;
alert(`Price: ${priceTax}€`);

// Exercise 3
var temperature = +prompt('Temperature in celsius:');
temperature = (temperature * 9) / 5 + 32;
alert(`Temperature: ${temperature}F`);

// Exercise 4
var weight = +prompt('Your weight in kg');
var height = +prompt('Your height in cm') / 100;
var imc = weight / (height * height);
alert(`Your IMC: ${imc}`);

// Exercise 5
var nb1 = 5;
var nb2 = 3;
var temp = nb1;
nb1 = nb2;
nb2 = temp;

// Exercise 6
// I HATE PROMPTS
var car = {
  brand: prompt('Car brand:'),
  model: prompt('Car model:'),
  abs: confirm('ABS?'),
  finition: {
    color: prompt('Color:'),
    option: prompt('Option:'),
    chrome: prompt('Chromas: (separate with comma)').split(','),
  },
  distance: +prompt('Distance in km:'),
};
var carOptions = {
  brand: car.brand,
  abs: car.abs,
  color: car.finition.color,
  chroma2: car.finition.chrome[1],
  distance: car.distance,
};
console.table(carOptions);

// Exercise 7
var romance = ['Golden Time', 'School Rumble', 'Danger in my Heart'];
var comedy = ['Konosuba', 'Asobi Asobase', "Jojo's Bizarre Adventure"];
var sliceOfLife = ['The way of the Househusband', 'Kobayashi-san chi no Maid Dragon', 'New Game!'];
var proxer = [romance, comedy, sliceOfLife];
console.log(proxer);
proxer[0].splice(2, 0, 'Kimi no Na wa', 'A Silent Voice');
console.log(proxer);
proxer[1].splice(1, 1, 'Ranma1/2', 'Dandadan');
console.log(proxer);
proxer[0].push('Violet Evergarden');
console.log(proxer);
proxer[2].splice(0, 0, 'My Dress-Up Darling');
console.log(proxer);
proxer[2].splice(proxer[2].length - 1, 1);
console.log(proxer);
