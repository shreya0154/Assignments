// Q1: Filter states that don't start with vowels
console.log("Q1:");
let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Tamil Nadu", "Kerala", "Rajasthan"];
let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates); 

// Q2: Reverse words in a sentence
console.log("\nQ2:");
let str = 'I love my India';
let reversedSentence = str.split(' ').reverse().join(' ');
console.log(reversedSentence);

// Q3: Replace 'INDIA' with 'INDONESIA' using splice
console.log("\nQ3:");
let arr = 'INDIA'.split('');
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log(arr.join(''));

// Q4: Count vowels and consonants
console.log("\nQ4:");
let inputStr = "JavaScript is awesome and powerful!";
let vowels = inputStr.match(/[aeiou]/gi)?.length || 0;
let consonants = inputStr.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);

// Q5: Replace wrong word with correct one
console.log("\nQ5:");
function correctfn(sentence, wrong, correct) {
  return sentence.replace(new RegExp(wrong, 'g'), correct);
}
console.log(correctfn("I luv India", "luv", "love"));

// Q6: Filter numbers > 5
console.log("\nQ6:");
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let greaterThanFive = inputArr.filter(num => num > 5);
console.log(greaterThanFive);

// Q7: Students average score
console.log("\nQ7:");
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

let averages = students.map(student => ({
  name: student.name,
  average: student.scores.reduce((a, b) => a + b, 0) / student.scores.length
}));
console.log(averages);

// Q8: Repeated digit sum
console.log("\nQ8:");
function digitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a + +b, 0);
  }
  return num;
}
console.log(digitSum(456));

// Q9: Count number of words
console.log("\nQ9:");
function wordCount(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log(wordCount("This is a test paragraph with some words."));

// Q10: Reverse string
console.log("\nQ10:");
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));

// Q11: Student average from subjects
console.log("\nQ11:");
let studentsData = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

let output = {};
for (let student in studentsData) {
  let scores = Object.values(studentsData[student]);
  let average = scores.reduce((a, b) => a + b, 0) / scores.length;
  output[student] = { average: Math.floor(average) };
}
console.log(output);
