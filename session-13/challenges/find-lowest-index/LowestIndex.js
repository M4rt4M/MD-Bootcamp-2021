/* Return the index of the lowest value in an array
The input array will have at least one element in it. */

export const lowestIndex = array => array.indexOf(Math.min(...array))