'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length)
    key += characters[index];
  }
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));