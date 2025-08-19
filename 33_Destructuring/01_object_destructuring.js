// object destructuring

// const band = {
//   bandName: "led zeppelin",
//   famousSong: "stairway to heaven",
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

const band = {
  bandName: "led zeppelin",
  famousSong: "strairway to heaven",
  year: 1999,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
// bandName = "queen";
// console.log(bandName);
console.log(bandName);
console.log(restProps);
