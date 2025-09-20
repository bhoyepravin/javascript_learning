// proto

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = {
//   key3: "value3",
// };

// console.log(obj2.key1); // undefined

// // agar obj2 ke pass key1 na mile to khud jaye key1 hai kya agar waha key1 mili to print kare
// // how can we make these

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = Object.create(obj1);
// //console.log(obj2); // is empty {}
// // there is one more way to create empty object
// obj2.key3 = "value3";
// //obj2.key2 = "unique";
// console.log(obj2.key2);

// // this is happening

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);
//console.log(obj2); // is empty {}
// there is one more way to create empty object
obj2.key3 = "value3";
//obj2.key2 = "unique";
console.log(obj2);
