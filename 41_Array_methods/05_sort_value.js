// sorting method

// sort
// 5,9,1200,400, 3000
// 5,9,400,1200,3000  (expected)

// const numbers = [5, 9, 1200, 410, 3000];
// console.log(numbers);

// ["5","9","1200","410","3000"]
// [53,57,49,52,51]   Ascii value

// const userNames = ["harshit", "abcd", "mohit", "nitish"];
// userNames.sort();
// console.log(userNames);

// const numbers = [5, 9, 1200, 410, 3000];
// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(numbers);

const numbers = [5, 9, 1200, 410, 3000];
numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers);

// 1200, 410
// a-b ---> 790
// a-b ---> positive (greater than 0) ---> b,a
// 410, 1200

// a-b ---> negative ----> a,b
// 5,9 ----> -4

// realistic example
// price lowToHigh HighTolow

// const products = [
//   { productId: 1, productName: "Mobile1", price: 300 },
//   { productId: 2, productName: "Mobile2", price: 3000 },
//   { productId: 3, productName: "Mobile3", price: 200 },
//   { productId: 4, productName: "Mobile4", price: 8000 },
//   { productId: 5, productName: "Mobile5", price: 100 },
//   { productId: 6, productName: "Mobile6", price: 500 },
// ];

// // lowToHigh
// products.sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(products);

// lowToHigh
// const products = [
//   { productId: 1, productName: "Mobile1", price: 300 },
//   { productId: 2, productName: "Mobile2", price: 3000 },
//   { productId: 3, productName: "Mobile3", price: 200 },
//   { productId: 4, productName: "Mobile4", price: 8000 },
//   { productId: 5, productName: "Mobile5", price: 100 },
//   { productId: 6, productName: "Mobile6", price: 500 },
// ];

// // lowToHigh
// const lowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(lowToHigh);

// HighToLow
const products = [
  { productId: 1, productName: "Mobile1", price: 300 },
  { productId: 2, productName: "Mobile2", price: 3000 },
  { productId: 3, productName: "Mobile3", price: 200 },
  { productId: 4, productName: "Mobile4", price: 8000 },
  { productId: 5, productName: "Mobile5", price: 100 },
  { productId: 6, productName: "Mobile6", price: 500 },
];

// lowToHigh
const LowToHigh = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(LowToHigh);
