'use strict';

var num = Number(prompt("Give an integer: "));
let prime = true;
for (var i = 2; i < Number(num); i++) {
    if (num % i == 0) {
        prime = false;
        break;
    }
}
if (prime) {
    document.querySelector('#target').innerHTML = num + " is a prime number";
}
else {
    document.querySelector('#target').innerHTML = num + " is not a prime number";
}