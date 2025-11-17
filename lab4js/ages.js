"use strict";

const ages = (persons) => {
 
  const life = {};

  for (const name in persons) {
    const person = persons[name];
    const { born, died } = person;

    const age = died - born;

    life[name] = age;
  }

  return life;
};

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }

module.exports = { ages };