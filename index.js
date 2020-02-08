// https://www.geeksforgeeks.org/javascript-spread-operator/
// https://www.geeksforgeeks.org/javascript-rest-operator/

// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// ...x makes x to be an array
let printRestParameters = (...x) => {
  console.log(x)
  return x;
};

let printSpreadParameter = (x) => {
  console.log(...x);
  return [...x];
}

// function* fibs() {
//   var a = 0;
//   var b = 1;
//   while (true) {
//     console.log(a);
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// var [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(sixth);

export {
  printRestParameters,
  printSpreadParameter
}