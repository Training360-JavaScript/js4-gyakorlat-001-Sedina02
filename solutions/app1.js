'use strict';

const converterPromise = (array) => 
    new Promise((resolve, reject) => {
        if (array.every((element) => typeof element === 'string')) {
            resolve(array.map((element) => element.toUpperCase()));
        } else {
            reject('Error: Not all elements are string type!');
        }
    });

export default converterPromise;