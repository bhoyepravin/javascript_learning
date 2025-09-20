// new keyword
function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUser("pravin", 8);
//console.log(user1);

//new keyword use
// 1. empty object this = {}
// 2. return this
//

user1.about();
