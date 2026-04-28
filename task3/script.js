//Task 1
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

studentForm("Naveen", 22, "MERN");

//Task 2
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Substraction:", a - b);
    console.log("Multiplication:", a * b);
}

calc(20, 10);

//Task 3
function greeting(name) {
    console.log("Hello " + name);
}

greeting("Kamal");
greeting("Praveen");
greeting("Sai");


//Level 2- Return & Scope
//Task 4
function square(num) {
    return num * num;
}

console.log(square(5));

//Task 5
function scopeCheck() {
    let secret = "javascript";
    console.log(secret);
}

scopeCheck();

// console.log(secret);
// Error: secret is not defined


//Level 3-Spread / Rest
//Task 6
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let toys = [...boys, ...girls];

console.log(toys);

//Task 7
function sumAll(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }
    console.log(total);
}

sumAll(10, 20, 30, 40);


//Level 4- Destructing
//Task 8
let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

//Task 9
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};

let { name, role, salary } = emp;

console.log(name, role);


//Level 5- Real-Time Logic
//Task 10
function* offGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}

let offer = offGenerator();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

let result = offer.next();

if (result.done) {
    console.log("No more offers");
}

//Level 6- Advanced
//Task 11
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));

// Task 12
function marks(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    let average = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", average);
}

marks(80, 90, 70, 60);


//Challenge Task
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");




