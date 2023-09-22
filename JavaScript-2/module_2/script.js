const students = [
  {
    id: 0,
    name: "Sindre Hoksund",
    age: 23,
    course_id: 2
  },
  {
    id: 1,
    name: "Aksel Moholt",
    age: 24,
    course_id: 2
  },
  {
    id: 3,
    name: "Pernille Olsen",
    age: 26,
    course_id: 1
  },
  {
    id: 4,
    name: "Nasrudin Trulsen",
    age: 23,
    course_id: 2
  },
  {
    id: 13,
    name: "Marius Friele",
    age: 23,
    course_id: 3
  }
];

console.log(students);

const FEDstudents = students.filter(({ course_id, age }) => course_id === 2 && age < 24);

console.log(FEDstudents);