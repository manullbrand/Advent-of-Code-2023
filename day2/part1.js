let inputPuzzle = `Game 1: 1 blue, 8 green; 14 green, 15 blue; 3 green, 9 blue; 8 green, 8 blue, 1 red; 1 red, 9 green, 10 blue
Game 2: 3 blue, 1 green, 2 red; 2 red, 2 green, 5 blue; 3 green, 10 blue; 8 red, 1 blue; 3 red, 1 green, 5 blue; 1 blue, 5 red, 3 green
Game 3: 4 green, 1 blue; 6 blue, 5 green, 1 red; 11 green, 10 blue
Game 4: 12 blue, 12 green, 3 red; 15 blue, 1 green, 10 red; 8 blue, 3 red, 2 green; 14 red, 8 blue
Game 5: 7 blue, 8 red, 5 green; 15 blue, 16 red, 14 green; 3 blue, 14 red, 10 green
Game 6: 4 blue, 13 red; 1 green, 13 blue, 11 red; 4 red, 19 blue; 18 blue, 10 red, 1 green
Game 7: 8 green, 3 blue, 3 red; 2 red, 7 green, 10 blue; 6 green, 11 red, 3 blue
Game 8: 10 red, 6 green, 1 blue; 15 green, 10 red, 3 blue; 8 red, 10 green, 5 blue
Game 9: 2 green, 8 blue, 1 red; 6 blue, 10 red; 13 blue, 12 red, 7 green
Game 10: 2 blue, 8 red, 10 green; 1 green, 2 blue; 1 red, 1 green; 7 red, 2 blue, 1 green
Game 11: 8 green, 1 blue; 6 green; 2 green, 1 blue; 2 blue, 11 green; 1 red, 12 green
Game 12: 3 red, 2 green, 15 blue; 1 blue, 1 green, 4 red; 1 green, 12 blue, 3 red; 1 red, 10 blue; 3 red, 2 green, 14 blue; 3 red, 13 blue
Game 13: 7 blue, 5 red; 7 red, 3 green, 9 blue; 9 green, 7 blue, 7 red; 6 blue, 8 red; 11 red; 3 green, 7 blue, 8 red
Game 14: 4 blue, 6 green, 7 red; 8 red, 4 green, 11 blue; 3 green, 9 red, 13 blue
Game 15: 3 green, 1 blue, 5 red; 2 red; 1 red, 4 green
Game 16: 1 green, 7 blue; 3 red, 5 blue; 1 green, 5 blue; 5 blue, 1 green; 1 green, 1 red, 13 blue
Game 17: 4 blue, 2 red, 4 green; 1 blue, 7 red, 4 green; 4 red, 4 green, 10 blue; 1 blue, 4 red, 14 green
Game 18: 7 blue, 5 green; 4 blue, 3 green; 1 red, 6 green, 7 blue
Game 19: 10 blue, 3 red, 6 green; 3 blue, 4 red, 17 green; 19 green, 3 red, 3 blue; 19 green, 3 blue; 4 red, 7 green, 7 blue; 10 blue, 13 green, 1 red
Game 20: 3 blue, 6 red, 1 green; 6 green, 7 red, 18 blue; 1 green, 5 red, 14 blue; 1 green, 12 blue, 8 red
Game 21: 16 blue, 7 green, 13 red; 11 red, 7 blue, 5 green; 4 green, 3 blue
Game 22: 14 blue, 6 red, 1 green; 9 red, 1 green, 11 blue; 3 red, 13 blue; 6 red, 10 blue; 13 red, 1 green, 2 blue
Game 23: 17 red, 1 blue, 13 green; 19 green, 1 blue, 3 red; 7 red, 19 green; 16 red, 10 green; 16 red, 12 green, 1 blue
Game 24: 1 green, 2 blue; 10 green, 4 blue; 8 blue, 11 green, 14 red
Game 25: 9 blue, 10 red; 2 red, 7 green, 5 blue; 4 green, 10 red, 5 blue; 6 red, 6 blue; 12 blue, 4 green
Game 26: 9 red, 2 blue, 5 green; 3 red, 4 green, 1 blue; 5 red, 2 blue, 13 green
Game 27: 1 green, 14 blue, 2 red; 9 red, 7 blue, 7 green; 9 blue, 10 red, 7 green; 1 blue, 5 red, 3 green; 1 blue, 4 red; 9 red, 1 green
Game 28: 11 red, 13 blue, 12 green; 8 blue, 4 green, 6 red; 2 blue, 9 green
Game 29: 5 green, 16 red, 1 blue; 6 blue, 3 green, 2 red; 1 green, 7 blue, 9 red
Game 30: 1 green, 2 blue, 2 red; 7 blue, 5 red; 2 red, 1 blue; 6 red, 1 green, 6 blue
Game 31: 5 green, 7 blue, 14 red; 19 red, 9 green, 9 blue; 4 green, 8 red, 12 blue; 20 red, 12 green; 10 red, 3 green, 6 blue; 5 blue, 17 red, 8 green
Game 32: 6 blue, 6 red, 8 green; 6 blue, 3 green, 7 red; 4 red, 6 green, 4 blue; 5 green, 3 blue, 5 red; 8 blue, 6 red, 5 green
Game 33: 5 red, 15 green, 3 blue; 4 green, 8 red; 6 blue, 17 green, 2 red
Game 34: 12 blue, 1 green; 3 red, 14 blue, 1 green; 1 green, 16 blue, 3 red
Game 35: 2 red, 16 blue; 17 blue, 5 green; 10 blue, 3 green; 1 blue, 2 green; 4 blue, 4 green
Game 36: 7 blue, 8 red, 4 green; 3 red, 13 green, 14 blue; 17 green, 2 blue, 8 red; 2 red, 13 blue, 2 green; 12 blue, 1 red, 9 green; 12 green, 10 blue
Game 37: 5 green; 3 green, 14 red; 2 red, 1 blue; 11 green, 1 blue; 8 green, 18 red, 1 blue; 1 blue, 16 red
Game 38: 5 red; 9 green, 11 blue, 7 red; 2 blue, 2 green, 1 red; 3 blue, 7 red; 5 red, 8 blue
Game 39: 1 blue, 7 green, 6 red; 18 green, 2 red; 1 blue, 19 green, 6 red; 2 green, 3 blue, 9 red; 14 green, 4 red, 3 blue; 16 green, 4 red, 1 blue
Game 40: 14 red, 2 green, 2 blue; 2 blue, 2 red, 4 green; 8 red, 2 blue; 1 green, 17 red; 10 red; 2 green, 3 red
Game 41: 11 green, 1 red, 1 blue; 2 blue, 18 green, 3 red; 2 blue, 2 green, 8 red; 7 red, 1 blue, 17 green; 14 green, 2 blue; 2 blue, 14 red, 18 green
Game 42: 2 red, 3 green, 15 blue; 3 green, 18 blue; 9 blue, 2 red
Game 43: 4 green, 2 blue; 10 blue, 2 red, 14 green; 13 green, 1 red, 11 blue; 9 green, 10 blue; 14 green, 8 red, 8 blue
Game 44: 10 red; 3 red, 8 blue, 1 green; 10 red, 2 blue, 1 green; 5 green, 7 blue, 17 red; 3 green, 18 red, 6 blue; 3 green, 11 blue, 3 red
Game 45: 10 blue, 5 green; 14 blue, 5 green; 10 green, 14 blue, 1 red; 1 red, 5 green, 18 blue; 5 green, 5 blue, 1 red; 17 blue, 12 green, 1 red
Game 46: 2 blue, 2 green; 1 green, 1 blue; 2 blue, 3 green; 1 red; 2 green
Game 47: 6 blue, 1 red, 12 green; 2 red, 3 green, 4 blue; 1 blue, 13 green, 6 red; 12 green, 4 blue, 5 red
Game 48: 4 green, 5 red; 19 green, 1 blue, 11 red; 4 red, 8 green; 10 red, 1 blue, 16 green
Game 49: 12 red, 2 blue; 6 green; 1 green, 9 red
Game 50: 1 green, 1 blue, 17 red; 1 blue, 14 red, 1 green; 2 blue, 6 red
Game 51: 12 green, 9 blue, 1 red; 6 green, 2 blue, 1 red; 14 green, 5 blue; 1 green, 2 red, 12 blue; 4 green, 2 red, 8 blue; 1 green, 5 blue
Game 52: 1 green, 7 blue, 3 red; 6 blue, 5 red, 5 green; 7 green; 5 blue, 1 green, 6 red
Game 53: 3 blue, 1 red; 1 blue, 3 green; 2 green, 5 blue; 4 blue, 3 green; 1 green; 2 green, 5 blue, 1 red
Game 54: 13 blue, 3 red; 17 blue, 1 green, 8 red; 2 green, 2 red, 11 blue; 2 green, 1 red, 4 blue; 8 red
Game 55: 1 green; 3 blue, 5 red; 1 blue, 1 green, 4 red; 1 red, 10 blue; 4 red, 17 blue
Game 56: 4 blue, 12 green, 12 red; 6 green, 10 blue, 2 red; 8 green, 11 red, 3 blue; 6 green, 10 red, 10 blue; 7 red, 5 green
Game 57: 2 green, 8 blue, 3 red; 17 blue, 1 green, 9 red; 4 red, 7 blue
Game 58: 4 blue, 1 red; 2 blue, 1 green; 2 red, 5 green, 4 blue; 7 green, 5 blue, 2 red
Game 59: 4 green, 5 red; 4 green, 7 red, 1 blue; 15 red, 8 green
Game 60: 6 green, 3 red; 4 red, 6 green, 4 blue; 5 green, 4 blue, 1 red; 3 red, 4 blue, 2 green; 7 red, 3 blue; 1 green, 1 blue
Game 61: 7 red, 10 blue, 7 green; 11 blue, 9 green, 1 red; 11 red, 1 green, 3 blue; 3 green, 13 red, 2 blue; 7 green, 2 blue, 1 red
Game 62: 10 green, 9 red; 6 blue, 10 red, 11 green; 7 red, 2 blue, 2 green
Game 63: 10 green, 2 blue; 1 red; 9 green; 2 blue, 8 green; 1 blue, 1 green, 1 red
Game 64: 2 green; 8 red; 4 green, 5 red, 2 blue
Game 65: 2 red, 16 blue; 5 green, 11 blue, 3 red; 15 blue, 4 green, 3 red
Game 66: 2 green, 3 blue; 1 red, 3 blue; 1 green, 4 blue; 1 blue, 2 green, 1 red; 2 blue; 1 red, 3 green, 5 blue
Game 67: 2 blue, 11 red, 8 green; 13 blue, 19 red, 13 green; 3 red, 3 green, 3 blue; 2 red, 5 blue, 16 green; 13 red, 4 blue, 5 green
Game 68: 1 blue, 9 red, 7 green; 3 green, 9 red, 4 blue; 7 green, 5 blue; 3 green, 9 red, 3 blue; 5 red, 1 blue, 8 green; 8 green, 1 blue, 4 red
Game 69: 10 green, 1 red, 2 blue; 1 red, 11 green; 1 blue, 1 green; 8 green; 11 green, 1 red; 1 green, 3 blue
Game 70: 8 red, 15 blue, 18 green; 14 blue, 9 red, 8 green; 6 blue, 2 red, 2 green; 1 green, 4 blue, 9 red; 3 blue, 15 green, 10 red
Game 71: 10 red, 10 green, 6 blue; 3 green, 6 blue, 13 red; 7 green, 6 red, 12 blue
Game 72: 12 red, 5 blue; 13 red, 6 green, 11 blue; 11 green, 7 red, 11 blue
Game 73: 8 blue, 1 red, 3 green; 1 blue; 6 blue, 4 green
Game 74: 1 red, 3 blue, 8 green; 6 green, 3 blue, 1 red; 18 green, 1 red; 3 blue, 1 red, 14 green; 5 green, 1 blue; 3 blue, 1 green
Game 75: 4 blue, 1 red, 3 green; 6 blue; 11 green, 6 blue, 3 red; 10 green, 4 red; 2 blue, 2 red, 6 green
Game 76: 7 blue; 15 blue, 2 red, 1 green; 2 blue, 5 red; 2 red, 15 blue; 4 red, 15 blue; 9 blue, 5 red
Game 77: 12 blue, 8 green, 15 red; 12 blue, 19 red, 16 green; 6 blue, 5 green, 16 red
Game 78: 2 red, 7 blue, 14 green; 1 red, 3 green, 1 blue; 4 blue, 8 green, 10 red
Game 79: 3 red, 5 green; 2 blue, 1 red, 18 green; 4 red, 15 green, 2 blue; 18 green, 2 blue, 7 red; 7 green, 6 red
Game 80: 8 green, 5 red, 9 blue; 14 blue, 13 red, 6 green; 14 blue, 7 red, 4 green; 3 blue, 16 red, 4 green; 5 green, 13 blue, 2 red; 16 blue, 2 green, 5 red
Game 81: 10 green, 10 red, 4 blue; 13 red, 2 blue; 8 green, 10 red, 7 blue
Game 82: 1 blue, 4 red, 7 green; 3 green, 2 blue, 3 red; 1 blue, 3 red, 3 green; 6 red, 4 green, 5 blue; 3 blue, 6 green
Game 83: 3 red, 1 blue, 2 green; 6 blue, 2 green, 2 red; 6 green, 1 blue; 11 blue, 4 red, 10 green
Game 84: 9 red, 12 green, 1 blue; 7 red, 5 green, 3 blue; 3 green, 8 blue, 11 red; 1 red, 3 blue, 10 green
Game 85: 2 blue, 2 red; 3 blue, 3 red; 2 green, 2 red; 2 red, 4 green
Game 86: 2 green, 5 blue, 9 red; 4 red, 2 green, 5 blue; 6 red, 2 green, 6 blue; 4 red, 4 blue, 1 green
Game 87: 17 red, 3 blue, 2 green; 5 red, 1 green, 5 blue; 4 blue, 3 green, 7 red
Game 88: 7 green, 1 blue, 1 red; 1 blue, 1 red, 10 green; 1 blue, 2 green; 5 green; 7 green, 1 blue; 1 red, 3 green
Game 89: 6 red, 11 blue, 3 green; 3 blue, 4 green, 3 red; 4 blue, 17 red, 4 green; 17 blue, 3 green, 4 red; 3 red, 9 blue, 4 green; 6 red, 9 blue, 9 green
Game 90: 9 red, 4 green, 1 blue; 6 green, 5 red, 11 blue; 3 blue, 8 red
Game 91: 3 red, 7 blue, 1 green; 11 blue, 3 green, 4 red; 1 red, 8 blue, 3 green; 10 red, 4 blue, 3 green
Game 92: 2 blue, 1 red; 7 red, 1 blue; 4 green, 11 red, 5 blue
Game 93: 13 red, 11 green, 10 blue; 3 blue, 10 green; 3 blue, 7 red, 3 green
Game 94: 9 green, 8 blue, 4 red; 7 blue, 9 green, 5 red; 16 green, 5 red; 4 blue
Game 95: 9 green; 1 blue, 16 green; 2 green, 2 red; 1 green, 1 blue; 6 green; 7 green, 2 red
Game 96: 6 green, 8 red, 5 blue; 2 blue, 14 green, 17 red; 2 blue, 15 green, 16 red; 16 green, 1 red; 16 red, 2 green, 1 blue; 18 red, 13 green, 6 blue
Game 97: 9 green, 8 red, 11 blue; 11 green, 13 red, 4 blue; 7 blue, 1 green, 6 red; 1 blue, 12 red, 7 green
Game 98: 1 green, 12 blue, 4 red; 8 blue, 5 red, 1 green; 1 green, 8 blue, 7 red; 1 green, 5 red, 6 blue; 3 blue, 1 green, 1 red; 4 blue, 1 green, 4 red
Game 99: 1 blue, 2 green, 2 red; 2 red, 8 green; 14 green, 1 blue; 1 red, 2 green; 1 blue, 1 green, 2 red; 6 green, 2 red
Game 100: 6 green, 15 red, 12 blue; 9 red; 16 red; 17 red, 3 blue, 7 green`;

