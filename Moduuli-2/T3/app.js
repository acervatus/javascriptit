'use strict';
var names = [];
for (let i = 0; i < 6; i++) {
    names.push(prompt("Give the name of dog " + String(i + 1) + ": "));
}
names.sort();
const listcontainer = document.getElementById("target");
const listelement = document.createElement("ul");
for (let o = names.length - 1; o >  -1; o--) {
    const listname = document.createElement("li");
    listname.textContent = names[o];
    listelement.appendChild(listname);
}
listcontainer.appendChild(listelement);
