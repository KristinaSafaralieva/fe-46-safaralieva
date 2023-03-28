// Normal level
// Task 1

const a = 'true';
const b = false;
const c = 17;
const d = undefined;
const e = null;

console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

// Task 2

let height = 15;
let width = 20;

if (height > width) {
    console.log(height);
} else {
    console.log(width);
}

// Task 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log('shouldGoToWork: ', shouldGoToWork);

// Task 5

let userNumber = prompt('Enter your number');

if (userNumber % 5 === 0 && userNumber % 3 === 0) {
    alert('FizBuz');
} else if (userNumber % 3 === 0) {
    alert('Buz');
} else if (userNumber % 5 === 0) {
    alert('Fiz');
}

// Task 6

let userAge = prompt('Enter your age');

if (userAge >= 16 && userAge <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} else if (userAge > 18) {
    alert('Попей пивка');
} else {
    alert('Пей колу');
}

// Task 7

const userDirection = prompt('Enter your direction');

switch (userDirection) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        console.log('try again');
        break;
}

// Advanced level
// Task 1

let userName = 'пОлИнА нАбЕрЕжНаЯ';
userName = userName
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
alert(`Привет, ${userName}`);

// Task 2

let numberUser = +prompt('Введите число');
let numberToSubstract = +prompt('Сколько отнять?');
let numberToAdd = +prompt('Сколько прибавить?');
let numberToMultiply = +prompt('На сколько умножить?');
let numberToDivide = +prompt('На сколько разделить?');
const result = (((numberUser - numberToSubstract) + numberToAdd) * numberToMultiply) / numberToDivide;
alert(`(((${numberUser} - ${numberToSubstract}) + ${numberToAdd}) * ${numberToMultiply}) / ${numberToDivide} = ${result}`);

// Task 3

const symbol = '#';
let str = '';
while (str.length < 6) {
    str += symbol;
    console.log(str);
}