let puzzleList = inputPuzzle.replace(/\Game\s+\d{1,2}\:/g, "").split("\n");
console.log(puzzleList);

let subsetsGames = [];
for (index in puzzleList) {
  let newArray = puzzleList[index].split(";");

  subsetsGames.push(newArray);
}

console.log(subsetsGames);

let subsetsGamesArray = [];
for (index in subsetsGames) {
  let newArray = subsetsGames[index].map((str) => str.split(","));

  subsetsGamesArray.push(newArray);
}
//console.log(subsetsGamesArray);

//BLUES

// let testNumbers = [];
// const maxValue = 14;
// const regexNumber = /\b(\d+)\b/g;

// for (let i = 0; i < subsetsGamesArray.length; i++) {
//   let filteredSubarray = subsetsGamesArray[i].map(innerArray =>
//     innerArray.filter(str => {
//       const match = str.match(regexNumber);
//       if (match) {
//         const number = parseInt(match[0], 10);

//         return number < maxValue;
//       }
//       return false;
//     })
//   );

//   if (filteredSubarray.some(subarray => subarray.length > 0)) {
//     testNumbers.push(filteredSubarray);
//   }
// }

// console.log(testNumbers)

let testNumbers = [];
// const maxValue = 14;
const maxValueBlue = 14;
const maxValueGreen = 13;
const maxValueRed = 12;
const regexNumberBlue = /\b(\d+\sblue)\b/g;
const regexNumberGreen = /\b(\d+\sgreen)\b/g;
const regexNumberRed = /\b(\d+\sred)\b/g;

