const arr = [1, 5, 10, "ola", true];

let sohNumeros = arr.some(function (el) {
  return typeof el === "number";
});

const arr1 = arr.filter(function (el, i, _arr) {
  console.log(el);
});
const arr2 = arr.filter(function (el, i, _arr) {
  console.log(el);
});
console.log(arr);
console.log(arr1);
console.log(arr2);
