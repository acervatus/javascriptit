'use strict';

var alku = prompt("Start year: ");
var loppu = prompt("End year: ");
var sum = 0;
const listcontainer = document.getElementById("target");
const listelement = document.createElement("ul");
for (var i = Number(alku); i < Number(loppu) + 1; i++) {
    if (i % 4 == 0) {
        if (i % 100 == 0) {
            if (i % 400 == 0) {
                const listnum = document.createElement("li");
                listnum.textContent = i;
                listelement.appendChild(listnum);
            }
        }
        else {
            const listnum = document.createElement("li");
            listnum.textContent = i;
            listelement.appendChild(listnum);
        }
    }
}
listcontainer.appendChild(listelement);