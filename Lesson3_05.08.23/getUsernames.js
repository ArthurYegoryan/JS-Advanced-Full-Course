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
  
function getUserNames(users) {
    const userNames = [];

    users.forEach(element => userNames.push(element.username));

    return userNames;
}

console.log(getUserNames(users));