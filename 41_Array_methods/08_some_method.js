// some method

// kya ek bhi number esa hai jo even hai
// return true

// const numbers = [3, 5, 8, 9];
// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);

//
const userCart = [
  { productId: 1, produtName: "Mobile", price: 12000 },
  { productId: 2, produtName: "TV", price: 15000 },
  { productId: 3, produtName: "Laptop", price: 2500 },
  { productId: 4, produtName: "Refrigerator", price: 50000 },
];

// check product price > 50000
const ans = userCart.some((cartItem) => cartItem.price > 50000);
console.log(ans);
