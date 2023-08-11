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

function filterUsers(users) {
    const resultArr = users.filter((element) => element.lang !== "ru");

    return resultArr;
}

console.log(JSON.stringify(filterUsers(users), undefined, 2));