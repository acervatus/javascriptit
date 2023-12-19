'use strict';
var strings = ["Johnny", "DeeDee", "Marky"];

const listcontainer = document.getElementById("target");
const listitem = document.createElement("newword");
listitem.textContent = concat(strings);
listcontainer.appendChild(listitem);

function concat(strings) {
    var wordtotal = "";
    for (var i = 0; i < strings.length; i++) {
        wordtotal += strings[i];
    }
    return wordtotal;
}