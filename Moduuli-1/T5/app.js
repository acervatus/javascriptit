'use strict';

var vuosi = prompt("Give year: ");
if (vuosi % 4 == 0) {
    if (vuosi % 100 == 0) {
        if (vuosi % 400 == 0) {
            document.querySelector('#target').innerHTML = "Year " + vuosi + " is a leap year";
        }
        else {
            document.querySelector('#target').innerHTML = "Year " + vuosi + " is not a leap year";
        }
    }
    else {
        document.querySelector('#target').innerHTML = "Year " + vuosi + " is a leap year";
    }
}
else {
    document.querySelector('#target').innerHTML = "Year " + vuosi + " is not a leap year";
}