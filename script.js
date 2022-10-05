'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SLICE METHOD   ----- Does not mutate the original array
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-3));
console.log(arr.slice(0, -3));
console.log(arr);

// SPLICE METHOD === Does change the original array
// console.log(arr.splice(2));
// console.log(arr.splice(-1));

// reverse method --- change the original array
let arr2 = ['i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT METHOD === Does not change
let arr3 = arr.concat(arr2);

// JOIN METHOD
console.log(arr3.join('='));
*/

/*
let arr = [22, 333, 554];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// using at method in strings
console.log('joel'.at(0));
console.log('joel'.at(-2));
*/

// FOREACH method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${index + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
  }
}
console.log('----FOREACH----');
movements.forEach(function (mov, index, arr) {
  console.log(arr);
  if (mov > 0) {
    console.log(`Movement ${index + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key) => {
  console.log(`${key} is the abbreviation of ${value}`);
});

// Set

const currenciesUnique = new Set(['USD', 'EUR', 'EUR', 'USD', 'GBP', 'GBP']);
currenciesUnique.forEach((key, value, set) => {
  console.log(`${key}: ${value}`);
});
