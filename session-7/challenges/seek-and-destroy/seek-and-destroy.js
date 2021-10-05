const seekAndDestroy = (array, ...toBeRemoved) => {
    tempArray = [...array];
    for (i = 0; i < tempArray.length; i++) {
        if (tempArray.indexOf(toBeRemoved[i]) > 0) {
            console.log(tempArray.indexOf(toBeRemoved[i]));
            tempArray.splice(tempArray.indexOf(toBeRemoved[i]), 1)
            // elements that we want to remove that are present in the array
        }
    }
    return tempArray;
}

console.log(seekAndDestroy([1, 2, 'string', 3, 4, 'test'], 'test', 'abc', 2, 4, 5, 7));
