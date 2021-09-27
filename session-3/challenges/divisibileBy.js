let sum = 0;
for (let i=1; i <=500; i++) {
    
    if ((i % 3 == 0) || (i % 5 == 0)) {
        console.log('Number divisible by 3 or 5', i);
        sum +=i;
    }
};

console.log('The sum is ', sum);