let x = 20;
let y = 58;
let z = 42;
console.log(x + y +z);

const seconds = 60;
const minutes = 60;
const hours = 24;
const days = 365;
let age = 28;
let myAgeInSeconds = age * days * hours * minutes * seconds;
console.log(myAgeInSeconds);

let count = 42;
let userName = '42';
let countInString = String(count);
let countInStringTwo = `${count}`;
let userNameInNumber = Number(userName);
let userNameInNumberTwo = parseInt(userName);
console.log(countInString, countInStringTwo);
console.log(userNameInNumber, userNameInNumberTwo);

let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(String(a)+String(b), c);

let d = 'доступ';
let e = 'морпех';
let f = 'наледь';
let g = 'попрек';
let k = 'рубило';
let lengthWord = a + b + c + d + e;
console.log(lengthWord.length);

let promName = prompt("Enter your name:");
let promAge = prompt("Enter your age:");
console.log(promName, promAge);

let q = 4;
let w = 3;
[q, w] = [w, q];
console.log('q: ', q);
console.log('w: ', w);

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);