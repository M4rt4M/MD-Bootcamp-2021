const names = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey" ,
"Quit"];
/*const par = 0;
const strokes = 0;
let phrase = '';

if (strokes == 1) {
    phrase = names[0];
} else if (strokes <= par-2) {
    phrase = names[1];
} else if (strokes == par - 1) {
    phrase = names[2];
} else if (strokes == par) {
    phrase = names[3];
} else if (strokes == par + 1) {
    phrase = names[4];
} else if (strokes == par + 2) {
    phrase = names[5];
} else if (strokes >= par + 3) {
    phrase = names[6];
}

console.log(phrase); */

const golf = (par, strokes) => {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par-2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    };
  };

  console.log(golf(5, 2));

