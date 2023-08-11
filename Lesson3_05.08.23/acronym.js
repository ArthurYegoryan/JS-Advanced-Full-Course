const str = "Prisoner of War";

// Version 1
// function acronym(str) {
//   let result = str[0];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       result += str[i + 1].toUpperCase();
//     }
//   }
  
//   return result;
// }

//Version 2
function acronym(str) {
    let resultArr = Array.of(str[0]);

    for (let i = 1; i < str.length; i++) {
        if (str[i] === " ") {
            resultArr.push(str[i + 1].toUpperCase());
        }
    }

    return resultArr.reduce((val, arg) => val + arg, "");
}

console.log(acronym(str));