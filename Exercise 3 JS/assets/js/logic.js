// Exercise 1
// var birthYear = +prompt('Your birth year:')
// var major = 18 <= new Date().getFullYear() - birthYear
// alert(major ? 'Get free Hentai here!' : 'Get outta here!')

// Exercise 2
// var birthYear = +prompt('Your birth year:');
// var age = new Date().getFullYear() - birthYear;
// alert(`This will cost you ${age < 12 ? 'nothing!' : age <= 18 || age > 70 ? '70€' : "you don't even wanna know..."}`);

// Exercise 3
// var countdown = +prompt('Seconds:');
// for (var i = countdown; i >= 0; i--) {
//   setTimeout(alert(i), 1000)
// }

// Exercise 4
// var allStories = ''
// var stories = +prompt('Number of stories:')
// for(var i = 0; i <= stories; i++) {
//     var story = ''
//     for(var j = 0; j < i+1; j++) {
//         story += '1'
//     }
//     allStories += story + '\n'
// }
// alert(allStories)

// Exercise 5
// var i = 1;
// var j = 2;
// var allPrimes = 0;

// // Each number
// while (i <= 100) {
//   var prime = true;

//   //   Divided by each number before except 1 and himself
//   for (var k = 1; k < j; k++) {
//     if (k !== 1 && k !== j) {
//       // Modulo = 0 -> No prime number
//       if (j % k === 0) {
//         prime = false;
//       }
//     }
//   }

//   if (prime) {
//     i++;
//     allPrimes += j
//   }
//   j++;
// }
// alert(`All prime numbers together: ${allPrimes}`)

// Exercise 6
// var naturalNumber = +prompt('Give a natural number:');
// var naturalResult = 1
// while(naturalNumber > 0) {
//     naturalResult = naturalResult * naturalNumber
//     naturalNumber--
// }
// alert(`Result: ${naturalResult}`)

// Exercise 7
// var noPassword = [];
// var online = [];
// var shortPassword = [];
// var users = [
//   {
//     name: 'Aldin',
//     age: 24,
//     password: 'password1',
//     online: true,
//   },
//   {
//     name: 'Muris',
//     age: 19,
//     password: 'yo',
//     online: false,
//   },
//   {
//     name: 'Kenan',
//     age: 15,
//     password: '',
//     online: false,
//   },
// ];

// for (var i = 0; i < users.length; i++) {
//   if (users[i].password.length === 0) {
//     noPassword.push(users[i].name);
//   }

//   if (users[i].online) {
//     online.push(users[i].name);
//   }

//   if (users[i].password.length < 4) {
//     shortPassword.push(users[i].name);
//   }
// }
// alert(`Users with no password: ${noPassword}`)
// alert(`Users online: ${online}`)
// alert(`Users with short password: ${shortPassword}`)
