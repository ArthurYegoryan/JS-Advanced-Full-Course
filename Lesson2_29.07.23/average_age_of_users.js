const users = [ 
    { 
      name: "John Doe", 
      age: 30, 
      isAdmin: false, 
    }, 
    { 
      name: "Jane Smith", 
      age: 25, 
      isAdmin: true, 
    }, 
    { 
      name: "Bob Johnson", 
      age: 40, 
      isAdmin: false, 
    }, 
];

function getAverageAge(users) {
    const sumOfAges = users.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);

    const averageAge = sumOfAges / users.length;

    return averageAge;
}

console.log(getAverageAge(users));