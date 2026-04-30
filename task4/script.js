// Task1: Array Basics
let arr1 = [10, 20, 30, 40, 50];

console.log("First:", arr1[0]);
console.log("Last:", arr1[arr1.length - 1]);
console.log("Length:", arr1.length);

//Task2: Push & Pop
let arr2 = [1, 2, 3];

arr2.push(4, 5);
arr2.pop();

console.log("Final:", arr2);

//Task3: Includes Check
let arr3 = ["html", "css", "javascript", "react"];

console.log(arr3.includes("javascript"));

//task4: Filter Salaries
let emp1 = [
    { name: "A", salary: 10000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 30000 }
];

let highSalary = emp1.filter(e => e.salary > 20000);
console.log(highSalary);

//Task5: Map Names
let names = emp1.map(e => e.name);
console.log(names);

//Task6: Reduce Sum
let totalSalary = emp1.reduce((sum, e) => sum + e.salary, 0);
console.log(totalSalary);

//Task7: Remove Duplicates
let arr4 = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr4)];
console.log(unique);

//Task8: Find Largest Number
let arr5 = [10, 200, 5, 90];

let max = Math.max(...arr5);
console.log(max);

//Task9: Reverse String Without reverse()
let str1 = "hello";

let reversed = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}
console.log(reversed);

//Task10: Group by Salary
let emp2 = [
    { name: "A", salary: 10000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 10000 }
];

let grouped = {};

emp2.forEach(e => {
    if (!grouped[e.salary]) {
        grouped[e.salary] = [];
    }
    grouped[e.salary].push(e.name);
});

console.log(grouped);

//Task11: Flatten Array (without flat)
let arr6 = [1, [2, [3, [4]]]];

function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flatten(arr6));

//Task12: Custom Sort (Descending)
let arr7 = [5, 2, 9, 1];

arr7.sort((a, b) => b - a);
console.log(arr7);

//Task 13: Second Largest
let arr8 = [10, 50, 20, 40];

let sorted = [...new Set(arr8)].sort((a, b) => b - a);
console.log(sorted[1]);

//Task14: Count Characters
let str2 = "aabbccdde";

let count = {};

for (let ch of str2) {
    count[ch] = (count[ch] || 0) + 1;
}

console.log(count);





