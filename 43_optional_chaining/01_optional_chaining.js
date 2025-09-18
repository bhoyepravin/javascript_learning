// optional chaining

// const user = {
//   firstName: "pravin",
//   address: { houseNumber: "1234" },
// };

// console.log(user.firstName);
// console.log(user.address.houseNumber);

const user = {
  firstName: "pravin",
  //address: { houseNumber: "1234" },
};

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
