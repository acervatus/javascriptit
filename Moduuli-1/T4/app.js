'use strict';

var nimi = prompt("Give name: ");
var sel = Math.floor(Math.random() * 5) + 1;
var luokka = ""
if(sel == 1) {
    luokka = "Gryffindor"
}
else if(sel == 2) {
    luokka = "Slytherin"
}
else if(sel == 3) {
    luokka = "Hufflepuff"
}
else if(sel == 4) {
    luokka = "Ravenclaw"
}
document.querySelector('#target').innerHTML = nimi + ", you are " + luokka + ".";