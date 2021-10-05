function add(...nums) {
    let total = 0;

    for (i = 0; i < nums.length; i++) {
        total +=nums[i];
    }

    return total;
};

function divide(num1, num2) {
    if (num2===0) {
        throw new Error("You cannot divide by zero!");
    }
    return num1/num2;
};

//console.log(divide(3,1));

const PI = 3.14;
const TRAFFIC_LIGHTS = ['red', 'yellow', 'green'];

module.exports = 
{add,
divide,
PI,
TRAFFIC_LIGHTS}