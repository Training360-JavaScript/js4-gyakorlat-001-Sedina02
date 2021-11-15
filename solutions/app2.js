'use strict';

const sorterPromise = (array) => 
    new Promise((resolve, reject) => {
        if (array.every((element) => typeof element === 'string')) {
            resolve(array.sort());
        } else {
            reject('Error: Not all elements are string type!');
        }
    });

export default sorterPromise;