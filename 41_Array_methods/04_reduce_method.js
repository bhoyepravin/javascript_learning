// reduce method

const numbers = [1, 2, 3, 4, 5, 10];

// aim : sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

// how its works

// accumulator,    currentvalue    return
//      1               2            3
//      3               3            6
//      6               4            10
//      10              5            15
//      15              10          25

// real-life example
// add to cart

const userCart = [
  { productId: 1, productName: "mobile", price: 10000 },
  { productId: 2, productName: "laptop", price: 30000 },
  { productId: 3, productName: "TV", price: 20000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);

// totol price      currentvalue     return
// 0                {}                  10000
//10000             30000               40000
//40000             20000               60000
