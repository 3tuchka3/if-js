
const user = 'John Doe';
console.log(user);
let student = 'Vadim';
console.log(student);

student = user;
console.log(student);

let test = 1;
test += '1';
console.log(test);
console.log(Boolean(test));

let mass = [2, 3, 5, 8];
console.log(mass);
let n = 1;
for (let i = 0; i < mass.length; i++) {
  n *= mass[i];
}
console.log(n);

mass = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(mass);
for (let i=0; i, mass.length; i++) {
  if (mass[i] > 5 && mass[i] < 10) {
    console.log(mass[i]);
  }
}

console.log(mass);
for (let i = 0; i, mass.length; i++) {
  if ((mass[i]/ 2) === 0) {
    console.log(mass[i]);
  }
}
