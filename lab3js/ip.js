'use strict';

const ipToint = (ip = '176.105.8.22') => {
    const fn = (res, object) => (res << 8) + parseInt(object);
    return ip.split('.').reduce(fn, 0);
};

console.dir(ipToint());