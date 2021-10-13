/* You have a blue lottery ticket with numbers A, B and C on it. This makes three pairs, which we’ll 
say are AB, BC and AC.
Consider the sum of the numbers in each pair. 
If any pair sums to exactly 10, the result returned is 10. 
Otherwise if AB sum is exactly 10 more than either BC or AC sums, then the result is 5. 
Otherwise the result is 0. */

export const blueTicket = (a, b, c) => {
    let sum = 0;

    if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
        throw new Error("This function only accepts numbers")
    }

    if (a+b == 10 || a+c==10 || b+c==10) {
        sum = 10;
    } else if (a == (c+10) || b == (c+10)) {
        sum = 5;
    } 
    
    return sum;
}