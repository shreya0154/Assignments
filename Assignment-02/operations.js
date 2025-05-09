
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// 2. Calculator function
function calculate(num1, num2, operation) {
  switch (operation.toLowerCase()) {
    case "add":
    case "+":
      return num1 + num2;
    case "subtract":
    case "-":
      return num1 - num2;
    case "multiply":
    case "*":
      return num1 * num2;
    case "divide":
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
}

// 3. Tax calculation function
function findTax(salary) {
  let taxRate;
  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return "Invalid salary";
  }
  return salary * taxRate;
}

// 4. Sum of digit products function
function sumOfDigitProducts(n1, n2) {
  let str1 = n1.toString().split('').reverse();
  let str2 = n2.toString().split('').reverse();
  let length = Math.max(str1.length, str2.length);
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let digit1 = parseInt(str1[i] || 0);
    let digit2 = parseInt(str2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}


rl.question("\nCalculator\nEnter the first number: ", (first) => {
  rl.question("Enter the second number: ", (second) => {
    rl.question("Enter operation (add, subtract, multiply, divide or +, -, *, /): ", (op) => {
      const num1 = parseFloat(first);
      const num2 = parseFloat(second);
      const result = calculate(num1, num2, op);
      console.log(`Result: ${result}`);

      
      rl.question("\nTax Calculator\nEnter your salary: ", (salaryInput) => {
        const salary = parseFloat(salaryInput);
        const tax = findTax(salary);
        console.log(`Tax on ₹${salary} = ₹${tax}`);

        
        rl.question("\nSum of Digit Products\nEnter first number: ", (n1) => {
          rl.question("Enter second number: ", (n2) => {
            const result = sumOfDigitProducts(parseInt(n1), parseInt(n2));
            console.log(`Sum of Digit Products = ${result}`);
            rl.close();
          });
        });
      });
    });
  });
});
