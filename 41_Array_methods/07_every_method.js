// every method

// const numbers = [2, 4, 6, 9, 10];

// const ans = numbers.every((number) => number % 2 === 0);
// console.log(ans);

// callback function  ---> true / false (boolean)

// every method ---> true / false (boolean)
// every method check all element if condition is satisfied return TRUE
// if one condition is not satisfied print false.

const userCart = [
  { productId: 1, produtName: "Mobile", price: 12000 },
  { productId: 2, produtName: "TV", price: 15000 },
  { productId: 3, produtName: "Laptop", price: 2500 },
];

// check every product < 30000

const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);
