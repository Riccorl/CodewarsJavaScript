/*
    Link to Kata: https://www.codewars.com/kata/count-the-monkeys/
    8 kyu
    JavaScript
*/

function monkeyCount(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array[i] = i+1;
    }
    return array;
}
