const fillOfArray = (arraySize, value) => {
  //   throw new Error("Put your solution here");
  //   const arr = new Array(arraySize);
  //   for (let i = 0; i < arraySize; i++) {
  //     arr.push(value);
  //   }
  //   console.log(arr);
  //   arr.fill(value);
  //   return arr;
};
// console.log(fillOfArray(3, "a"));

// const reverseArray = (arr) => {
//   arr = arr.reverse();
//   return arr;
// };

// console.log(reverseArray([1, 2, 3]));

const compact = (arr) => {
  //   const result = [];
  //   arr.forEach((item) => {
  //     if (typeof item === "number") {
  //       result.push(item);
  //     }
  //   });

  return arr.filter((item) => item);
  //   return result;
};

const data = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data));

const numbers = [1, 2, 3, 4, 5, 6];
const num = numbers.filter((item) => item % 2 == 0);
console.log(num);

// CallBack function
// function myDisplay(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallBack) {
//   let sum = num1 + num2;
//   myCallBack(sum);
// }

// myCalculator(32, 21, myDisplay);

// Promise: A Promise is a JavaScript object that links producing code and consuming code

let myPromise = new Promise(function (resolve, reject) {
  // "Creation of Promise" (May take some time)
  let sum = 2 + 4;

  resolve(sum); // when successful
  reject(); // when error
});

// "Consume of Promise" (Must wait for a fulfilled Promise)
myPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

// let myPromise1 = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("I love You !!");
//   }, 3000);
// });

// myPromise1.then(function (value) {
//   console.log("Promise Succeed");
//   document.getElementById("demo").innerHTML = value;
// });

// let myPromise2 = new Promise(function (myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "mycar.htm");
//   req.onload = function () {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise2.then(
//   function (value) {
//     document.getElementById("demo").innerHTML = value;
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// let myPromise3 = new Promise(function (resolve, reject) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "https://dog.ceo/api/breeds/image/random");
//   req.onload = function () {
//     if (req.status == 200) {
//       resolve(req.response);
//     } else {
//       reject();
//     }
//   };

//   req.send();
// });

// myPromise3.then((value) => {
//   document.getElementById("img").setAttribute("src", JSON.parse(value).message);
// });

//"async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */

// const [a, b] = array;
// const obj = {};
// obj[a[0]] = a[1];
// obj[b[0]] = b[1];
// return obj;

const fromPairs = (array) =>
  array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }
    return acc;
  }, {});

const arr = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(arr));

/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
const without = (array, ...args) => {
  let filteredArray = [...array];
  for (let i = 0; i < array.length; i++) {
    filteredArray = filteredArray.filter((el) => el != args[i]);
  }
  return filteredArray;
};

const array = [1, 2, 3, 1, 2];
console.log(without(array, 1, 2));

/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
const unique = (array) => {
  // const arr = Array.from(new Set(array));
  // return arr;

  const arr = array.filter((element, id) => array.indexOf(element) == id);
  return arr;
};

const data1 = [1, 2, 3, 1, 2];
console.log(unique(data1));

/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */
const isEqual = (firstArray, secondArray) => {
  // if (firstArray.length !== secondArray.length) {
  //   return false;
  // }
  // for (let i = 0; i < firstArray.length; i++) {
  //   if (firstArray[i] !== secondArray[i]) {
  //     return false;
  //   }
  // }
  // return true;

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const compared = firstArray.map((el, id) => secondArray[id] === el);

  return !compared.includes(false);
};

const a1 = [1, 2, 3];
const b1 = [1, 2, 3];
console.log(isEqual(a1, b1));

/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */

/*
[3,4,[5]]         [1,2,3,4,5]
[5]

*/
const flatten = (array) =>
  array.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );

const ar = [1, 2, [3, 4, [5]]];
console.log("flatten", flatten(ar));

/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */

const chunk = (array, size) => {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
};
console.log("chunk", chunk([1, 2, 3, 4, 5], 2));

/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */

const intersection = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};
console.log(intersection([1, 2], [2, 3]));

/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */

const isPlainObject = (element) => {
  return typeof element === "object"
    ? Array.isArray(element)
      ? false
      : true
    : true;
};
console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject([1, 2, 3]));

/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */
const makePairs = (object) => {};

console.log(makePairs({ a: 1, b: 2 }));

let prom = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Hello World");
  }, 3000);
});

prom.then((value) => {
  console.log("Promise Resolved");
  console.log(value);
});

// async makes the function return of the promise;

async function myFunction() {
  return "Hellooooo World";
}

myFunction().then((value) => {
  console.log(value);
});
