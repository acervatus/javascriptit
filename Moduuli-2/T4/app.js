'use strict';
var nums = [];
while (true) {
    var num = prompt("Give Number")
    if (Number(num) == 0) {
        break;
    }
    else {
        nums.push(Number(num));
    }
}
nums.sort();
for (let i = nums.length - 1; i > -1; i--) {
    console.log(nums[i]);
}
