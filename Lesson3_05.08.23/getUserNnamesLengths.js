const users = [
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
    },
];
  
function getUsernameLengths(users) {
    const userNamesLengths = [];

    users.forEach(element => userNamesLengths.push(element.username.length));

    return userNamesLengths;
}

console.log(getUsernameLengths(users));