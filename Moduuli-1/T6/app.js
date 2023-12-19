'use strict';

var laske = confirm("Should I calculate the square root?: ");
if (laske) {
    var num = prompt("Give number: ");
    if (Number(num) < 0) {
        document.querySelector('#target').innerHTML = "The square root of a negative number is not defined";
    }
    else {
        document.querySelector('#target').innerHTML = Math.sqrt(Number(num));
    }
}
else {
    document.querySelector('#target').innerHTML = "The square root is not calculated.";
}