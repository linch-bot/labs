'use strict';

const array = [
  { name: 'Diana', phone: '+380532725419' },
  { name: 'Lera', phone: '+380957354256' },
  { name: 'Vika', phone: '+380834256781' },
];

const findPhoneByName1 = (name) => {
  for (const key of array) {
    if (key.name === name) return key.phone;
  }
};

const phone_numbers = {
  Diana: '+380532725419',
  Lera: '+380957354256',
  Vika: '+380834256781',
};

const findPhoneByName2 = (name) => phone_numbers[name];

console.log(findPhoneByName1('Diana'));
console.log(findPhoneByName1('Lera'));
console.log(findPhoneByName1('Vika'));