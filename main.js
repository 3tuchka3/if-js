/*
const x = 'qwerewq';
console.log(x);

function palindrome(x) {
  let n = 1;
  for (let i = 0; i < Math.trunc(x.length / 2); i++ && x.length - n) {
    console.log(x[i], x[x.length - n]);
    if (x[i] !== x[x.length - n]) {
      return false;
    }
    n++;
  }
  return true;
}

console.log(palindrome(x));

const numb1 = 10;
const numb2 = 123;

function min(x, y) {
  if (x < y) console.log('min = ', x);
  if (x > y) console.log('min = ', y);
  if (x === y) console.log('x = y');
}

min(numb1, numb2);

function max(x, y) {
  if (x < y) console.log('max = ', y);
  if (x > y) console.log('max = ', x);
  if (x === y) console.log('x = y');
}

max(numb1, numb2);


function array(){
const array = [];

for (let i = 0; i < 10; i++) {
  array.push(Math.round(Math.random() * (100 - 0) + 0));
}
for (let i = 0; i < 10; i++) {
  if (array[i] === 100) {
    array[i] = array[i] / 100 + 'zerozero';
  }
  if (array[i] > 10 && array[i] % 10 === 0) {
    array[i] = array[i] / 10 + 'zero';
  }
  if (array[i] < 10 && array[i] % 10 === 0) {
    array[i] = 'zero';
  }
}
console.log(array);
}

array();*/
function sum(a, b){
    return a + b;
};

console.log(sum(2, 5));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function Color() {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
    return event;
  };
}

text1.addEventListener('click', Color());
text2.addEventListener('click', Color());
text3.addEventListener('click', Color());