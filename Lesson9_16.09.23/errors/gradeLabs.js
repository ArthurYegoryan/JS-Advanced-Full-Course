const studentLabs2 = [
    {
        student: "Blake",
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];

const number = 5

const trueAnswer = Math.pow(number, number);

function gradeLabs(array) {
    for (let lab of array) {
        try {
            if (lab.runLab(number) === trueAnswer) {
                console.log(`${lab.student}: success!`);
            } else {
                console.log(`${lab.student}: fail!`);
            }
        } catch (err) {
            console.error(`${lab.student}: Error thrown`);
        }
    }
}

gradeLabs(studentLabs2);