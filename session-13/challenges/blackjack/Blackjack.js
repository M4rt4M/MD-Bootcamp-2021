/* Given two numbers greater than 0, return whichever is 
nearest to 21 without going over. Return 0 if they both 
go over 21*/

export const blackjack = (number1, number2) => {
    let result;
    const num1Diff = Math.abs(21-number1);
    const num2Diff = Math.abs(21-number2);


    if (number1<=0 || number2<=0) {
        throw new Error("Both numbers must be greater than 0")
    }

    if (number1>21 && number2>21) {
        result=0;
    } else if (number1==number2) {
        result = number1;
    } else if (number1<=21) {
        if (num1Diff <= num2Diff) {
            result = number1;
        }
    } else if (number2<=21){
        if (num1Diff >= num2Diff) {
            result = number2;
        } 
    }
    
    return result;
} 

/* //Chris'es 
export function blackjack(num1, num2) {
    let result = 0;

    if (num1 <= 21) {
        result = num1;
    } else if (num2 <= 21) {
        result = num2;
    }
    if (num2 <= 21 && num2 > num1) {
        result = num2;
    }

    console.log(result)
    return result;
} */