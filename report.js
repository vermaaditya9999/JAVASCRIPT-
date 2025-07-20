 function generateReport(student){
     let total=0;
 
 for(let i=0; i<student.marks.length;i++){
     total+=student.marks[i];
 }
 const average=total/ student.marks.length;
 let grade="";
  if(average>=90){
      grade="A+"
  }else if(average>=75){
      grade="A"
  }else if(average>=60){
      grade="B"
  }
  else{
      grade="C"
  }
  return`Report card for ${student.name}(Age:${student.age})
  Marks:${student.marks.join(",")}
  Average:${average.toFixed(2)}
  Grade:${grade}
  status:${student.isPassed ?"Passed":"Failed"}  `;
 }      
const student = [
    {
        name: "Aditya",
        age: 20,
        marks: [74, 90, 30, 20, 20],
        isPassed: true
    },
    {
        name: "Riya",
        age: 19,
        marks: [90, 92, 88, 94, 96],
        isPassed: true
    },
    {
        name: "Karan",
        age: 21,
        marks: [50, 40, 30, 20, 10],
        isPassed: false
    }
];
 
function generateReport(student) {
    let total = 0;

    for (let i = 0; i < student.marks.length; i++) {
        total += student.marks[i];
    }

    const average = total / student.marks.length;
    student.average=average
    let grade = "";

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else {
        grade = "C";
    }

    return `📋 Report Card for ${student.name} (Age: ${student.age})
Marks: ${student.marks.join(", ")}
Average: ${average.toFixed(2)}
Grade: ${grade}
Status: ${student.isPassed ? "Passed ✅" : "Failed ❌"}
`;
}
 

const students = [
    { name: "Aditya", age: 20, marks: [74, 90, 30, 20, 20], isPassed: true },
    { name: "Riya", age: 19, marks: [90, 92, 88, 94, 96], isPassed: true },
    { name: "Karan", age: 21, marks: [50, 40, 30, 20, 10], isPassed: false },
    { name: "Simran", age: 18, marks: [85, 89, 91, 93, 87], isPassed: true }
];




function generateReport(student) {
    let total = 0;
    for (let i = 0; i < student.marks.length; i++) {
        total += student.marks[i];
    }

    const average = total / student.marks.length;
    student.average = average;  

    let grade = "";
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else grade = "C";

    return `📋 Report Card for ${student.name} (Age: ${student.age})
Marks: ${student.marks.join(", ")}
Average: ${average.toFixed(2)}
Grade: ${grade}
Status: ${student.isPassed ? "Passed ✅" : "Failed ❌"}\n`;
}

 console.log("🔹 All Student Reports:");
students.forEach((student) => {
    console.log(generateReport(student));
});

 
const passedStudents = students.filter((s) => s.isPassed === true);
console.log("🔹 Passed Students:");
passedStudents.forEach((s) => console.log(s.name));

 let topper = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].average > topper.average) {
        topper = students[i];
    }
}
console.log(`🔹 Topper is ${topper.name} with Average: ${topper.average.toFixed(2)}`);

 students.sort((a, b) => b.average - a.average);
console.log("🔹 Students Sorted by Average:");
students.forEach((s) =>
    console.log(`${s.name} - ${s.average.toFixed(2)}`)
);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  