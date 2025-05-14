// 1. Scope of let, const, and var
function scopeExample() {
    if (true) {
      var x = 10;       // Function scoped
      let y = 20;       // Block scoped
      const z = 30;     // Block scoped
    }
  
    console.log(x); //  Works (function scoped)
    // console.log(y); //  Error: y is not defined
    // console.log(z); //  Error: z is not defined
}
scopeExample();
console.log();

/* 
Explanation of Ques - 01:
    var: scoped to the entire function
    let & const: scoped to the block {} in which they are declared
*/





// 2. Return the second fruit from an array
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Pineapple"];

function getSecondFruit(arr) {
  return arr[1];
}

console.log(getSecondFruit(fruits));
console.log();





// 3. Push and Pop on an Array
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}

const testArr = [1, 2, 3];
console.log(modifyArray(testArr)); 
console.log();





// 4. Square each number using map()
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log(squareNumbers(numbers));
console.log();






// 5. Filter out even numbers using filter()
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));
console.log();




// 6. Log a greeting using object properties
const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer"
};

function greetPerson(p) {
console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}.`);
console.log();
}

greetPerson(person);
  




// 7. Calculate area of a rectangle from object
function getArea(rectangle) {
    return rectangle.width * rectangle.height;
}

console.log(getArea({ width: 10, height: 5 }));
console.log();




// 8. Return Keys of an object using Object.keys()
const sampleObject = {
    name: "John",
    age: 30,
    country: "India"
};

function getObjectKeys(obj) {
return Object.keys(obj);
}

console.log(getObjectKeys(sampleObject));
console.log();





// 9. Merge two objects using Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

function mergeObjects(o1, o2) {
  return Object.assign({}, o1, o2);
}

console.log(mergeObjects(obj1, obj2));
console.log();





// 10. Use reduce() to sum all numbers
const numbersArr = [10, 20, 30, 40];

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray(numbersArr)); 
console.log();