for (let i = 0; i < subsetsGamesArray.length; i++) {
  let filteredSubarray = subsetsGamesArray[i].map((innerArray) =>
    innerArray.filter((str) => {
      const matchBlue = str.match(regexNumberBlue);
      const matchGreen = str.match(regexNumberGreen);
      const matchRed = str.match(regexNumberRed);
      if (matchBlue) {
        const number = parseInt(matchBlue[0], 10);
        return number <= maxValueBlue;
        
      } if (matchGreen) {
        const number = parseInt(matchGreen[0], 10);
        return number <= maxValueGreen;
      }if (matchRed) {
        const number = parseInt(matchRed[0], 10);
        return number <= maxValueRed;
      }
      return false;
    })
  );

  if (filteredSubarray.some((subarray) => subarray.length > 0)) {
    testNumbers.push(filteredSubarray);
  }
}

console.log(testNumbers);

// let Blue = [];
// const regexBlue = /(\d{1,2}\sblue)/g;

// // Here, the map function retains the structure of the original array, not extracting it to the upper array.
// for (let i = 0; i < subsetsGamesArray.length; i++) {
//   let filteredSubarray = subsetsGamesArray[i].map(innerArray =>
//     innerArray.filter(str => str.match(regexBlue))
//   );

//   if (filteredSubarray.some(subarray => subarray.length > 0)) {
//     Blue.push(filteredSubarray);
//   }
// }
// console.log(Blue)

