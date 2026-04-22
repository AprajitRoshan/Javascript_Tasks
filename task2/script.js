// Students Data
let students = [
    { id: 1, name: "Naveen", marks: 85, course: "MERN" },
    { id: 2, name: "John", marks: 45, course: "PYTHON" },
    { id: 3, name: "Priya", marks: 72, course: "JAVA" },
    { id: 4, name: "Arun", marks: 95, course: "React" },
];

//Task 1: Print All Students
console.log("---- All Students----");
for (let i = 0; i < students.length; i++) {
    console.log(
        students[i].id,
        students[i].name,
        students[i].marks,
        students[i].course,
    );
}

// Task 2: Pass / Fail
console.log("---- Pass / Fail ----");
for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
        console.log(students[i].name + " - Pass");
    } else {
        console.log(students[i].name + " - Fail");
    }
}

// Task 3: Grade System
console.log("---- Grade System ----");
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 90) {
        console.log(students[i].name + " - A Grade");
    } else if (students[i].marks >= 75) {
        console.log(students[i].name + " - B Grade");
    } else if (students[i].marks >= 50) {
        console.log(students[i].name + " - C Grade");
    } else {
        console.log(students[i].name + " - Fail");
    }
}

// Task 4: Topper Student
let topper = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > topper.marks) {
        topper = students[i];
    }
}
console.log("Topper is " + topper.name + " - " + topper.mark);

// Task 5: Course Search
console.log("---- React Student ----");
for (let i = 0; i < students.length; i++) {
    if (students[i].course === "React") {
        console.log(
            students[i].id,
            students[i].name,
            students[i].marks,
            students[i].course
        );
    }
}

// Task 6: Add New Student
students.push({ id: 5, name: "Rahul", mark: 88, course: "Node JS" });

console.log("---- After Adding New Student ----");
for (let i = 0; i < students.length; i++) {
    console.log(
        students[i].id,
        students[i].name,
        students[i].marks,
        students[i].course
    );
}

// Task 7: Attendance System
let condition = "present";

console.log("---- Attendance ----");
switch (condition) {
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;
    default:
        console.log("Invalid Status");
}

// Task 8: Login System
let username = "admin";
let password = "1234";

console.log("---- Login ----");
if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}
