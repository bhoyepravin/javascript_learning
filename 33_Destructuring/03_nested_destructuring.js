// nested destructuring

const users = [
  { userId: 1, firstname: "pravin", gender: "male" },
  { userId: 2, firstname: "rahul", gender: "male" },
  { userId: 3, firstname: "raj", gender: "male" },
];

// const [user1, user2, user3] = users;
// console.log(user1);

// const [{ firstname }, , { gender }] = users;
// console.log(firstname);
// console.log(gender);

// if changes variable name

const [{ firstname: userfirstname, userId }, , { gender: user3gender }] = users;
console.log(userfirstname);
//console.log(userId);
console.log(user3gender);
