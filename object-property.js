const students = [
    {id: 21, name: "Sajib"},
    {id: 43, name: "Wasim"},
    {id: 54, name: "Jisan"}   
];

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// }

// const names = students.map(x => x.name);
// console.log(names);

const biggerIdStudents = students.filter(x => x.id > 40)
console.log(biggerIdStudents);