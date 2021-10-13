/* Several people are standing in a row divided into two teams.
The first person goes into team 1, the second into team 2, the third into team 
1 and so on.
Challenge: 
Given an array of positive numbers (the weights of the people), 
return a new array/tuple of two numbers, where the first one is the total 
weight of team 1 and the second one is the total weight of team 2.

Array sizes provided must be at least 1 */

export const rowWeights = (array = [0, 0]) => {

    let result = [];
    let team1 = [];
    let team2 = [];

    if (array.length==2) {
        result = array;
    } else {
        for (let i=0; i < array.length; i++) {
            if (i%2==0) {
                team1.push(array[i])
            } else {
                team2.push(array[i])
            }
        }
        result.push(team1.reduce((a, b) => a + b, 0))
        // here I am adding all values from team1 array, and pushingthis sum to result array
        result.push(team2.reduce((a, b) => a + b, 0))
    }
    
    return result;
}