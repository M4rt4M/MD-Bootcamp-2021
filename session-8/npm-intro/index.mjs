import _ from 'lodash';

console.log("index.js accessed");

_.each([1, 2, 3, 4], function(num) {
    console.log(num);
});