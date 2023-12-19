'use strict';
var nums = [2, 7, 4, 9, 6];
var newnums = even(nums);
function even(nums) {
    var evenlist = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenlist.push(nums[i]);
        }
    }
    return evenlist;
}
console.log(nums);
console.log(newnums);