'use strict';
var participants = prompt("Give Number of participants:");
var names = [];
for (let i = 0; i < Number(participants); i++) {
    names.push(prompt("Give Participant Number " + String(i + 1) + ": "));
}
names.sort();
const listcontainer = document.getElementById("target");
const listelement = document.createElement("ol");
for (let o = 0; o < names.length; o++) {
    const listname = document.createElement("li");
    listname.textContent = names[o];
    listelement.appendChild(listname);
}
listcontainer.appendChild(listelement);
