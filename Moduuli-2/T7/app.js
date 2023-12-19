'use strict';
var sides = Number(prompt("Number of sides: "));
var nums = [];
while (true) {
    var num = randomnumber(sides);
    nums.push(num);
    if (num == sides) {
        break;
    }
}
const listcontainer = document.getElementById("target");
const listelement = document.createElement("ul");
for (let i = 0; i < nums.length; i++) {
    const listnum = document.createElement("li");
    listnum.textContent = nums[i];
    listelement.appendChild(listnum);
}
listcontainer.appendChild(listelement);
function randomnumber(sides) {
    return Math.floor(Math.random() * sides) + 1;
}