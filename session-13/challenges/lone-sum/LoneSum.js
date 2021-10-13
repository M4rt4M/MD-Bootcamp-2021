/* Given 3 numbers, a, b and c, return their sum.
However, if one of the values is the same as another of the values, it does not 
count towards the sum. */

export const loneSum = (a, b, c) => {
    let sum = 0;

    if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
        throw new Error("This function only accepts numbers")
    }

    if (a != b && a != c && b != c) {
        sum = a + b + c;
    } else if (a == b && a != c) {
        sum = c;
    } else if (a == c && a != b) {
        sum = b;
    } else if (b == c && b != a) {
        sum = a;
    }
    
    return sum;
}