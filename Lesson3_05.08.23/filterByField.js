const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
        isAstronaut: true, 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
        isAstronaut: true, 
    }, 
    { 
        username: "Elon Musk", 
        isAstronaut: false, 
    }, 
];

const filterField = "isAstronaut";

function filterByField(users, filterField) {
    let isAstronaut = false;
    
    if (filterField === "isAstronaut") {
        isAstronaut = true;
    }
    
    const resultArr = users.filter((element) => element.isAstronaut === isAstronaut);

    return resultArr;
}

console.log(JSON.stringify(filterByField(users, filterField), undefined, 2));