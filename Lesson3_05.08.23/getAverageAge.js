const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
        age: 56, 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
        age: 54, 
    }, 
];

    function getAverageAge(users) {
    const totalAge = users.reduce((total, user) => total + user.age, 0);

    const averageAge = totalAge / users.length;

    return averageAge;
}

console.log(getAverageAge(users));