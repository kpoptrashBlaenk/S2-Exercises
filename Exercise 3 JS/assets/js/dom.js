// Exercise 1
var footerDiv = document.querySelector('#footer');
var footer = document.createElement('footer');
footerDiv.append(footer);
footer.innerHTML = 'Copyright TM';
footer.style.textAlign = 'center';

// Exercise 2
// var hexadecimal = prompt('Give a color in hexadecimal:');
// var text = prompt('Give me some text:');
// var blocEx2 = document.querySelector('#blocEx2');
// blocEx2.style.color = hexadecimal;
// blocEx2.style.backgroundColor = hexadecimal;
// blocEx2.innerText = text;

// Exercise 3
// var blocEx3 = document.querySelector('#blocEx3');
// var divEx3 = document.createElement('div');
// blocEx3.append(divEx3);

// var ulEx3 = document.createElement('ul');
// divEx3.append(ulEx3);
// while (website !== 'stop') {
//   var website = prompt('Give me a website:');
//   if (website !== 'stop') {
//     var li = document.createElement('li');
//     var a = document.createElement('a');
//     a.href = website;
//     a.innerText = website;
//     li.append(a);
//     ulEx3.append(li);
//   }
// }

// Exercise 4
// function createOnesAndAppend(color) {
//   var span = document.createElement('span');
//   var br = document.createElement('br');
//   var text = '';

//   for (var j = 0; j < i; j++) {
//     text += '1';
//   }

//   span.innerText = text;
//   span.style.color = color;
//   blocEx4.append(span);
//   blocEx4.append(br);
// }

// var number = +prompt('Give a number');
// var color = prompt('Give a color');
// var color2 = prompt('Give a second color');
// var blocEx4 = document.querySelector('#blocEx4');

// for (var i = 1; i < number + 1; i++) {
//   createOnesAndAppend(color);
// }

// for (var i = number; i > 0; i--) {
//   createOnesAndAppend(color2);
// }
