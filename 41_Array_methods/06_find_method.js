// find method

// const myArray = ["pravin", "raj", "ok", "Demo"];

// function isLength(string) {
//   return string.length === 6;
// }

// const ans = myArray.find(isLength);
// console.log(ans);

// using arrow function
// const myArray = ["pravin", "raj", "ok", "Demo"];

// const ans = myArray.find((String) => String.length === 4);
// console.log(ans);

// realistic eg.

const users = [
  { userId: 1, userName: "pravin" },
  { userId: 2, userName: "bharat" },
  { userId: 3, userName: "rakesh" },
  { userId: 4, userName: "raj" },
];

// find a user there user id is 3

const myUser = users.find((user) => {
  return user.userId === 3;
});

console.log(myUser);
