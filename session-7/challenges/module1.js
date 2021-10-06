import reverseArr, {sumAllNumbers} from "./module2.js"; // browser won't figure out the extension
// ^ reverse array is a default function
import {existsInArr} from "./module2.js"; // browser won't figure out the extension
// * for all functions, but best practice to import individual ones 
// you can also add import * as DescriptiveName from "directory.js"

const arr = [1, 2, 3, "hello"];

console.log(sumAllNumbers(arr));

console.log(existsInArr(arr, 1));

console.log(reverseArr(arr));