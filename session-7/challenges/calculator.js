function add(...nums) {
    let total = 0;

    for (i = 0; i < nums.length; i++) {
        total +=nums[i];
    }
}

function divide(num1, num2) {
    if (num2=0) {
        throw new Error("You cannot divide by zero!");
    }
    return num1/num2;
}