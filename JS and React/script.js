// const arr = ["apple", "kiwi", "kela", "banana"];
// arr.forEach((ele, index) => {
//   console.log(ele, "with index", index);
// });

// console.log("---------------------------------");

// const arr2 = arr.map((item, index) => {
//   return item + " fruit";
// });

// console.log(arr2);

// console.log("---------------------------------");

// const person = [
//   { name: "sai", number: 1 },
//   { name: "alex", number: 2 },
// ];

// const filterItem = person.filter((item, index) => {
//   return item.number <= 2;
// });

// console.log(filterItem);
// console.log("---------------------------------");

// // "every" method checks for every item of array satisfies particular condition or not
// const boolValue = person.every((item, index) => {
//   return item.number < 2;
// });
// console.log(boolValue);

// console.log("----------------------------------");

// const numbers = [12, 2, 43, 42, 5];
// numbers.sort();
// console.log(numbers); // Sorts the first number of every number;

// arr.sort();
// console.log(arr); // Sorts accrodingly

// numbers.sort((a, b) => a - b);
// console.log(numbers);

// numbers.reverse();

// console.log("Reverse", numbers);

// let initialValue = 1;
// const result = numbers.reduce((total, currentValue, currentIndex) => {
//   return (total += currentValue);
// }, initialValue);

// console.log(result);

// // some => if any item of array is fulfilling the condition or not
// console.log(numbers);

// // find => It helps to find the first single data from array ;

// const res = numbers.find((item) => {
//   return item == 12;
// });
// console.log(res);

const students = [
  { name: "Chirag", reg_id: 12019423 },
  { name: "manav", reg_id: 12006715 },
  { name: "uphar", reg_id: 12006715 },
];

const res1 = students.find((item) => {
  return item.reg_id == 12006715;
});

console.log(res1);
const student1 = { name: "Chirag", reg_id: 12019423 };
const key = Object.keys(student1);
const value = Object.values(student1);
const entries = Object.entries(student1); // Array of [keys] & [values]
console.log(key, value, entries);

// Destructuring of Arrays and Objects

const [x, ...y] = ["apples", "banana", "candy"];
console.log(x, y);

const { Name, Age } = { Name: "Chirag", Age: 12 };
console.log(Name, Age);
