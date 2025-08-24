// objects inside array
// very useful in real world application

const users = [
  { userId: 1, firstname: "pravin", gender: "male" },
  { userId: 2, firstname: "rahul", gender: "male" },
  { userId: 3, firstname: "raj", gender: "male" },
];

//console.log(users);

// using for loop
for (let user of users) {
  console.log(user.firstname);
}
