const list = [0];
for (let i = 1; i <=50; i++) {
    if (i <= 1) {
        list.push(i);
    } else {
        list.push(list[list.length-1]+list[list.length-2]);      
    }
};
console.log(list);

// alt
let a = 0;
let b = 1;
console.log(a);
console.log(b);
let newSum = 0;

for (let i = 0; b < 50; i++) {
     newSum = a+b
     console.log(newSum);
     a = b;
 }