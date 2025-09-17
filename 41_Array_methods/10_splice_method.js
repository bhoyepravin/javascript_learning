// splice method

// start ,delete, insert

const myArray = ["item1", "item2", "item3"];

// delete
// myArray.splice(1, 1); // start with 1  delete 1 item
// console.log(myArray);
// const deletedItem = myArray.splice(1, 2);
// console.log("deleted item", deletedItem);

// insert item
// myArray.splice(1, 0, "inserted item");
// console.log(myArray);

// Insert & delete both
// myArray.splice(1, 2, "insrted item1", "insterted item2");
// console.log(myArray);

const deleteItem = myArray.splice(1, 2, "Insrted item");
console.log("deleted item", deleteItem);
console.log(myArray);