// let test = subsetsGames.filter(num => num.toString().match(/(\d{1,2}\sblue)/g))
// console.log(test)

//Tranforma os numeros de strings para numeros dentro da array
// let BluesNumbers = [];
// for (index in Blue) {
//   let newArray = Blue[index].map((item) => parseInt(item));
//   BluesNumbers.push(newArray);
// }
// console.log(BluesNumbers)

// let socorroBlues = [];
// for (index in BluesNumbers) {
//   let sumBlues = BluesNumbers[index].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   socorroBlues.push(sumBlues);
// }

// let finalBlueGameNumber = [];
// for (index in socorroBlues) {
//   if (socorroBlues[index] <= 14) {
//     finalBlueGameNumber.push(parseInt(index) + 1);
//   }
// }
// console.log(finalBlueGameNumber);

//GREENS
let Green = [];
const regexGreen = /(\d{1,2}\sgreen)/g;

for (let i = 0; i < subsetsGamesArray.length; i++) {
  let filteredSubarray = subsetsGamesArray[i].map((innerArray) =>
    innerArray.filter((str) => str.match(regexGreen))
  );

  if (filteredSubarray.some((subarray) => subarray.length > 0)) {
    Green.push(filteredSubarray);
  }
}
//console.log(Green)

//REDS
let Red = [];
const regexRed = /(\d{1,2}\sred)/g;

