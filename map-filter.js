// MAP
const numbers = [10, 11, 12, 13, 14];

// three map function parameter
// const square = numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// using map with the other function
// function squareIt(element){
//     return element * element;
// }
// const square = numbers.map(squareIt(element))

// using map with the anonymous function
// const square = numbers.map(function(element) {
//     return element * element;
// })

// using map with the ES6 function 
const square = numbers.map(x => x * x);
console.log(square);

// FILTER 
const bigger = numbers.filter(x => x>5);
console.log(bigger);

// FIND
const isThere = numbers.find(x => x === 13);
console.log(isThere);