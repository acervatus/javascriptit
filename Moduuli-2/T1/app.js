'use strict';
var nums = [];
for (let i = 0; i < 5; i++) {
    nums.push(prompt("Give Number " + String(i + 1) + ": "));
}
for (let i = 4; i > -1; i--) {
    console.log(nums[i]);
}
