let sum = 0;
console.log('Numbers divisible by 3 or 5:');
for (let i=1; i <=500; i++) { 
    if ((i % 3 == 0) || (i % 5 == 0)) {
        console.log(i);
        sum +=i;
    }
};

console.log('The sum of the numbers above is ', sum);