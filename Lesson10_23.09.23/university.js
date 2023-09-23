const teachers = [
    {
        name: "Abgar Abgaryan",
        age: 26,
        role: "teacher",
        energy: 24,
    },
    {
        name: "Babken Babkenyan",
        age: 24,
        role: "teacher",
        energy: 24,
    },
    {
        name: "Simon Simonyan",
        age: 25,
        role: "teacher",
        energy: 24,
    },
];

const students = [
    {
        name: "Sargis Sargsyan",
        age: 18,
        role: "student",
        energy: 24,
    },
    {
        name: "Ashot Ashotyan",
        age: 19,
        role: "student",
        energy: 24,
    },
    {
        name: "Grigor Grigoryan",
        age: 18,
        role: "student",
        energy: 24,
    },
];

// TODO:
// Make energy validation
class University {
    constructor (teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }

    addMember(member) {
        try {
            if (member.role === "teacher") this.teachers.push(member);
            else if (member.role === "student") this.students.push(member);
            else throw new Error("Unknown memeber role!");
        } catch (err) { console.error(err.message); }
    }

    removeMember(member) {
        try {
            if (member.role === "teacher") {
                try {
                    const memberIndex = this.teachers.findIndex((person) => person.name === member.name);

                    if (memberIndex === -1) throw new Error("Couldn't find teacher with that name!");
                    else this.teachers = [...this.teachers.slice(0, memberIndex), ...this.teachers.slice(memberIndex + 1)];
                } catch (err) {
                    console.error(err.message);
                }
            }
            else if (member.role === "student") {
                try {
                    const memberIndex = this.students.findIndex((person) => person.name === member.name);

                    if (memberIndex === -1) throw new Error("Couldn't find student with that name!");
                    else this.students = [...this.students.slice(0, memberIndex), ...this.students.slice(memberIndex + 1)];
                } catch (err) {
                    console.error(err.message);
                }
            }
            else throw new Error("Unknown memeber role!");
        } catch (err) {
            console.error(err.message);
        }
    }

    startLesson() {
        teachers.map((teacher) => teacher.energy -= 5);
        students.map((student) => student.energy -= 2);
    }
}



const university = new University(teachers, students);

university.addMember({
    name: "Vardan Vardanyan",
    age: 27,
    role: "teacher",
    energy: 24,
});
console.log(university.teachers);

university.removeMember({
    name: "Babken Babkenyan",
    role: "teacher",
});
console.log(university.teachers);

university.startLesson();

console.log(university.teachers);
console.log(university.students);