for (let i = 0; i < subsetsGamesArray.length; i++) {
  let filteredSubarray = subsetsGamesArray[i].map((innerArray) =>
    innerArray.filter((str) => str.match(regexRed))
  );

  if (filteredSubarray.some((subarray) => subarray.length > 0)) {
    Red.push(filteredSubarray);
  }
}
//console.log(Red)

// let test = subsetsGamesArray[0][2].filter((str) =>
//   str.toString().match(regexBlue)
// );

// function getSum() {
//   let newArray = []
//  if (blueNumber <= 14 & greenNumber <=13 & redNumber <= 12) {
//   newArray.push(index)
//  }
// }

// coloca todos os numeros + a palavra blue dentro de uma string
// let Blues = [];

// for (let index in subsetsGamesArray) {
//   let arrayOne = subsetsGamesArray[index];
//   for (indexTwo in arrayOne) {
//     let regex = arrayOne[indexTwo].map((str) => str.match(/(\d*\s+blue)/g));

//     if (regex[indexTwo] !== null) {
//       Blues.push(regex);
//     }
//   }
// }
// console.log(Blues);

// let BluesString = [];
// for (let index in Blues) {
//   let newRegex = Blues[index].toString().match(/\d{1,2}/g);

//   BluesString.push(newRegex);
// }
// //console.log(BluesString)

