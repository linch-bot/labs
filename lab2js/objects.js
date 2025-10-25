'use strict';

const fn = () => {
    const obj1 = { name: 'Anastasiia' };
    let obj2 = { name: 'Anastasiia' };

    obj1.name = 'Linchevska';
    obj2.name = 'Linchevska';

    obj2 = { name: 'Anastaiia Linchevska'};
};

const createUser = (name, city) => {
    return {name, city};
};

console.log(createUser('Anastasiia Linchevska', 'Kyiv'))