'use strict';
var nums = [];
while (true) {
    var num = prompt("Give Number")
    if (nums.includes(Number(num))) {
        console.log(num + " has already been given.");
        break;
    }
    else {
        nums.push(Number(num));
    }
}
nums.sort();
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