// //Tranforma os numeros de strings para numeros dentro da array
// let BluesNumbers = [];
// for (index in BluesString) {
//   let newArray = BluesString[index].map((item) => parseInt(item));
//   BluesNumbers.push(newArray);
// }
// //console.log(BluesNumbers)

// let socorroBlues = [];
// for (index in BluesNumbers) {
//   let sumBlues = BluesNumbers[index].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   socorroBlues.push(sumBlues);
// }

// let finalBlueGameNumber = [];
// for (index in socorroBlues) {
//   if (socorroBlues[index] <= 14) {
//     finalBlueGameNumber.push(parseInt(index) + 1);
//   }
// }
// console.log(finalBlueGameNumber);

// // GREENS
// let Greens = [];
// for (let greens in puzzleList) {
//   let regex = puzzleList[greens].match(/(\d*\s+green)/g);
//   Greens.push(regex);
// }

// let GreenString = [];
// for (let index in Greens) {
//   let newRegex = Greens[index].toString().match(/\d{1,2}/g);

//   GreenString.push(newRegex);
// }

// let GreenNumbers = [];
// for (index in GreenString) {
//   let newArray = GreenString[index].map((item) => parseInt(item));
//   GreenNumbers.push(newArray);
// }

// let socorroGreens = [];
// for (index in GreenNumbers) {
//   let sumGreens = GreenNumbers[index].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   socorroGreens.push(sumGreens);
// }

// let finalGreenGameNumber = [];
// for (index in socorroGreens) {
//   if (socorroGreens[index] <= 13) {
//     finalGreenGameNumber.push(parseInt(index) + 1);
//   }
// }
// console.log(finalGreenGameNumber);

// //REDS
// let Reds = [];
// for (let reds in puzzleList) {
//   let regex = puzzleList[reds].match(/(\d*\s+red)/g);

//   Reds.push(regex);
// }

// let RedString = [];
// for (let index in Reds) {
//   let newRegex = Blues[index].toString().match(/\d{1,2}/g);

//   RedString.push(newRegex);
// }

// let RedNumbers = [];
// for (index in RedString) {
//   let newArray = RedString[index].map((item) => parseInt(item));
//   RedNumbers.push(newArray);
// }

// let socorroRed = [];
// for (index in RedNumbers) {
//   let sumBlues = RedNumbers[index].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   socorroRed.push(sumBlues);
// }

// let finalRedGameNumber = [];
// for (index in socorroRed) {
//   if (socorroRed[index] <= 12) {
//     finalRedGameNumber.push(parseInt(index) + 1);
//   }
// }
// console.log(finalRedGameNumber);

// //RESULT
// let concatAllFinalGames = finalBlueGameNumber.concat(
//   finalGreenGameNumber,
//   finalRedGameNumber
// );
// console.log(concatAllFinalGames)

// function filterNumbersAppearingThreeTimes(arr) {
//   const numberCount = {};

//   // Count occurrences of each number in the array
//   arr.forEach(num => {
//     if (numberCount[num]) {
//       numberCount[num]++;
//     } else {
//       numberCount[num] = 1;
//     }
//   });

//   // Filter numbers that appear exactly three times
//   const numbersAppearingThreeTimes = Object.keys(numberCount).filter(
//     num => numberCount[num] === 3
//   );

//   return numbersAppearingThreeTimes.map(Number); // Convert back to numbers if needed
// }

// const finalResult = filterNumbersAppearingThreeTimes(concatAllFinalGames).reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(finalResult)

// // 538 tá errado (too low). fazer de novo.
