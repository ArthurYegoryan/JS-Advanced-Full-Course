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

class University {
    constructor(...datas) {
        datas.reduce((acc, item) => {
            acc[item[0].role] = [...item];
        
            return acc;
        }, this);
    }

    getMembers(role) {
        return this[role];
    }

    addMember(member) {
        try {
            const datas = this[member.role];
        
            if (!datas) {
                throw new Error("Unknown memeber role!");
            }
        
            datas.push(member);
        } catch ({message}) {
            console.error(message);
        }
    }

    removeMember({ role, name }) {
        let datas = this[role];
    
        if (!datas) throw new Error("Unknown member role!");
    
        try {
            const memberIndex = datas.findIndex(
                ({ name: personName }) => personName === name
            );
        
            if (memberIndex === -1) {
                throw new Error(`Couldn't find ${role} with name ${name}!`);
            }
        
            this[role] = [
                ...datas.slice(0, memberIndex),
                ...datas.slice(memberIndex + 1),
            ];
        } catch ({ message }) {
            console.error(message);
        }
    }

    startLesson() {
        try {
            if (this["teacher"][0].energy - 5 < 0) {
                throw new Error("Today is enough, teachers are tired!");
            }

            this["teacher"].map((teacher) => teacher.energy -= 5);
            this["student"].map((teacher) => teacher.energy -= 2);
        } catch ({message}) {
            console.error(message);
        }        
    }
}

class UniversityMember {
    constructor(name = "", age = 18, role = "", energy = 24) {
        this.name = name;
        this.age = age;
        this. role = role;
        this.energy = energy;
    }

    info() {
        return {
            name: this.name,
            age: this.age,
            role: this.role,
            energy: this.energy,
        };
    }
}

class Teacher extends UniversityMember {
    constructor(name = "", age = 18, role = "", energy = 24) {
        super(name, age, role, energy)
    }
}

class Student extends UniversityMember {
    constructor(name = "", age = 18, role = "", energy = 24) {
        super(name, age, role, energy)
    }
}

const university = new University(teachers, students);
const teacher = new Teacher("Teacher Teacheryan", 30, "teacher", 24);
const student = new Student("Student Studentyan", 18, "student", 24);

university.addMember(teacher.info());
university.addMember(student.info());

console.log(university.getMembers("teacher"));
console.log(university.getMembers("student"));
console.log("--------------------------------------------");

university.removeMember({
    name: "Babken Babkenyan",
    role: "teacher",
});
console.log(university.getMembers("teacher"));
console.log("--------------------------------------------");

for (let i = 0; i < 5; i++) {
    university.startLesson();
    console.log(university.getMembers("teacher"));
    console.log(university.getMembers("student"));
    console.log("--------------------------------------------");
}