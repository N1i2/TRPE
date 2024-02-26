"use strict";
// 11111111111111111111111
const text1 = document.getElementById('numb');
const but1 = document.getElementById('button1');
let check1 = /^[0-9]{10}$/;
let NumbError = "Error With Size(need only 10 numbers)";
function GetResult(res) {
    console.log(res);
}
function CreatNumber(numb) {
    let first = numb.slice(0, 3);
    let second = numb.slice(3, 6);
    let threed = numb.slice(6, 10);
    let end = '(' + first + ')' + second + '-' + threed;
    return end;
}
but1 === null || but1 === void 0 ? void 0 : but1.addEventListener('click', () => {
    if (check1.test(text1.value))
        GetResult(CreatNumber(text1.value));
    else
        GetResult(NumbError);
});
//2222222222222222222222222222
const text2 = document.getElementById('ender');
const but2 = document.getElementById('button2');
let check2 = /^[1-9]\d*$/;
const endError = 'Lesson 2 is not a number';
class lesson2 {
    static solution(numb) {
        let result = 0;
        for (let i = 0; i < numb; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                result += i;
            }
        }
        console.log(result);
    }
}
but2 === null || but2 === void 0 ? void 0 : but2.addEventListener('click', () => {
    if (check2.test(text2.value))
        lesson2.solution(parseInt(text2.value));
    else
        GetResult('0');
});
//33333333333333333333333333
const text3 = document.getElementById('array');
const step = document.getElementById('step');
const but3 = document.getElementById('button3');
let check3 = /^[0-9]+$/;
let checkStep = /^[1-9]{1}$/;
function getResultArray(arr, step) {
    let first = arr.slice(0, arr.length - step);
    let second = arr.slice(arr.length - step, arr.length);
    let result = second + first;
    console.log(result);
}
but3 === null || but3 === void 0 ? void 0 : but3.addEventListener('click', () => {
    if (check3.test(text3.value) && checkStep.test(step.value))
        getResultArray(text3.value, parseInt(step.value) % text3.value.length);
    else
        GetResult("Error Lesson 3");
});
//4444444444444444444444444444
const text41 = document.getElementById('array1');
const text42 = document.getElementById('array2');
const but4 = document.getElementById('button4');
let check4 = /^[0-9]+$/;
function GetMedian(arr1, arr2) {
    let end = [...new Set([...arr1, ...arr2])];
    end = end.sort((a, b) => a - b);
    let result;
    if (end.length % 2 == 0)
        result = (end[end.length / 2 - 1] + end[end.length / 2]) / 2;
    else
        result = end[end.length / 2 - 0.5];
    console.log(result);
}
but4 === null || but4 === void 0 ? void 0 : but4.addEventListener('click', () => {
    if (check4.test(text41.value) && check4.test(text42.value))
        GetMedian(text41.value.split('').map(Number), text42.value.split('').map(Number));
    else
        GetResult('Error Lesson 4');
});
