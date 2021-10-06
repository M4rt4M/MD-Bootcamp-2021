export const sumAllNumbers = (arr) => {
    let total = 0;

    arr.forEach((val) => {
        if (typeof val === "number") {
            total += val;
        }
    });
    return total;
};

export const existsInArr = (arr, val) => arr.filter((element) => element === val).length>0;

export default function reverseArr(arr) { return arr.reverse();}

// this export/import method will only work in browser, not in node.js