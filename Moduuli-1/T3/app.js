'use strict';

var num1 = prompt("Integer 1: ");
var num2 = prompt("Integer 2: ");
var num3 = prompt("Integer 3: ");
document.querySelector('#target').innerHTML = "Sum: " + (num1 + num2 + num3) + " Product: " + (num1 * num2 * num3) + " Average: " + ((num1 + num2 + num3) / 3);