'use strict';
var nums = [];
while (true) {
    var num = randomnumber();
    nums.push(num);
    if (num == 6) {
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
function randomnumber() {
    return Math.floor(Math.random() * 6) + 1;
}