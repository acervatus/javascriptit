'use strict';

var laske = prompt("Number of dice: ");
var sum = 0;
for (var i = 0; i < Number(laske); i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}
console.log(sum);