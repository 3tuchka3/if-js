let x = 'qwerewq';
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

let numb1 = 10;
let numb2 = 123;

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



let array = [];

for (let i = 0; i < 10; i++) {
  array.push(Math.round(Math.random() * (100 - 0) + 0));
}
for (let i = 0; i < 10; i++) {
  if (array[i] === 100) {
    array[i] = array[i]/100 + 'zerozero'
  }
  if (array[i]>10 && array[i] % 10 === 0){
    array[i] = array[i]/10 + 'zero'
  }
  if (array[i]<10 && array[i] % 10 === 0){
    array[i] = 'zero'
  }
}
console.log(array);

