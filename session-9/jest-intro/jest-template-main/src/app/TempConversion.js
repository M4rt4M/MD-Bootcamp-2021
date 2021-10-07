/* 
C to F: (temp_C × 9/5) + 32 = temp_F
example: (0 × 9/5) + 32 = 32

F to C: (temp_F − 32) × 5/9 = temp_C


5F => -15C
14F => -10C
23F => -5C

DONE: If we have time: 3rd function that takes value and which conversion

Minimum Temperature:
-273.15C
-459.67F

Check if input is a number
*/ 

export const cToF = (tempInC) => {
    let result;

    if (typeof tempInC === "number") {
        result = (tempInC * (9/5)) + 32;
    } else if (tempInC < -273.15) {
        // throw error
        throw new Error("Temperature too low");
    } else {
        result = false;
    }
    
    return result;
}

export const fToC = (tempInF) => {
    let result; 
    
    if (typeof tempInF === "number") {
        result = (tempInF - 32) * (5/9);
    } else {
        result = false;
    }
    
    return result;
}

// convertTemp(currentTemp, desiredUnits)
// convertTemp(0, F) => 32F

export const convert = (currentTemp, desiredUnits) => {
    let convertedTemp;
    if (desiredUnits == "F") {
        convertedTemp = cToF(currentTemp);
    } else if (desiredUnits == "C") {
        convertedTemp = fToC(currentTemp);
    }
    
    return convertedTemp;
}