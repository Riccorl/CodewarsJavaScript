/*
    Link to Kata:
    https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence/
    8 kyu
    JavaScript
*/

function remove(s){
    var n = s.length-1;
    while (s.charAt(n) == "!") n--;
    return s.substring(0, n+1);
}
